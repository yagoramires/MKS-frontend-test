import React, { useEffect, useState } from "react";
import { CartSliceState, cartSlice, useDispatch } from "@/lib/redux";

import styles from "../styles/cart.module.scss";

type Props = { product: CartSliceState };

export default function CartInput({ product }: Props) {
  const [count, setCount] = useState(product.quantity);

  const dispatch = useDispatch();

  const handleChangeInput = (value: number) => {
    dispatch(
      cartSlice.actions.manualUpdate({ id: product.id, quantity: value })
    );
    setCount(value);
  };

  useEffect(() => {
    setCount(product.quantity);
  }, [product]);

  return (
    <div className={styles.cartInput}>
      <label>Qtd:</label>
      <div>
        <button
          onClick={() =>
            dispatch(cartSlice.actions.decrementQuantity(product.id))
          }
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => handleChangeInput(Number(e.target.value))}
        />
        <button
          onClick={() =>
            dispatch(cartSlice.actions.incrementQuantity(product.id))
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
