import styles from '../styles/AdvantagesSection.module.css';
import AdvantagesCard from './AdvantagesCard';
import AccessAnywhere from '../assets/icon-access-anywhere.svg';
import SecurityLogo from '../assets/icon-security.svg';
import Collaboration from '../assets/icon-collaboration.svg';
import AnyFile from '../assets/icon-any-file.svg';

const AdvantagesSection = () => {
  return (
    <section className={styles.mainAdvantagesContainer}>
      <div className={styles.frstContainer}>
        <AdvantagesCard
          icon={AccessAnywhere}
          alt="Access your files, anywhere"
          title="Access your files, anywhere"
          description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        />
        <AdvantagesCard
          icon={Collaboration}
          alt="Real-time collaboration"
          title="Real-time collaboration"
          description="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        />
      </div>
      <div className={styles.scndContainer}>
        <AdvantagesCard
          icon={SecurityLogo}
          alt="Security you can trust"
          title="Security you can trust"
          description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        />
        <AdvantagesCard
          icon={AnyFile}
          alt="Store any type of file"
          title="Store any type of file"
          description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        />
      </div>
    </section>
  )
}

export default AdvantagesSection