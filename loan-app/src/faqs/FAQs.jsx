import HeaderPage from "../headerPage/HeaderPage.jsx";
import Footer from "../footerPage/Footer.jsx";
import styles from './faqsStyles/faqs.module.css'
import faqs from "../FAQsContent.jsx";
const FAQs = () => {
  return (
    <div>
          <HeaderPage />
            {
  faqs.map((faq, index) => (
    <div key={index} className={styles.faqContainer}>
      <h1 className={styles.faqHeader}>{faq.header}</h1>
      <p className={styles.faqContent}>{faq.content}</p>
    </div>
  ))
}
      <Footer/>
    </div>
  )
}

export default FAQs
