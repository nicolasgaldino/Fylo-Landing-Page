import styles from '../styles/Header.module.css';
import FyloLogo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img src={FyloLogo} alt="Fylo" className={styles.logoImg} />
      <ul className={styles.ulContainer}>
        <li className={styles.liContent}>
          <a href="#" className={styles.linkContent}>Features</a>
        </li>
        <li className={styles.liContent}>
          <a href="#" className={styles.linkContent}>Team</a>
        </li>
        <li className={styles.liContent}>
          <a href="#" className={styles.linkContent}>Sign in</a>
        </li>
      </ul>
    </header>
  )
}

export default Header