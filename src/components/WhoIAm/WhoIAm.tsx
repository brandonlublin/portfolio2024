import styles from './WhoIAm.module.css';
const WhoIAm = () => {
  return (
    <div className={styles.whoIAm}>
      <h3 className={styles.detailsHeader}>Details</h3>
      <div className={styles.details}>
        <p>I am a highly collaborative Frontend Software Engineer with 4 years of experience at a rapidly growing SaaS startup. My mission is to craft engaging and efficient B2B web applications that delight users and support business growth.</p>
        <p>Leveraging my full stack (MERN) certification and my bias for action, I bring a comprehensive understanding of full stack web development and data integration, with a particular focus on identity and access management.</p>
        <p>My prior experience as an EDI Systems Analyst has refined my problem-solving skills and attention to detail, enabling me to translate complex user needs into seamless digital solutions. I am driven by a passion for learning, collaboration, and delivering exceptional outcomes for both my team and our customers.</p>
        <p>I am actively seeking a full-time remote role with an established engineering team that fosters collaboration and useability. I aim to leverage my expertise to become a subject matter expert, particularly in building secure, user-centric applications that streamline processes and enhance user trust and engagement.</p>
      </div>
    </div>
  );
};

export default WhoIAm;