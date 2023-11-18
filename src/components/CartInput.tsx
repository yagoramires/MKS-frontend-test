import React, { useState } from "react";

import styles from "../styles/cart.module.scss";

type Props = { value: number };

export default function CartInput({ value }: Props) {
  const [count, setCount] = useState(value);

  return (
    <div className={styles.cartInput}>
      <label>Qtd:</label>
      <div>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
}
