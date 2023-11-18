import React from "react";
import { IProduct } from "../interfaces/IProduct";
import Image from "next/image";

import styles from "../styles/products.module.scss";
import { RiShoppingBag3Line } from "react-icons/ri";
import Link from "next/link";

type Props = { product: IProduct };

export default function ProductCard({ product }: Props) {
  return (
    <li className={styles.productCard}>
      <Link href={`/product/${product.id}`}>
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
      </Link>
      <button className={styles.addCartBtn}>
        <RiShoppingBag3Line />
        COMPRAR
      </button>
    </li>
  );
}
