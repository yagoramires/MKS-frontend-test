"use client";
import axios from "axios";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

import { IProduct } from "../interfaces/IProduct";
import styles from "../styles/products.module.scss";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

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
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <ProductCardSkeleton key={item} />
            ))}
          </ul>
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
