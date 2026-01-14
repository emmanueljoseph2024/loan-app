import styles from "./welcomePage/welcomepageStyles/welcomepage.module.css";
//icons
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { AiOutlinePercentage } from "react-icons/ai";
import { GiBrokenShield } from "react-icons/gi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { FaGears } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { CiCloudOn } from "react-icons/ci";
import { FaCodepen } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoDocumentOutline } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { CiBank } from "react-icons/ci";
import { RiAdminFill } from "react-icons/ri";

const subsections = [
  {
    header: "Fast & Digital Lending",
    cards: [
      {
        subtitle: "Quick Loan Application",
        content:
          "Submit loan requests entirely online without any paperwork or long forms. Our platform guides you step-by-step through the application process, making it simple for first-time borrowers and experienced users alike. You can complete applications in minutes, and the system ensures all necessary information is captured accurately.",
        icon: <HiOutlineClipboardDocumentCheck className={styles.icon} />,
      },
      {
        subtitle: "Rapid Decision Making",
        content:
          "Loan applications are reviewed and processed using automated systems that evaluate eligibility and risk. This drastically reduces waiting times compared to traditional lenders. Users receive clear decisions faster, giving them confidence in the transparency and efficiency of the platform.",
        icon: <AiOutlineThunderbolt className={styles.icon} />,
      },
      {
        subtitle: "Instant Loan Visibility",
        content:
          "From submission to approval and disbursement, users can track the status of their loan in real time. Notifications and dashboards provide a clear view of every step, including pending approvals, upcoming repayments, and completed disbursements, giving users complete control over their loan journey.",
        icon: <FaEye className={styles.icon} />,
      },
      {
        subtitle: "Fully Digital Experience",
        content:
          "Every stage of the loan lifecycle is handled digitally, from identity verification to repayment tracking. Users no longer need to visit branches or submit physical documents, making the process faster, safer, and more convenient. This also allows the platform to scale efficiently to serve thousands of users simultaneously.",
        icon: <CiMobile3 className={styles.icon} />,
      },
    ],
  },
  {
    header: "Transparent Loan Terms",
    cards: [
      {
        subtitle: "Clear Interest Rates",
        content:
          "All loan terms, including interest rates, are presented in a straightforward and easy-to-understand manner. Users can see the exact amount they will repay over the life of the loan, ensuring there are no surprises and that decisions are informed and confident.",
        icon: <AiOutlinePercentage className={styles.icon} />,
      },
      {
        subtitle: "No Hidden Fees",
        content:
          "The platform ensures all fees, penalties, and charges are disclosed upfront. Borrowers can view every component of the loan cost before accepting, making the process fully transparent and fostering trust between lenders and borrowers.",
        icon: <GiBrokenShield className={styles.icon} />,
      },
      {
        subtitle: "Simple Repayment Schedules",
        content:
          "Repayment schedules are presented in a clear, visual format that shows due dates, installment amounts, and total repayment obligations. Users can easily plan their finances and understand exactly what is expected at each stage of the loan.",
        icon: <RiCalendarScheduleLine className={styles.icon} />,
      },
      {
        subtitle: "Fair Loan Conditions",
        content:
          "Loan agreements are presented in plain language, reducing the risk of misunderstanding or disputes. Users can easily understand their rights, responsibilities, and obligations, ensuring the platform is accessible and fair for all types of borrowers.",
        icon: <FaHandshake className={styles.icon} />,
      },
    ],
  },
  {
    header: "Data-Driven Loan Assessment",
    cards: [
      {
        subtitle: "Structured Borrower Data",
        content:
          "All borrower information is collected in a structured format to ensure consistency and accuracy. The system captures employment details, income, credit history, and other relevant financial information, forming the basis for reliable loan assessments.",
        icon: <BsFileEarmarkSpreadsheet className={styles.icon} />,
      },
      {
        subtitle: "Automated Risk Checks",
        content:
          "The platform uses pre-defined rules and basic credit scoring algorithms to evaluate borrower risk. This ensures that loans are approved responsibly, reduces the chance of default, and gives lenders a clear view of borrower eligibility in real time.",
        icon: <IoShieldCheckmarkOutline className={styles.icon} />,
      },
      {
        subtitle: "Reduced Manual Reviews",
        content:
          "By automating key parts of the application review, staff intervention is minimized. This not only speeds up processing but also reduces human errors, ensures consistency, and frees teams to focus on higher-value tasks like customer support or complex loan evaluations.",
        icon: <RiRobot2Line className={styles.icon} />,
      },
      {
        subtitle: "Scalable Decision Engine",
        content:
          "The system is designed to handle large volumes of applications simultaneously. As user numbers grow, the platform maintains fast processing speeds and consistent assessments, making it suitable for large-scale deployments and enterprise-level usage.",
        icon: <VscServerProcess className={styles.icon} />,
      },
    ],
  },
  {
    header: "Efficient Loan Management",
    cards: [
      {
        subtitle: "Centralized Loan Dashboard",
        content:
          "All loans are displayed in a centralized dashboard, providing borrowers and lenders with an organized view of active, pending, and completed loans. The dashboard makes it easy to monitor repayment progress, track approvals, and access loan history with a few clicks.",
        icon: <MdOutlineDashboard className={styles.icon} />,
      },
      {
        subtitle: "Repayment Tracking",
        content:
          "Users can view all upcoming and completed repayments in one place. Notifications highlight due dates, missed payments, and penalties, helping borrowers stay on track while giving lenders clear insights into repayment behavior.",
        icon: <MdOutlinePayment className={styles.icon} />,
      },
      {
        subtitle: "Automated Notifications",
        content:
          "The system sends timely alerts and reminders for loan approvals, upcoming payments, or missed deadlines. This reduces defaults, improves borrower engagement, and ensures smooth communication between all parties.",
        icon: <CiBellOn className={styles.icon} />,
      },
      {
        subtitle: "Reduced Operational Costs",
        content:
          "By automating processes such as application review, loan tracking, and notifications, lenders save time and reduce operational expenses. This efficiency gain allows the platform to provide loans more cost-effectively, benefiting both lenders and borrowers.",
        icon: <FaGears className={styles.icon} />,
      },
    ],
  },
  {
    header: "Built for Scale & Growth",
    cards: [
      {
        subtitle: "Multi-User Support",
        content:
          "The platform is designed for multiple types of users, including individual borrowers, small businesses, lenders, and administrators. Each role has access to tailored dashboards and functionality, making the system flexible for a wide range of users.",
        icon: <IoIosPeople className={styles.icon} />,
      },
      {
        subtitle: "Easy System Integration",
        content:
          "APIs enable seamless integration with third-party services such as payment providers, KYC verification tools, and analytics platforms. This allows the system to grow, adapt, and collaborate with other fintech solutions efficiently.",
        icon: <MdOutlineIntegrationInstructions className={styles.icon} />,
      },
      {
        subtitle: "High Volume Readiness",
        content:
          "The platform can handle a growing number of loan applications, disbursements, and repayments without compromising speed or reliability. Its architecture supports scaling to enterprise-level operations and multiple regions.",
        icon: <CiCloudOn className={styles.icon} />,
      },
      {
        subtitle: "Future-Ready Architecture",
        content:
          "The system is built with a modular and extensible design, allowing new features like AI-based credit scoring, advanced analytics, and cross-platform integrations to be added in the future without major rewrites.",
        icon: <FaCodepen className={styles.icon} />,
      },
    ],
  },
  {
    header: "Security, Trust & Compliance",
    cards: [
      {
        subtitle: "Identity Verification",
        content:
          "Borrower identities are verified using secure KYC processes. This prevents fraud, ensures regulatory compliance, and gives lenders confidence in the accuracy of borrower information.",
        icon: <FaRegIdCard className={styles.icon} />,
      },
      {
        subtitle: "Secure Data Handling",
        content:
          "All sensitive borrower and lender data is encrypted and stored securely. The platform follows best practices in data privacy and security to protect user information at every stage of the loan lifecycle.",
        icon: <CiLock className={styles.icon} />,
      },
      {
        subtitle: "Audit-Ready Records",
        content:
          "Every loan-related action is logged, creating a clear, immutable record. This audit trail supports compliance, regulatory reporting, and internal oversight, building trust with users and stakeholders.",
        icon: <IoDocumentOutline className={styles.icon} />,
      },
      {
        subtitle: "Regulatory Awareness",
        content:
          "The platform is designed with regulatory compliance in mind, supporting lending laws, data protection rules, and reporting requirements. This ensures safe, legal, and ethical operation across markets.",
        icon: <GrCompliance className={styles.icon} />,
      },
    ],
  },
  {
    header: "Who It’s For",
    cards: [
      {
        subtitle: "Individual Borrowers",
        content:
          "People seeking fast, convenient, and transparent access to personal loans benefit from a digital-first process without needing to visit branches.",
        icon: <FaRegUser className={styles.icon} />,
      },
      {
        subtitle: "Small Businesses",
        content:
          "Entrepreneurs and small business owners can access loans quickly to grow or stabilize their operations, with simple repayment tracking and transparent terms.",
        icon: <IoIosBusiness className={styles.icon} />,
      },
      {
        subtitle: "Lenders & Fintechs",
        content:
          "Financial institutions and fintech startups can digitize their lending operations, reduce manual workload, and expand their borrower base efficiently.",
        icon: <CiBank className={styles.icon} />,
      },
      {
        subtitle: "Administrators",
        content:
          "Platform administrators can manage approvals, monitor repayments, track risk, and generate reports—all from a centralized interface designed for operational efficiency.",
        icon: <RiAdminFill className={styles.icon} />,
      },
    ],
  },
];

export default subsections;
