import { useEffect, useRef, useState } from 'react';
import { Chiptune, songSeconds } from '../../music/chiptune';
import { tracks } from '../../music/tracks';
import styles from './MusicPlayer.module.css';

const formatTime = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;

const MusicPlayer = () => {
  const engineRef = useRef<Chiptune | null>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const track = tracks[index];
  const total = songSeconds(track);

  const engine = () => {
    if (!engineRef.current) engineRef.current = new Chiptune();
    return engineRef.current;
  };

  useEffect(() => {
    return () => {
      engineRef.current?.destroy();
      engineRef.current = null;
    };
  }, []);

  useEffect(() => {
    const e = engine();
    e.onProgress = setElapsed;
    e.onEnd = () => {
      const next = (index + 1) % tracks.length;
      setIndex(next);
      e.play(tracks[next]);
    };
  }, [index]);

  const select = (next: number, autoplay = playing) => {
    const wrapped = (next + tracks.length) % tracks.length;
    setIndex(wrapped);
    if (autoplay) {
      engine().play(tracks[wrapped]);
      setPlaying(true);
    } else {
      engine().load(tracks[wrapped]);
    }
  };

  const toggle = () => {
    if (playing) {
      engine().pause();
    } else {
      engine().play(track);
    }
    setPlaying(!playing);
  };

  return (
    <section className={styles.player} aria-label='Profile song'>
      <div className={styles.row}>
        <button className={styles.button} type='button' aria-label='Previous track' onClick={() => select(index - 1)}>
          <svg viewBox='0 0 12 12' aria-hidden='true'><path d='M2 1h2v10H2zM11 1v10L4 6z' /></svg>
        </button>
        <button className={styles.button} type='button' aria-label={playing ? 'Pause' : 'Play'} onClick={toggle}>
          <svg viewBox='0 0 12 12' aria-hidden='true'>
            {playing ? <path d='M2 1h3v10H2zM7 1h3v10H7z' /> : <path d='M2 1l9 5-9 5z' />}
          </svg>
        </button>
        <button className={styles.button} type='button' aria-label='Next track' onClick={() => select(index + 1)}>
          <svg viewBox='0 0 12 12' aria-hidden='true'><path d='M8 1h2v10H8zM1 1v10l7-5z' /></svg>
        </button>
        <div className={styles.meta}>
          <div className={styles.title}>{track.title}</div>
          <div className={styles.artist}>{track.artist}</div>
        </div>
        <div className={playing ? `${styles.eq} ${styles.eqOn}` : styles.eq} aria-hidden='true'>
          <b /><b /><b /><b /><b />
        </div>
      </div>
      <div className={styles.bar}>
        <span style={{ width: `${Math.min(100, (elapsed / total) * 100)}%` }} />
      </div>
      <div className={styles.times}>
        <span>{formatTime(elapsed)}</span>
        <span>{formatTime(total)}</span>
      </div>
      <ol className={styles.tracks}>
        {tracks.map((t, i) => (
          <li key={t.title}>
            <button type='button' aria-current={i === index} onClick={() => select(i, true)}>
              {i + 1}. {t.title}
              <em>{formatTime(songSeconds(t))}</em>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default MusicPlayer;
