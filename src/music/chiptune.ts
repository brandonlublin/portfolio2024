import { ChipSong } from './tracks';

const LOOPS = 4;
const LOOKAHEAD_SECONDS = 0.15;
const TICK_MS = 40;

const midiToHz = (note: number) => 440 * Math.pow(2, (note - 69) / 12);

export const stepSeconds = (song: ChipSong) => 60 / song.bpm / 2;

export const songSeconds = (song: ChipSong) => song.lead.length * LOOPS * stepSeconds(song);

export class Chiptune {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private timer: number | undefined;
  private song: ChipSong | null = null;
  private step = 0;
  private nextTime = 0;
  private voices = new Set<OscillatorNode>();

  onProgress: (seconds: number) => void = () => undefined;
  onEnd: () => void = () => undefined;

  load(song: ChipSong) {
    this.voices.forEach((osc) => {
      osc.stop();
      osc.disconnect();
    });
    this.voices.clear();
    this.song = song;
    this.step = 0;
    this.nextTime = 0;
    this.onProgress(0);
  }

  play(song: ChipSong) {
    if (song !== this.song) this.load(song);
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.5;
      this.master.connect(this.ctx.destination);
    }
    this.ctx.resume();
    this.nextTime = Math.max(this.nextTime, this.ctx.currentTime + 0.05);
    window.clearInterval(this.timer);
    this.timer = window.setInterval(() => this.schedule(), TICK_MS);
  }

  pause() {
    window.clearInterval(this.timer);
    this.timer = undefined;
    this.ctx?.suspend();
  }

  destroy() {
    this.pause();
    this.ctx?.close();
    this.ctx = null;
  }

  private schedule() {
    const { ctx, song } = this;
    if (!ctx || !song) return;
    const step = stepSeconds(song);
    const totalSteps = song.lead.length * LOOPS;

    while (this.nextTime < ctx.currentTime + LOOKAHEAD_SECONDS) {
      if (this.step >= totalSteps) {
        if (ctx.currentTime < this.nextTime) break;
        this.pause();
        this.step = 0;
        this.onEnd();
        return;
      }
      const lead = song.lead[this.step % song.lead.length];
      if (lead) this.blip(midiToHz(lead), step * 0.9, 'square', 0.07);
      if (this.step % 2 === 0) {
        this.blip(midiToHz(song.bass[(this.step / 2) % song.bass.length]), step * 1.8, 'triangle', 0.18);
      }
      this.nextTime += step;
      this.step++;
    }
    this.onProgress(this.step * step);
  }

  private blip(freq: number, duration: number, type: OscillatorType, volume: number) {
    if (!this.ctx || !this.master) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume, this.nextTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.nextTime + duration);
    osc.connect(gain).connect(this.master);
    osc.onended = () => this.voices.delete(osc);
    this.voices.add(osc);
    osc.start(this.nextTime);
    osc.stop(this.nextTime + duration + 0.02);
  }
}
