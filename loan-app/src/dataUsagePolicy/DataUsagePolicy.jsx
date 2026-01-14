import styles from './datausagepolicyStyles/datausagepolicy.module.css'
import dataUsagePolicy from '../DataUsagePolicyContent.jsx'
import HeaderPage from "../headerPage/HeaderPage.jsx";
import Footer from "../footerPage/Footer.jsx";

const DataUsagePolicy = () => {
  return (
    <div>
      <HeaderPage />
        {
        dataUsagePolicy.map((dataUsage, index)=>(
            <div key={index} className={styles.dataUsageContainer}>
                <h1 className={styles.dataUsageHeader}>{dataUsage.header}</h1>
                <p className={styles.dataUsageContent}>{dataUsage.content}</p>
            </div>
        ))
      }
      <Footer />
    </div>
  )
}

export default DataUsagePolicy
