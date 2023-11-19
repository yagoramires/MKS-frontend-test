import React from "react";
import { IProduct } from "../interfaces/IProduct";
import Image from "next/image";

import styles from "../styles/products.module.scss";
import { RiShoppingBag3Line } from "react-icons/ri";
import { cartSlice, useDispatch } from "@/lib/redux";

type Props = { product: IProduct };

export default function ProductCard({ product }: Props) {


  const dispatch = useDispatch()

  return (
    <li className={styles.productCard}>
        <Image
          className={styles.productPhoto}
          src={product.photo}
          alt="product"
          width={"1280"}
          height={"1024"}
        />

        <div className={styles.productInfo}>
          <div>
            <h3>{product.name}</h3>
            <p>
              {Number(product.price).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
          <p>{product.description}</p>
        </div>
      <button className={styles.addCartBtn} onClick={()=> dispatch(cartSlice.actions.addToCart(product))}>
        <RiShoppingBag3Line />
        COMPRAR
      </button>
    </li>
  );
}
