import FyloLogo from '../assets/logo.svg';
import styles from '../styles/Header.module.css';
const {
  headerContainer,
  logoImg,
  ulContainer,
  liContent,
  linkContent
} = styles;

const Header = () => {
  return (
    <header className={headerContainer}>
      <img src={FyloLogo} alt="Fylo" className={logoImg} />
      <ul className={ulContainer}>
        <li className={liContent}>
          <a href="#" className={linkContent}>Features</a>
        </li>
        <li className={liContent}>
          <a href="#" className={linkContent}>Team</a>
        </li>
        <li className={liContent}>
          <a href="#" className={linkContent}>Sign in</a>
        </li>
      </ul>
    </header>
  )
}

export default Header