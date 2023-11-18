'use client'
import { IProduct } from "../interfaces/IProduct";
import Image from "next/image";

import styles from "../styles/cart.module.scss";
import { RiShoppingBag3Line } from "react-icons/ri";
import CartInput from "./CartInput";

type Props = { product: IProduct };

export default function ProductCartCard({ product }: Props) {
  return (
    <li className={styles.cartCard}>
        <Image
          className={styles.productPhoto}
          src={product.photo}
          alt="product"
          width={"1280"}
          height={"1024"}
        />

        <div className={styles.productInfo}>
          <h3>{product.name}</h3>

          <CartInput value={1}/>

          <p>
            {Number(product.price).toLocaleString("pt-BR", {
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
