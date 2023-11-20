import Image from "next/image";
import { IProduct } from "../interfaces/IProduct";
import { cartSlice, useDispatch } from "@/lib/redux";

import { toast } from "react-toastify";

import styles from "../styles/products.module.scss";
import { RiShoppingBag3Line } from "react-icons/ri";

type Props = { product: IProduct };

export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartSlice.actions.addToCart(product));

    toast.success("Produto adicionado ao carrinho", {
      theme: "colored"
    })
  };

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
      <button className={styles.addCartBtn} onClick={handleAddToCart}>
        <RiShoppingBag3Line />
        COMPRAR
      </button>
    </li>
  );
}
