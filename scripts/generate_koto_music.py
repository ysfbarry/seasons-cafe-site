"""
Generates an original ambient koto composition for the Seasons Cafe location videos.

Uses Karplus-Strong physical modeling for plucked-string timbre over the Hirajoshi
pentatonic scale, the traditional Japanese tuning used for contemplative koto music.
Everything here is synthesized from scratch, so the result is original and royalty-free.
"""

import numpy as np
import wave
import struct

SR = 44100
DURATION = 75.0

# Hirajoshi scale on D across three octaves.
SCALE = {
    'D3': 146.83, 'E3': 164.81, 'F3': 174.61, 'A3': 220.00, 'Bb3': 233.08,
    'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'A4': 440.00, 'Bb4': 466.16,
    'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'A5': 880.00,
}


def pluck(freq, dur, amp=0.5, damping=0.996, brightness=0.5):
    """Karplus-Strong plucked string. Longer buffers ring longer, like a koto."""
    n = int(SR * dur)
    buf_len = max(2, int(SR / freq))

    rng = np.random.default_rng(int(freq * 1000) % 2**31)
    buf = rng.uniform(-1, 1, buf_len)

    # Low-pass the initial excitation; less brightness = warmer, more wooden attack.
    kernel = np.array([brightness, 1 - brightness])
    buf = np.convolve(buf, kernel, mode='same')

    out = np.zeros(n)
    idx = 0
    for i in range(n):
        out[i] = buf[idx]
        nxt = (idx + 1) % buf_len
        buf[idx] = damping * 0.5 * (buf[idx] + buf[nxt])
        idx = nxt

    # Soft attack so notes bloom instead of clicking.
    attack = min(int(SR * 0.004), n)
    out[:attack] *= np.linspace(0, 1, attack)

    # Natural exponential decay plus a clean tail-out.
    out *= np.exp(-np.linspace(0, 3.2, n))
    tail = min(int(SR * 0.25), n)
    out[-tail:] *= np.linspace(1, 0, tail)

    return out * amp


def drone(freq, dur, amp=0.05):
    """Breathy sustained pad under the melody, evoking a distant shakuhachi."""
    t = np.linspace(0, dur, int(SR * dur), endpoint=False)
    sig = np.zeros_like(t)
    for harmonic, weight in [(1, 1.0), (2, 0.28), (3, 0.12), (4, 0.05)]:
        detune = 1 + 0.0015 * np.sin(2 * np.pi * 0.07 * t * harmonic)
        sig += weight * np.sin(2 * np.pi * freq * harmonic * t * detune)

    # Slow swell keeps the pad from feeling static.
    sig *= 0.75 + 0.25 * np.sin(2 * np.pi * 0.045 * t - np.pi / 2)
    return sig * amp


def reverb(sig, mix=0.32):
    """Schroeder-style reverb: parallel combs into series allpasses."""
    out = np.copy(sig)
    wet = np.zeros_like(sig)

    for delay_ms, decay in [(43.1, 0.79), (37.3, 0.80), (53.7, 0.76), (29.7, 0.82)]:
        d = int(SR * delay_ms / 1000)
        comb = np.zeros_like(sig)
        comb[d:] = sig[:-d]
        for _ in range(3):
            shifted = np.zeros_like(comb)
            shifted[d:] = comb[:-d] * decay
            comb = comb + shifted
        wet += comb * 0.25

    for delay_ms, g in [(8.3, 0.7), (3.1, 0.7)]:
        d = int(SR * delay_ms / 1000)
        shifted = np.zeros_like(wet)
        shifted[d:] = wet[:-d]
        wet = -g * wet + shifted + g * shifted

    peak = np.max(np.abs(wet))
    if peak > 0:
        wet = wet / peak * np.max(np.abs(sig))

    return out * (1 - mix) + wet * mix


def build():
    total = int(SR * DURATION)
    track = np.zeros(total)

    # Sparse, unhurried phrases. Each entry is (start_beat, note, duration, velocity).
    phrases = [
        # Opening — single notes, lots of air between them.
        (0.0, 'D4', 4.0, 0.42), (2.5, 'A4', 3.5, 0.30), (5.0, 'F4', 4.0, 0.38),
        (8.0, 'E4', 3.5, 0.34), (10.5, 'D4', 4.5, 0.40),

        # Answering phrase, drifting up.
        (14.0, 'A4', 3.5, 0.36), (16.0, 'Bb4', 3.0, 0.28), (18.0, 'A4', 4.0, 0.34),
        (21.0, 'F4', 4.0, 0.38), (23.5, 'E4', 4.5, 0.32),

        # Higher register for lift.
        (27.0, 'D5', 3.5, 0.30), (29.0, 'A4', 3.5, 0.28), (31.0, 'F4', 4.0, 0.34),
        (34.0, 'E5', 3.0, 0.26), (36.0, 'D5', 4.0, 0.30),

        # Settling back down.
        (39.5, 'A4', 4.0, 0.34), (42.0, 'F4', 4.0, 0.36), (44.5, 'E4', 4.0, 0.34),
        (47.0, 'D4', 5.0, 0.40),

        # Low resonance.
        (51.0, 'D3', 6.0, 0.30), (53.0, 'A3', 5.0, 0.24), (56.0, 'F4', 4.0, 0.32),
        (58.5, 'E4', 4.0, 0.30),

        # Final resolution, fading into stillness.
        (62.0, 'A4', 4.5, 0.28), (64.5, 'F4', 4.5, 0.30), (67.0, 'D4', 6.0, 0.36),
        (70.0, 'D3', 5.0, 0.26),
    ]

    for start, note, dur, vel in phrases:
        s = int(SR * start)
        # Higher notes get a brighter pluck, lower notes stay warm.
        bright = 0.42 if SCALE[note] < 300 else 0.55
        tone = pluck(SCALE[note], dur, amp=vel, damping=0.9965, brightness=bright)
        end = min(s + len(tone), total)
        track[s:end] += tone[:end - s]

    # Root drone underneath the whole piece.
    track += drone(SCALE['D3'], DURATION, amp=0.045)
    track += drone(SCALE['A3'], DURATION, amp=0.022)

    track = reverb(track, mix=0.34)

    # Gentle 4s fade in, 6s fade out.
    fi, fo = int(SR * 4.0), int(SR * 6.0)
    track[:fi] *= np.linspace(0, 1, fi) ** 1.5
    track[-fo:] *= np.linspace(1, 0, fo) ** 1.5

    # Normalize with headroom so it sits quietly behind video.
    peak = np.max(np.abs(track))
    if peak > 0:
        track = track / peak * 0.72

    return track


def write_wav(path, mono):
    # Slight stereo widening for a more spacious feel.
    d = int(SR * 0.012)
    left = np.copy(mono)
    right = np.zeros_like(mono)
    right[d:] = mono[:-d]
    right = right * 0.92 + mono * 0.08

    stereo = np.empty(len(mono) * 2)
    stereo[0::2] = np.clip(left, -1, 1)
    stereo[1::2] = np.clip(right, -1, 1)
    pcm = (stereo * 32767).astype(np.int16)

    with wave.open(path, 'w') as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(struct.pack(f'<{len(pcm)}h', *pcm))


if __name__ == '__main__':
    print('Synthesizing koto composition...')
    audio = build()
    write_wav('/tmp/koto_ambient.wav', audio)
    print(f'Done: {DURATION}s written to /tmp/koto_ambient.wav')
