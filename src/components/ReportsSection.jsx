import styles from '../styles/ReportsSection.module.css';
import ReportsCard from './ReportsCard';
import ProfiPic01 from '../assets/profile-1.jpg';
import ProfiPic02 from '../assets/profile-2.jpg';
import ProfiPic03 from '../assets/profile-3.jpg';
import Quotes from '../assets/bg-quotes.png';

const ReportsSection = () => {
  return (
    <section className={styles.reportsSection}>
      <img src={Quotes} alt="Quotes" className={styles.reportsQuotes}/>
      <ReportsCard 
        description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        icon={ProfiPic01}
        name="Satish Patel"
        profession="Founder & CEO, Huddle"
      />
      <ReportsCard 
        description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        icon={ProfiPic02}
        name="Bruce McKenzie"
        profession="Founder & CEO, Huddle"
      />
      <ReportsCard 
        description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        icon={ProfiPic03}
        name="Iva Boyd"
        profession="Founder & CEO, Huddle"
      />
    </section>
  )
}

export default ReportsSection