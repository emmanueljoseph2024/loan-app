import styles from "./welcomepageStyles/welcomepage.module.css";
import HeaderPage from "../headerPage/HeaderPage.jsx";
import Footer from "../footerPage/Footer.jsx";
//images
import introImg from "../assets/new.jpg";
import bgImg from "../assets/graphImg.png";

//import subsections
import subsections from "../section.jsx";

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <HeaderPage />

      {/* main */}
      <main className={styles.mainContent}>
        {/* intro container */}
        <div className={styles.introImgContainer}>
          <img src={introImg} alt="img" loading="lazy" />
          <h1>LendEase</h1>
          <p>Get loans with ease.</p>
        </div>

        {/* About section */}
        <div className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h1>Bringing Ease to Loan Making</h1>
            <p>
              LendEase is a smart, fully digital lending platform designed to
              make borrowing simple, transparent, and fast. From instant
              identity verification to automated loan approvals, users can
              apply, track, and repay loans entirely online — no paperwork, no
              long waits, just clear and fair access to credit.
            </p>
          </div>
          <div className={styles.aboutImgContainer}>
            {" "}
            <img src={bgImg} alt="img" loading="lazy" />
          </div>
        </div>

        {/* subsections */}
        {subsections.map((subsection, subIndex) => (
          <div key={subIndex} className={styles.subsection}>
            {/* subsection header */}
            <h1 className={styles.subsectionHeader}>{subsection.header}</h1>
            {/* subsection container */}
            <div className={styles.cardsContainer}>
              {subsection.cards.map((card, cardIndex) => (
                <div key={cardIndex} className={styles.card}>
                  <h1 className={styles.cardSubtitle}>{card.subtitle}</h1>
                  <p className={styles.cardContent}>{card.content}</p>
                  <div>{card.icon}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default WelcomePage;
