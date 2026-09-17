// Ambient Piano & Pad Soundscape Generator using Web Audio API
// Self-contained, zero external network dependency, elegant emotional tone.

class AmbientSoundscape {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.intervalId = null;
    this.masterGain = null;
    this.reverbNode = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      // Master gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Simple impulse response for warm reverb
      this.reverbNode = this.createReverb();
      this.reverbNode.connect(this.masterGain);
    }
  }

  createReverb() {
    const convolver = this.ctx.createConvolver();
    const rate = this.ctx.sampleRate;
    const length = rate * 3.0; // 3 seconds decay
    const impulse = this.ctx.createBuffer(2, length, rate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
      const decay = Math.exp(-i / (rate * 0.9));
      left[i] = (Math.random() * 2 - 1) * decay;
      right[i] = (Math.random() * 2 - 1) * decay;
    }

    convolver.buffer = impulse;
    return convolver;
  }

  playNote(freq, timeOffset, duration = 3.5, velocity = 0.15) {
    if (!this.ctx || !this.isPlaying) return;

    const startTime = this.ctx.currentTime + timeOffset;
    
    // Sine + subtle triangle for a soft Rhodes/Piano feel
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, startTime);

    // Warm Lowpass filter
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, startTime);
    filter.frequency.exponentialRampToValueAtTime(300, startTime + duration);

    // Envelope
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(velocity, startTime + 0.08); // gentle attack
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

    // Frequencies for a heartwarming progression (Dmaj -> F#m -> Gmaj -> Aadd9)
    // Tender, contemplative, emotional notes
    const chords = [
      // Dmaj9 (D, F#, A, C#, E)
      [146.83, 220.00, 293.66, 369.99, 440.00, 554.37, 659.25],
      // Bm9 (B, D, F#, A, C#)
      [123.47, 220.00, 293.66, 369.99, 440.00, 554.37],
      // Gmaj7 (G, B, D, F#)
      [196.00, 246.94, 293.66, 369.99, 493.88, 587.33],
      // Asus4 -> A (A, D, E, G#)
      [220.00, 293.66, 329.63, 440.00, 554.37, 659.25]
    ];

    let chordIndex = 0;

    const playPhrase = () => {
      if (!this.isPlaying) return;
      const currentChord = chords[chordIndex % chords.length];
      chordIndex++;

      // Play root low note
      this.playNote(currentChord[0] / 2, 0, 7.0, 0.22);
      
      // Arpeggiate harmonic notes gently
      currentChord.slice(1).forEach((freq, idx) => {
        const delay = idx * 0.45 + (Math.random() * 0.1);
        this.playNote(freq, delay, 4.5, 0.12 - idx * 0.012);
      });

      // Occasional upper bell sparkle
      if (Math.random() > 0.3) {
        const topNote = currentChord[currentChord.length - 1] * 1.5;
        this.playNote(topNote, 2.2, 5.0, 0.06);
      }
    };

    // Play immediately
    playPhrase();
    // Loop progression every 4.8 seconds
    this.intervalId = setInterval(playPhrase, 4800);
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
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

export const soundscape = new AmbientSoundscape();
