import illustrationIntro from '../assets/illustration-intro.png';
import styles from '../styles/IntroSection.module.css';
const {
  sectionContainer,
  mainImg,
  mainPresentation,
  mainDescription,
  linkButton
} = styles;

const IntroSection = () => {
  return (
    <section className={sectionContainer}>
      <img src={illustrationIntro} alt="PromotionalImage" className={mainImg} />
      <h1 className={mainPresentation}>
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className={mainDescription}>
        Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
      </p>
      <a href="#" className={linkButton}>
        Get Started
      </a>
    </section>
  )
}

export default IntroSection