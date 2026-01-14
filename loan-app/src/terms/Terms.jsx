import HeaderPage from "../headerPage/HeaderPage.jsx";
import Footer from "../footerPage/Footer.jsx";
import terms from '../Conditions.jsx';
import styles from './termStyles/term.module.css'
const Terms = () => {
  return (
    <div>
      <HeaderPage />
      {
        terms.map((term, index)=>(
              <div key={index} className={styles.termsContainer}>
                <h1 className={styles.termsHeader }>{term.header}</h1>
                <p className={styles.termsContent}>{term.content}</p>
              </div>
        ))
      }
      <Footer />
    </div>
  )
}

export default Terms
