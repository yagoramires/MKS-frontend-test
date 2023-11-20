'use client'
import useFetchProducts from "@/api";

import { IProduct } from "../interfaces/IProduct";
import styles from "../styles/products.module.scss";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function Home() {
  const { data, isLoading } = useFetchProducts();

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
            {data?.products.map((product: IProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
