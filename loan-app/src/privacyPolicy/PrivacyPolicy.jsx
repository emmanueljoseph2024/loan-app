import HeaderPage from "../headerPage/HeaderPage.jsx";
import Footer from "../footerPage/Footer.jsx";
import privacyPolicy from '../PrivacyContent.jsx'
import styles from './privacyPolicyStyles/privacypolicy.module.css'

const PrivacyPolicy = () => {
  return (
    <div>
      <HeaderPage />
      {
        privacyPolicy.map((policy, index)=>(
            <div key={index} className={styles.policyContainer}>
                <h1 className={styles.policyHeader}>{policy.header}</h1>
                <p className={styles.policyContent}>{policy.content}</p>
            </div>
        ))
      }
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
