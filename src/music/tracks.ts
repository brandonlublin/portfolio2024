export type ChipSong = {
  title: string;
  artist: string;
  bpm: number;
  lead: number[];
  bass: number[];
};

export const tracks: ChipSong[] = [
  {
    title: 'Hello World',
    artist: 'Brandon and the Bundlers',
    bpm: 132,
    lead: [72, 76, 79, 76, 72, 76, 79, 84, 74, 77, 81, 77, 74, 77, 81, 86, 72, 76, 79, 76, 72, 76, 79, 84, 79, 77, 76, 74, 72, 0, 72, 0],
    bass: [48, 48, 55, 55, 50, 50, 57, 57, 48, 48, 55, 55, 43, 43, 48, 48],
  },
  {
    title: 'Merge Conflict (Emo Mix)',
    artist: 'Brandon and the Bundlers',
    bpm: 110,
    lead: [69, 72, 76, 72, 69, 72, 76, 79, 77, 76, 74, 72, 71, 0, 71, 0, 69, 72, 76, 72, 69, 72, 76, 81, 79, 77, 76, 74, 76, 0, 0, 0],
    bass: [45, 45, 45, 45, 41, 41, 41, 41, 48, 48, 48, 48, 43, 43, 43, 43],
  },
  {
    title: 'Deploy Friday',
    artist: 'Brandon and the Bundlers',
    bpm: 150,
    lead: [76, 0, 76, 0, 76, 72, 76, 79, 0, 67, 0, 0, 72, 0, 67, 64, 69, 71, 70, 69, 67, 76, 79, 81, 77, 79, 76, 72, 74, 71, 0, 0],
    bass: [40, 52, 40, 52, 43, 55, 43, 55, 45, 57, 45, 57, 47, 59, 47, 59],
  },
];
