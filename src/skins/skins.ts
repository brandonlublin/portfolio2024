export type Skin = {
  id: string;
  label: string;
  swatch: [string, string];
};

export const skins: Skin[] = [
  { id: 'classic', label: 'Classic 2006', swatch: ['#003399', '#ff6600'] },
  { id: 'scene', label: 'Scene Kid', swatch: ['#000000', '#ff2fa8'] },
  { id: 'bubblegum', label: 'Glitter Bubblegum', swatch: ['#ff4fa3', '#9c27b0'] },
  { id: 'chrome', label: 'Y2K Chrome', swatch: ['#9aa9b8', '#0077c8'] },
  { id: 'terminal', label: 'Hacker Terminal', swatch: ['#000000', '#33ff66'] },
  { id: 'vaporwave', label: 'Vaporwave', swatch: ['#ff71ce', '#01cdfe'] },
  { id: 'grunge', label: 'Skate Grunge', swatch: ['#3b3a2e', '#c8a24a'] },
];

export const defaultSkin = skins[0].id;
