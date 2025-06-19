import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { useState } from "react";

export default function Navbar({ number }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.mobile}>
          <Link to="/" className={styles.logoMobile} onClick={handleClose}>
            Shopping Cart
          </Link>
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        <ul className={`${styles.navBar} ${menuOpen ? styles.open : ""}`}>
          <li className={styles.logo}>
            <Link to="/">Shopping Cart</Link>
          </li>
          <li>
            <Link to="/" onClick={handleClose}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/items" onClick={handleClose}>
              Items
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={handleClose}>
              Cart ({number})
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
