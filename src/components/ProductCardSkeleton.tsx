import { motion } from "framer-motion";
import styles from "../styles/products.module.scss";

export default function ProductCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className={styles.productCardSkeleton}
    >
      <motion.div className={styles.productCardSkeletonImage} />
      <motion.div className={styles.productCardSkeletonTitle} />
      <motion.div className={styles.productCardSkeletonDescription} />
      <motion.div className={styles.productCardSkeletonDescription} />
    </motion.div>
  );
}
