import { skins } from '../../skins/skins';
import { useSkin } from '../../skins/useSkin';
import styles from './SkinPicker.module.css';

const SkinPicker = () => {
  const [skin, setSkin] = useSkin();

  return (
    <div className={styles.picker} role='group' aria-label='Profile skin'>
      <span className={styles.label}>Profile skin:</span>
      {skins.map((s) => (
        <button
          key={s.id}
          type='button'
          className={styles.option}
          aria-pressed={skin === s.id}
          onClick={() => setSkin(s.id)}
        >
          <span
            className={styles.swatch}
            style={{ background: `linear-gradient(135deg, ${s.swatch[0]} 50%, ${s.swatch[1]} 50%)` }}
          />
          {s.label}
        </button>
      ))}
    </div>
  );
};

export default SkinPicker;
