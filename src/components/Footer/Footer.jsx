import styles from "./footer.module.css";

export default function Footer() {
  const today = new Date();
  let year = today.getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; Shopping Cart {year}. All rights reserved.</p>
    </footer>
  );
}
