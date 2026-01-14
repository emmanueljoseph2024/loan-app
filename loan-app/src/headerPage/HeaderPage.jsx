import styles from "./headerStyles/header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {/* header */}
      <header className={styles.head}>
        <nav>
          <ul>
            {/* links */}
            <li className={styles.appLogo}>
              <h2>
                Lend<span>Ease</span>
              </h2>
            </li>
            <li>
              <Link to="/" className={styles.navlinks}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className={styles.navlinks}>
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className={styles.navlinks}
                style={{ background: "#35cca7" }}
              >
                Sign up
              </Link>
            </li>

            {/* hambuger menu */}
            <li
              className={styles.hamburger}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <div></div>
              <div></div>
              <div></div>
            </li>
          </ul>

          <ul
            className={isMenuOpen ? styles.mobileMenu : styles.hidemobileMenu}
          >
            {/* mobile links */}
            <li>
              <Link to="/" className={styles.mobileLinks}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className={styles.mobileLinks}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className={styles.mobileLinks}>
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderPage;
