import styles from '../styles/GetEarlyAccess.module.css';

const GetEarlyAccess = () => {
  return (
    <section className={styles.earlyAccessSection}>
      <h2 className={styles.earlyAccessTitle}>
        Get early access today
      </h2>
      <p className={styles.earlyAccessDescription}>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
      </p>
      <form className={styles.earlyAccessForm}>
        <input className={styles.earlyAccessInput} type="text" placeholder='email@example.com'/>
        <button className={styles.earlyAccessButton}>
          Get Started For Free
        </button>
      </form>
    </section>
  )
}

export default GetEarlyAccess