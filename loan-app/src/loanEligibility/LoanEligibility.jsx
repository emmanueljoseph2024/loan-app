import HeaderPage from "../headerPage/HeaderPage.jsx";
import Footer from "../footerPage/Footer.jsx";
import styles from './loanEligibilityStyles/loaneligibility.module.css'
import loanEligibility from "../LoanEligibilityContent.jsx";

const LoanEligibility = () => {
  return (
    <div>
      <HeaderPage />
                 {
  loanEligibility.map((loan, index) => (
    <div key={index} className={styles.loanContainer}>
      <h1 className={styles.loanHeader}>{loan.header}</h1>
      <p className={styles.loanContent}>{loan.content}</p>
    </div>
  ))
}
      <Footer />
    </div>
  )
}

export default LoanEligibility
