import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import styles from "./items.module.css";

export default function Items() {
  const { cart, setCart } = useOutletContext();
  const [quantities, setQuantities] = useState({});

  function handleIncrement(id) {
    setQuantities((q) => ({
      ...q,
      [id]: (q[id] || 0) + 1,
    }));
  }

  function handleDecrement(id) {
    setQuantities((q) => ({
      ...q,
      [id]: Math.max((q[id] || 0) - 1, 0),
    }));
  }

  function handleAddToCart(id) {
    const qty = quantities[id] || 0;
    if (qty === 0) {
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, number: item.number + qty } : item
      )
    );

    setQuantities((q) => ({ ...q, [id]: 0 }));
  }

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
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <input
              type="number"
              min={0}
              value={quantities[item.id] || 0}
              readOnly
            />
            <button onClick={() => handleIncrement(item.id)}>+</button>
          </div>
          <button
            className={styles.add}
            onClick={() => handleAddToCart(item.id)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
