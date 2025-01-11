import styles from './CollapsibleSkills.module.css';
import { useState } from 'react';

const CollapsibleSkills = ({ skills }) => {
  const [openSkillId, setOpenSkillId] = useState<number | null>(null);

  const toggleSkill = (id: number) => {
    setOpenSkillId(openSkillId === id ? null : id);
  };

  return (
    <div className={styles.skillsContainer}>
      {skills.map((skill) => (
        <div key={skill.id} className={styles.skill}>
          <div
            className={styles.skillHeader}
            onClick={() => toggleSkill(skill.id)}
          >
            <span>{skill.name}</span>
            <span className={styles.icon}>
              {openSkillId === skill.id ? "▲" : "▼"}
            </span>
          </div>
          <div
            className={`${styles.skillContent} ${
              openSkillId === skill.id ? styles.open : ""
            }`}
          >
            <div>{skill.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollapsibleSkills;