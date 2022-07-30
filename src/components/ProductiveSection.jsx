import ProductiveImg from '../assets/illustration-stay-productive.png';
import ArrowSVG from '../assets/icon-arrow.svg';
import styles from '../styles/ProductiveSection.module.css';
const {
  productiveSection,
  divImg,
  productiveImg,
  divText,
  productiveTitle,
  productiveDescription,
  productiveLink,
  productiveArrowSVG
} = styles;

const ProductiveSection = () => {
  return (
    <section className={productiveSection}>
      <div className={divImg}>
        <img src={ProductiveImg} alt="StayProductive" className={productiveImg} />
      </div>
      <div className={divText}>
        <h2 className={productiveTitle}>
          Stay productive, wherever you are
        </h2>
        <p className={productiveDescription}>
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
        </p>
        <p className={productiveDescription}>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
        </p>
        <a href="localhost://3000" className={productiveLink}>
          See how Fylo works <img src={ArrowSVG} alt="ArrowSVG" className={productiveArrowSVG} />
        </a>
      </div>
    </section>
  )
}

export default ProductiveSection