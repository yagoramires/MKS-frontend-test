"use client";
import { CartSliceState, cartSlice, useDispatch } from "@/lib/redux";
import Image from "next/image";

import { toast } from "react-toastify";

import CartInput from "./CartInput";
import styles from "../styles/cart.module.scss";
import { IoIosClose } from "react-icons/io";

type Props = { product: CartSliceState };

export default function ProductCartCard({ product }: Props) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(cartSlice.actions.removeFromCart(product.id));

    toast.error("Produto removido do carrinho", {
      theme: "colored",
    });
  };

  return (
    <li className={styles.cartCard}>
      <button className={styles.removeBtn} onClick={handleRemoveFromCart}>
        <IoIosClose size={18} />
      </button>
      <Image
        className={styles.productPhoto}
        src={product.photo}
        alt="product"
        width={"1280"}
        height={"1024"}
      />

      <div className={styles.productInfo}>
        <h3>{product.name}</h3>

        <CartInput product={product} />

        <p>
          {(Number(product.price) * product.quantity).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </p>
      </div>
    </li>
  );
}
