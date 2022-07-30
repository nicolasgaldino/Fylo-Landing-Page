import ReportsCard from './ReportsCard';
import GetEarlyAccess from './GetEarlyAccess';
import ProfiPic01 from '../assets/profile-1.jpg';
import ProfiPic02 from '../assets/profile-2.jpg';
import ProfiPic03 from '../assets/profile-3.jpg';
import Quotes from '../assets/bg-quotes.png';
import styles from '../styles/ReportsSection.module.css';
const { 
  reportsSection, 
  reportsQuotes 
} = styles;

const ReportsSection = () => {
  return (
    <section className={reportsSection}>
      <img src={Quotes} alt="Quotes" className={reportsQuotes}/>
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
      <GetEarlyAccess />
    </section>
  )
}

export default ReportsSection