"use client";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

import styles from "../styles/cart.module.scss";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import ProductCartCard from "./ProductCartCard";

type Props = {};

export default function Cart() {
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

  const product = {
    "id": 8,
    "name": "Headset Cloud Stinger",
    "brand": "HyperX",
    "description": "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
    "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
    "price": "600.00",
    "createdAt": "2023-10-30T16:25:01.093Z",
    "updatedAt": "2023-10-30T16:25:01.093Z"
  }


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
        <ProductCartCard product={product}/>
        </ul>
      </motion.div>
      <button onClick={toggleSidebar} className={styles.cartBtn}>
        <TiShoppingCart size={19} /> <span>0</span>
      </button>
    </div>
  );
}
