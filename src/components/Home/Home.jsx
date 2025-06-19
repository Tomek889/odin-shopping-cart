import { Link } from "react-router-dom";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.home}>
        <h1>Welcome to Shopping Cart!</h1>
        <p>
          Discover a wide range of quality products at unbeatable prices. From
          everyday essentials to unique finds, we've got something for everyone.
          Browse our items, add your favorites to the cart, and enjoy a smooth,
          simple shopping experience.
        </p>
        <Link to="/items">
          <button>Go Shopping! 🛒</button>
        </Link>
      </div>
    </div>
  );
}
