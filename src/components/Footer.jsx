import FyloLogo from '../assets/logo.svg';
import LocationSVG from '../assets/icon-location.svg';
import PhoneSVG from '../assets/icon-phone.svg';
import EmailSVG from '../assets/icon-email.svg';
import GithubSVG from '../assets/logo-github.svg';
import LinkedinSVG from '../assets/logo-linkedin.svg';
import TwitterSVG from '../assets/logo-twitter.svg';
import InstaSVG from '../assets/logo-instagram.svg';
import styles from '../styles/Footer.module.css';
const { 
  footerContainer, 
  footerLocationParagraph, 
  footerLogoDiv, 
  foorterLocationDiv,
  contactDiv,
  contectDescription,
  otherInfosContainer,
  socialNetworks,
  socialLinks,
  socialIcon
} = styles;

const Footer = () => {
  return (
    <footer className={footerContainer}>
      <div className={footerLogoDiv}>
        <img src={FyloLogo} alt="FyloLogo" />
        <div className={foorterLocationDiv}>
          <img src={LocationSVG} alt="LocationSVG" />
          <p className={footerLocationParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div className={contactDiv}>
        <p className={contectDescription}>
          <img src={PhoneSVG} alt="PhoneSVG" />
          +99 (99) 99999-9999
        </p>
        <p className={contectDescription}>
          <img src={EmailSVG} alt="EmailSVG" />
          example@fylo.com
        </p>
      </div>
      <div className={otherInfosContainer}>
        <p>About Us</p>
        <p>Jobs</p>
        <p>Press</p>
        <p>Blog</p>
      </div>
      <div className={otherInfosContainer}>
        <p>Contact US</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>
      <div className={socialNetworks}>
        <a href="https://github.com/nicolasgaldino" className={socialLinks}>
          <img src={GithubSVG} alt="GithubSVG" className={socialIcon} />
        </a>
        <a href="https://www.linkedin.com/in/nícolas-galdino-esmael-8370ab199" className={socialLinks}>
          <img src={LinkedinSVG} alt="LinkedinSVG" className={socialIcon} />
        </a>
        <a href="https://twitter.com/galdino_esmael" className={socialLinks}>
          <img src={TwitterSVG} alt="TwitterSVG" className={socialIcon} />
        </a>
        <a href="https://www.instagram.com/galdino_esmael/" className={socialLinks}>
          <img src={InstaSVG} alt="InstaSVG" className={socialIcon} />
        </a>
      </div>
    </footer>
  )
}

export default Footer