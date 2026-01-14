import HeaderPage from "../headerPage/HeaderPage.jsx";
import Footer from "../footerPage/Footer.jsx";
import styles from './repaymentProcessStyles/repaymentprocess.module.css'
import repaymentProcess from "../RepaymentProcessContent.jsx";

const RepaymentProcess = () => {
  return (
    <div>
       <HeaderPage />
        {
        repaymentProcess.map((repayment, index)=>(
            <div key={index} className={styles.repaymentContainer}>
                <h1 className={styles.repaymentHeader}>{repayment.header}</h1>
                <p className={styles.repaymentContent}>{repayment.content}</p>
            </div>
        ))
      }
      <Footer />
    </div>
  )
}

export default RepaymentProcess
