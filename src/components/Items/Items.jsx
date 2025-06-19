import { useOutletContext } from "react-router-dom";
import styles from "./items.module.css";

export default function Items() {
  const { cart, setCart } = useOutletContext();

  function handleIncrement(item) {}

  function handleDecrement(item) {}

  return (
    <div className={styles.itemsWrapper}>
      {cart.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.image}>
            <img src={item.image} alt={item.title} />
          </div>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <div className={styles.numberInput}>
            <input type="number" min={0} defaultValue={0} readOnly/>
            <button onClick={() => handleIncrement(item)}>+</button>
            <button onClick={() => handleDecrement(item)}>-</button>
          </div>
          <button className={styles.add}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
