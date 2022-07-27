import styles from '../styles/ReportsCard.module.css';

const ReportsCard = ({ description, icon, name, profession }) => {
  return (
    <div className={styles.resportsCard}>
      <div className={styles.reportDiv}>
        <h2 className={styles.reportDescription}>
          {description}
        </h2>
      </div>
      <div className={styles.identificationDiv}>
        <img src={icon} alt={name} className={styles.resportUserPic} />
        <div className={styles.textDiv}>
          <h3 className={styles.userReportName}>
            {name}
          </h3>
          <p className={styles.userReportProfession}>
            {profession}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReportsCard