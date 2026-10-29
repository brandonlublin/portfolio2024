import { useEffect, useState } from 'react';
import { defaultSkin, skins } from './skins';

const STORAGE_KEY = 'profile-skin';

const readSkin = (): string => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return skins.some((s) => s.id === stored) ? (stored as string) : defaultSkin;
  } catch {
    return defaultSkin;
  }
};

export const useSkin = () => {
  const [skin, setSkin] = useState(readSkin);

  useEffect(() => {
    document.documentElement.dataset.skin = skin;
    try {
      localStorage.setItem(STORAGE_KEY, skin);
    } catch {
      return;
    }
  }, [skin]);

  return [skin, setSkin] as const;
};
