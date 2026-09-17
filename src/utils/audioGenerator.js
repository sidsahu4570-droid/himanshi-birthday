// Soft, Romantic Music-Box & Ambient Piano Birthday Soundscape
// Generates a slow, tender, romantic music-box and warm piano birthday melody.
// 100% self-contained via Web Audio API. 0 external network requests, zero lag, smooth loop.

class BirthdayAmbientSoundscape {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timerId = null;
    this.masterGain = null;
    this.reverbNode = null;
    this.volume = 0.18; // 18% volume for soft background ambience
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Reverb Convolver for warm room resonance
      this.reverbNode = this.createReverb();
      this.reverbNode.connect(this.masterGain);
    }
  }

  createReverb() {
    const convolver = this.ctx.createConvolver();
    const rate = this.ctx.sampleRate;
    const length = rate * 3.5; // 3.5 seconds lush decay
    const impulse = this.ctx.createBuffer(2, length, rate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
      const decay = Math.exp(-i / (rate * 1.1));
      left[i] = (Math.random() * 2 - 1) * decay;
      right[i] = (Math.random() * 2 - 1) * decay;
    }

    convolver.buffer = impulse;
    return convolver;
  }

  // Soft Music-Box / Celesta Bell Note
  playMusicBoxNote(freq, timeOffset, duration = 2.8, velocity = 0.14) {
    if (!this.ctx || !this.isPlaying) return;

    const startTime = this.ctx.currentTime + timeOffset;

    // Fundamental Bell Sine
    const osc1 = this.ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, startTime);

    // Harmonic Sparkle Overtone (Music Box metallic shimmer)
    const osc2 = this.ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2.76, startTime);

    // Subtle Third Octave Ting
    const osc3 = this.ctx.createOscillator();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(freq * 4.0, startTime);

    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2800, startTime);
    filter.frequency.exponentialRampToValueAtTime(800, startTime + duration);

    // Instant bell strike attack + slow exponential ring
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(velocity, startTime + 0.02);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    const overtoneGain = this.ctx.createGain();
    overtoneGain.gain.setValueAtTime(velocity * 0.25, startTime);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.8);

    osc1.connect(filter);
    osc2.connect(overtoneGain);
    osc3.connect(overtoneGain);
    overtoneGain.connect(filter);

    filter.connect(noteGain);
    noteGain.connect(this.masterGain);
    noteGain.connect(this.reverbNode);

    osc1.start(startTime);
    osc2.start(startTime);
    osc3.start(startTime);

    osc1.stop(startTime + duration);
    osc2.stop(startTime + duration);
    osc3.stop(startTime + duration);
  }

  // Warm Rhodes/Piano Bass & Pad Note
  playPianoChords(freq, timeOffset, duration = 4.5, velocity = 0.12) {
    if (!this.ctx || !this.isPlaying) return;

    const startTime = this.ctx.currentTime + timeOffset;
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, startTime);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(950, startTime);
    filter.frequency.exponentialRampToValueAtTime(250, startTime + duration);

    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(velocity, startTime + 0.09);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);

    noteGain.connect(this.masterGain);
    noteGain.connect(this.reverbNode);

    osc.start(startTime);
    osc2.start(startTime);
    osc.stop(startTime + duration);
    osc2.stop(startTime + duration);
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;

    // Frequencies (in Hz)
    const N = {
      D2: 73.42,
      F2: 87.31,
      G2: 98.00,
      A2: 110.00,
      B2: 123.47,
      D3: 146.83,
      E3: 164.81,
      F3: 174.61,
      Fs3: 185.00,
      G3: 196.00,
      A3: 220.00,
      B3: 246.94,
      Cs4: 277.18,
      D4: 293.66,
      E4: 329.63,
      Fs4: 369.99,
      G4: 392.00,
      A4: 440.00,
      B4: 493.88,
      Cs5: 554.37,
      D5: 587.33,
      E5: 659.25,
      Fs5: 739.99,
      G5: 783.99,
      A5: 880.00,
      B5: 987.77,
      D6: 1174.66,
    };

    const playFullBirthdayMovement = () => {
      if (!this.isPlaying) return;

      // ==========================================
      // PHRASE 1: "Happy birthday to you..."
      // ==========================================
      // Piano Underlay (Dmaj9)
      this.playPianoChords(N.D2, 0.0, 5.0, 0.16);
      this.playPianoChords(N.A3, 0.2, 4.5, 0.08);
      this.playPianoChords(N.Fs4, 0.4, 4.0, 0.08);
      this.playPianoChords(N.Cs5, 0.6, 3.8, 0.07);

      // Music-Box Birthday Melody
      this.playMusicBoxNote(N.A4, 0.0, 1.2, 0.13);
      this.playMusicBoxNote(N.A4, 0.6, 1.2, 0.13);
      this.playMusicBoxNote(N.B4, 1.3, 1.6, 0.15);
      this.playMusicBoxNote(N.A4, 2.2, 1.6, 0.14);
      this.playMusicBoxNote(N.D5, 3.1, 1.8, 0.16);
      this.playMusicBoxNote(N.Cs5, 4.0, 2.5, 0.14);

      // ==========================================
      // PHRASE 2: "Happy birthday to you..."
      // ==========================================
      // Piano Underlay (Asus4 -> A)
      this.playPianoChords(N.A2, 5.2, 5.0, 0.15);
      this.playPianoChords(N.E3, 5.4, 4.5, 0.08);
      this.playPianoChords(N.A3, 5.6, 4.0, 0.08);
      this.playPianoChords(N.Cs4, 5.8, 3.8, 0.07);

      // Music-Box Melody
      this.playMusicBoxNote(N.A4, 5.2, 1.2, 0.13);
      this.playMusicBoxNote(N.A4, 5.8, 1.2, 0.13);
      this.playMusicBoxNote(N.B4, 6.5, 1.6, 0.15);
      this.playMusicBoxNote(N.A4, 7.4, 1.6, 0.14);
      this.playMusicBoxNote(N.E5, 8.3, 1.8, 0.16);
      this.playMusicBoxNote(N.D5, 9.2, 2.6, 0.15);

      // ==========================================
      // PHRASE 3: "Happy birthday dear Himanshi..."
      // ==========================================
      // Piano Underlay (Gmaj7 -> Bm9)
      this.playPianoChords(N.G2, 10.4, 5.5, 0.16);
      this.playPianoChords(N.D3, 10.6, 4.5, 0.08);
      this.playPianoChords(N.Fs4, 10.8, 4.0, 0.08);
      this.playPianoChords(N.B4, 11.0, 3.8, 0.07);

      // Music-Box Melody (High tender climb)
      this.playMusicBoxNote(N.A4, 10.4, 1.1, 0.13);
      this.playMusicBoxNote(N.A4, 11.0, 1.1, 0.13);
      this.playMusicBoxNote(N.A5, 11.7, 2.0, 0.17); // High octave leap
      this.playMusicBoxNote(N.Fs5, 12.8, 1.8, 0.15);
      this.playMusicBoxNote(N.D5, 13.7, 1.8, 0.15);
      this.playMusicBoxNote(N.Cs5, 14.6, 1.8, 0.14);
      this.playMusicBoxNote(N.B4, 15.5, 2.4, 0.15);

      // ==========================================
      // PHRASE 4: "Happy birthday to you..."
      // ==========================================
      // Piano Underlay (Em7 -> A7 -> Dmaj9)
      this.playPianoChords(N.E2, 16.8, 4.5, 0.15);
      this.playPianoChords(N.B2, 17.0, 4.0, 0.08);
      this.playPianoChords(N.A2, 18.2, 4.0, 0.14);
      this.playPianoChords(N.D2, 19.5, 6.0, 0.18); // Peaceful D root resolve

      // Music-Box Melody
      this.playMusicBoxNote(N.G5, 16.8, 1.2, 0.14);
      this.playMusicBoxNote(N.G5, 17.4, 1.2, 0.14);
      this.playMusicBoxNote(N.Fs5, 18.1, 1.6, 0.15);
      this.playMusicBoxNote(N.D5, 19.0, 1.8, 0.15);
      this.playMusicBoxNote(N.E5, 19.9, 2.0, 0.16);
      this.playMusicBoxNote(N.D5, 20.9, 3.5, 0.16);

      // ==========================================
      // OUTRO / ARPEGGIO SPARKLE (Gentle breath)
      // ==========================================
      setTimeout(() => {
        if (!this.isPlaying) return;
        this.playMusicBoxNote(N.Fs4, 0.0, 3.0, 0.07);
        this.playMusicBoxNote(N.A4, 0.5, 3.0, 0.07);
        this.playMusicBoxNote(N.Cs5, 1.0, 3.5, 0.08);
        this.playMusicBoxNote(N.Fs5, 1.5, 4.0, 0.09);
        this.playMusicBoxNote(N.D6, 2.2, 4.5, 0.07);
      }, 21500);
    };

    // Play initial movement
    playFullBirthdayMovement();

    // Loop seamless cycle every 25.5 seconds
    this.timerId = setInterval(playFullBirthdayMovement, 25500);
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const soundscape = new BirthdayAmbientSoundscape();
