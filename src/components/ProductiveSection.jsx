import styles from '../styles/ProductiveSection.module.css';
import ProductiveImg from '../assets/illustration-stay-productive.png';
import ArrowSVG from '../assets/icon-arrow.svg';

const ProductiveSection = () => {
  return (
    <section className={styles.productiveSection}>
      <div className={styles.divImg}>
        <img src={ProductiveImg} alt="StayProductive" className={styles.productiveImg} />
      </div>
      <div className={styles.divText}>
        <h2 className={styles.productiveTitle}>
          Stay productive, wherever you are
        </h2>
        <p className={styles.productiveDescription}>
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
        </p>
        <p className={styles.productiveDescription}>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
        </p>
        <a href="localhost://3000" className={styles.productiveLink}>
          See how Fylo works <img src={ArrowSVG} alt="ArrowSVG" className={styles.productiveArrowSVG}/>
        </a>
      </div>
    </section>
  )
}

export default ProductiveSection