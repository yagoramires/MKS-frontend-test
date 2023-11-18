"use client";
import axios from "axios";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

import { IProduct } from "../interfaces/IProduct";
import styles from "../styles/products.module.scss";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery(
    "products",
    () => {
      return axios
        .get(
          "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
        )
        .then((res) => res.data);
    },
    {
      retry: 3,
    }
  );

  return (
    <section className={styles.productsContainer}>
      <div>
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
            style={{
              fontSize: "24px",
              textAlign: "center",
              margin: "20px",
            }}
          >
            Loading...
          </motion.div>
        ) : (
          <ul>
            {products.products.map((product: IProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
