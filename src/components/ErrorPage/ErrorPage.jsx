import { Link } from "react-router-dom";
import styles from "./errorpage.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.error}>
        <h1>Page not found</h1>
        <p>Sorry, we couldn't find the page you're looking for.</p>
        <Link to="/">
          <button>Go back home</button>
        </Link>
      </div>
    </div>
  );
}
