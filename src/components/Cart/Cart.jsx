import { useOutletContext } from "react-router-dom";
import styles from "./cart.module.css";

export default function Items() {
  const { cart, setCart } = useOutletContext();

  function handleIncrement(id) {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, number: item.number + 1 } : item
    );
    setCart(newCart);
  }

  function handleDecrement(id) {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, number: item.number - 1 } : item
    );
    setCart(newCart);
  }

  function getTotalPrice() {
    let total = 0;
    cart.forEach((item) => {
      total += item.number * item.price;
    });
    return total;
  }

  return cart.some((item) => item.number > 0) ? (
    <div className={styles.cartWrapper}>
      <div className={styles.itemsWrapper}>
        {cart
          .filter((item) => item.number > 0)
          .map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.image}>
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <div className={styles.numberInput}>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <input type="number" min={0} value={item.number} readOnly />
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
            </div>
          ))}
      </div>
      <div className={styles.checkout}>
        <h2>Checkout</h2>
        <p>Total: ${getTotalPrice()}</p>
        <button>Buy the items</button>
      </div>
    </div>
  ) : (
    <div className={styles.emptyInfo}>
        <h2>No items in cart.</h2>
        <button>Go shopping! 🛒</button>
    </div>
  );
}
