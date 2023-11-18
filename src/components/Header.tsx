import React from "react";
import styles from "../styles/header.module.scss";
import Cart from "./Cart";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          MKS <span>Sistemas</span>
        </h1>
        <Cart />
      </div>
    </header>
  );
}
