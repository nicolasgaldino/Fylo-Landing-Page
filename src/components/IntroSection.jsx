import styles from '../styles/IntroSection.module.css';
import illustrationIntro from '../assets/illustration-intro.png';
import Button from './Button';

const IntroSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <img src={illustrationIntro} alt="PromotionalImage" className={styles.mainImg} />
      <h1 className={styles.mainPresentation}>
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className={styles.mainDescription}>
        Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
      </p>
      <Button
        link="#"
        text="Get Started"
      />
    </section>
  )
}

export default IntroSection