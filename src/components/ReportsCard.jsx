import styles from '../styles/ReportsCard.module.css';
const { 
  resportsCard, 
  reportDiv, 
  reportDescription, 
  identificationDiv, 
  resportUserPic, 
  textDiv, 
  userReportName, 
  userReportProfession 
} = styles;

const ReportsCard = ({ description, icon, name, profession }) => {
  return (
    <div className={resportsCard}>
      <div className={reportDiv}>
        <h2 className={reportDescription}>
          {description}
        </h2>
      </div>
      <div className={identificationDiv}>
        <img src={icon} alt={name} className={resportUserPic} />
        <div className={textDiv}>
          <h3 className={userReportName}>
            {name}
          </h3>
          <p className={userReportProfession}>
            {profession}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReportsCard