import styles from '../styles/AdvantagesCard.module.css';
const {
  advantagensContainer,
  advantageIcon,
  advantageTitle,
  advantageDescription
} = styles;

const AdvantagesCard = ({ icon, alt, title, description }) => {
  return (
    <div className={advantagensContainer}>
      <img src={icon} alt={alt} className={advantageIcon} />
      <h2 className={advantageTitle}>
        {title}
      </h2>
      <p className={advantageDescription}>
        {description}
      </p>
    </div>
  )
}

export default AdvantagesCard