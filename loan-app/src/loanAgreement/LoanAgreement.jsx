import styles from './loanagreementStyles/loanagreement.module.css'
import HeaderPage from "../headerPage/HeaderPage.jsx";
import Footer from "../footerPage/Footer.jsx";
import loanAgreement from '../LoanAgreementContent.jsx';

const LoanAgreement = () => {
  return (
    <div>
      <HeaderPage />
      {
  loanAgreement.map((agreement, index) => (
    <div key={index} className={styles.agreementContainer}>
      <h1 className={styles.agreementHeader}>{agreement.header}</h1>
      <p className={styles.agreementContent}>{agreement.content}</p>
    </div>
  ))
}
      <Footer />
    </div>
  )
}

export default LoanAgreement
