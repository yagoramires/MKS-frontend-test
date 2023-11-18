"use client";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

import styles from "../styles/cart.module.scss";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";

type Props = {};

export default function Cart({}: Props) {
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen ) {

      controls.start({ x: isOpen ? "-100%" : 0 });
    } else {
      controls.start({ x: !isOpen ? 0 : '100%' });
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
          <li className={styles.cartItem}></li>
        </ul>
      </motion.div>
      <button onClick={toggleSidebar} className={styles.cartBtn}>
        <TiShoppingCart size={19} /> <span>0</span>
      </button>
    </div>
  );
}
