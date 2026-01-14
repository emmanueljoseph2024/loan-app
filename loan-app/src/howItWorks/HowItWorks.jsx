import HeaderPage from "../headerPage/HeaderPage.jsx";
import Footer from "../footerPage/Footer.jsx";
import styles from './howitworksStyle/howitworks.module.css'
import howItWorks from "../HowItWorksContent.jsx";
const HowItWorks = () => {
  return (
    <div>
      <HeaderPage />
            {
  howItWorks.map((how, index) => (
    <div key={index} className={styles.howContainer}>
      <h1 className={styles.howHeader}>{how.header}</h1>
      <p className={styles.howContent}>{how.content}</p>
    </div>
  ))
}
      <Footer/>
    </div>
  )
}

export default HowItWorks
