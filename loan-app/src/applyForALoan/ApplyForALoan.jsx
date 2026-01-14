import HeaderPage from "../headerPage/HeaderPage.jsx";
import Footer from "../footerPage/Footer.jsx";
import styles from './applyForALoanStyles/applyforaloan.module.css'
import applyForLoan from "../ApplyForALoanContent.jsx";

const ApplyForALoan = () => {
  return (
    <div>
     <HeaderPage />
        {
        applyForLoan.map((apply, index)=>(
            <div key={index} className={styles.applyContainer}>
                <h1 className={styles.applyHeader}>{apply.header}</h1>
                <p className={styles.applyContent}>{apply.content}</p>
            </div>
        ))
      }
     <Footer /> 
    </div>
  )
}

export default ApplyForALoan
