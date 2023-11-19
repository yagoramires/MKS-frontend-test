"use client";
import { useState } from "react";
import { selectedItems, useSelector } from "@/lib/redux";

import { motion, useAnimation } from "framer-motion";
import ProductCartCard from "./ProductCartCard";
import styles from "../styles/cart.module.scss";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";

export default function Cart() {
  const cart = useSelector(selectedItems);
  const total =
    cart?.length > 0 &&
    cart?.reduce((acc, product) => {
      return acc + product.quantity * Number(product.price);
    }, 0);

  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      controls.start({ x: isOpen ? "-100%" : 0 });
    } else {
      controls.start({ x: !isOpen ? 0 : "100%" });
    }
  };

  return (
    <div>
      <motion.div
        initial={{ x: "100%" }}
        animate={controls}
        transition={{ duration: 0.3 }}
        className={styles.sidebar}
      >
        <div className={styles.cartHeader}>
          <h3>
            Carrinho <br /> de compras
          </h3>

          <button onClick={toggleSidebar}>
            <IoIosClose size={30} />
          </button>
        </div>

        <ul className={styles.cartList}>
          {cart?.map((product) => (
            <ProductCartCard key={product.id} product={product} />
          ))}
        </ul>

        <div className={styles.cartFooter}>
          <p>
            Total:
            <span>
              {Number(total).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </p>
          <button>Finalizar Compra</button>
        </div>
      </motion.div>
      <button onClick={toggleSidebar} className={styles.cartBtn}>
        <TiShoppingCart size={19} /> <span>{cart.length}</span>
      </button>
    </div>
  );
}
