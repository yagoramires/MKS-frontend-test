import styles from "../styles/header.module.scss";
import Cart from "./Cart";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
        <h1 className={styles.title}>
          MKS <span>Sistemas</span>
        </h1>
        </Link>
        <Cart />
      </div>
    </header>
  );
}
