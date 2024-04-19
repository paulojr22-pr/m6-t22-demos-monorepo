import { FaBagShopping } from "react-icons/fa6";
import styles from "./styles.module.scss";

export const EmptyBag = () => {
  return (
    <div className={styles.emptyBagContainer}>
      <h2 className="title two">Sua sacola está vazia!</h2>
      <FaBagShopping size={100} />
    </div>
  );
};
