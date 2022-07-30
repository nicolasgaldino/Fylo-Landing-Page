import styles from '../styles/GetEarlyAccess.module.css';
const {
  earlyAccessSection,
  earlyAccessTitle,
  earlyAccessDescription,
  earlyAccessForm,
  earlyAccessInput,
  earlyAccessButton
} = styles;

const GetEarlyAccess = () => {
  return (
    <section className={earlyAccessSection}>
      <h2 className={earlyAccessTitle}>
        Get early access today
      </h2>
      <p className={earlyAccessDescription}>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
      </p>
      <form className={earlyAccessForm}>
        <input className={earlyAccessInput} type="text" placeholder='email@example.com' />
        <button className={earlyAccessButton}>
          Get Started For Free
        </button>
      </form>
    </section>
  )
}

export default GetEarlyAccess