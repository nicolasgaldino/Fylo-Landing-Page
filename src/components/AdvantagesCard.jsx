import styles from '../styles/AdvantagesCard.module.css';

const AdvantagesCard = ({ icon, alt, title, description }) => {
  return (
    <div className={styles.advantagensContainer}>
      <img src={icon} alt={alt} className={styles.advantageIcon} />
      <h2 className={styles.advantageTitle}>
        {title}
      </h2>
      <p className={styles.advantageDescription}>
        {description}
      </p>
    </div>
  )
}

export default AdvantagesCard