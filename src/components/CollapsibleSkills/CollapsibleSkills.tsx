import styles from './CollapsibleSkills.module.css';
import { useState } from 'react';

type Skill = {
  id: number;
  name: string;
  description: string;
};

type CollapsibleSkillsProps = {
  skills: Skill[];
};

const CollapsibleSkills = ({ skills }: CollapsibleSkillsProps) => {
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
            <span className={styles.label}>{skill.name}</span>
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
