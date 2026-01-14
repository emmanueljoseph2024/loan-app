import styles from "./footerStyles/footer.module.css";
import { Link } from "react-router-dom";
//icons
import { GoShieldLock } from "react-icons/go";
import { GrShieldSecurity } from "react-icons/gr";
import { FaRegIdCard } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
//image
import appImg from "../assets/Lend.jpeg";

const Footer = () => {
  //Footer
  //Product links
  const productLinks = [
    { link: "/howitworks", content: "How it works" },
    { link: "/loaneligibility", content: "Loan eligibility" },
    { link: "/applyforloan", content: "Apply for a loan" },
    { link: "/repaymentprocess", content: "Repayment process" },
    { link: "/faqs", content: "FAQs" },
  ];

  //security
  const security = [
    { content: "Secure KYC Verification", icon: <FaRegIdCard /> },
    { content: "Data Encryption & Privacy", icon: <GoShieldLock /> },
    { content: "Regulatory Compliance", icon: <GrCompliance /> },
    { content: "Fraud Prevention", icon: <GrShieldSecurity /> },
  ];

  //document
  const document = [
    { link: "/terms", content: "Terms & Conditions" },
    { link: "/privacypolicy", content: "Privacy Policy" },
    { link: "/loanagreement", content: "Loan Agreement Overview" },
    { link: "/datausagepolicy", content: "Data Usage Policy" },
  ];

  //contact
  const contact = [
    { title: "Email", content: "emmanuelay897@gmail.com" },
    { title: "Phone no", content: "07043331293" },
  ];

  //Technology
  const technology = [
    "Powered by Secure APIs",
    "AI-Assisted Loan Evaluation",
    "Digital Loan Records",
  ];

  //social media
  const socialmedia = [
    { link: "https://www.linkedin.com/in/joseph-emmanuel-79741433b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", platform: "LinkedIn" },
    { link: "https://github.com/emmanueljoseph2024", platform: "Github" },
    { link: "https://x.com/TechxyDev247?t=VZ3VU6RBNTqiVPH8tI5FAw&s=09", platform: "Twitter" },
    { link: "https://www.facebook.com/profile.php?id=61585164775045", platform: "Facebook" },
  ];

  return (
    <div>
      {/* footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          {/* footer content */}
          <div className={styles.footerContent}>
            <div className={styles.imgContainer}>
              <img src={appImg} alt="img" loading="lazy" />
            </div>
            <h2 className={styles.appName}>LendEase</h2>
            <p className={styles.aboutApp}>
              The digital app that brings ease to loan making.
            </p>
            <p className={styles.aboutApp}>
              Secure, transparent, and data-driven lending for modern borrowers.
            </p>
          </div>

          {/* footer content - product link */}
          <div className={styles.footerContent}>
            <h1 className={styles.ourplatform}>Our Platform</h1>
            <ul className={styles.productLink}>
              {productLinks.map((product) => (
                <li>
                  <Link to={product.link} className={styles.pLink}>
                    {product.content}
                  </Link>{" "}
                </li>
              ))}
            </ul>
          </div>

          {/* footer content - security*/}
          <div className={styles.footerContent}>
            <div>
              <h1 className={styles.securityHeader}>Security & Compliance</h1>
              {security.map((item, index) => (
                <>
                  <ul key={index} className={styles.securityList}>
                    <li className={styles.securityContent}>{item.content}</li>
                  </ul>
                  <div className={styles.itemIcon}>{item.icon}</div>
                </>
              ))}
            </div>
          </div>

          {/* footer content - law and document*/}
          <div className={styles.footerContent}>
            <h1 className={styles.legalHeader}>Legal & Documentation</h1>
            <ul className={styles.documentList}>
              {document.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className={styles.document}>
                    {item.content}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* footer content - law and document*/}
          <div className={styles.footerContent}>
            <h1 className={styles.contactHeader}>Support & Contact</h1>
            <ul className={styles.contactList}>
              {contact.map((item, index) => (
                <li className={styles.contact} key={index}>
                  <h2>
                    {item.title}:<span>{item.content}</span>
                  </h2>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div className={styles.footerContent}>
            <h1 className={styles.technologyHeader}>
              Technology & Transparency
            </h1>
            <ul className={styles.technologyList}>
              {technology.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div className={styles.footerContent}>
            <h1 className={styles.socialmediaHeader}>Social media</h1>
            <ul className={styles.socialmediaList}>
              {socialmedia.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className={styles.socialmediaLink}>
                    {item.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright & Disclaimer */}
          <div className={styles.footerContent}>
            <h1 className={styles.copyrightHeader}>Copyright & Disclaimer</h1>
            <p className={styles.copyright}>
              © 2026 LoanFlow. All rights reserved.
            </p>
            <p className={styles.copyright}>
              Loan approvals are subject to eligibility and verification.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
