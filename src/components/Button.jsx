import styles from '../styles/Button.module.css';

const Button = ({ link, text }) => {
  return (
    <a href={link} className={styles.buttonComponent}>
      {text}
    </a>
  )
}

export default Button