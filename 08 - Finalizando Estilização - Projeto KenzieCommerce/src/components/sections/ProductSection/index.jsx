import styles from "./styles.module.scss";
import { ProductList } from "./ProductList";

export const ProductSection = ({ addToBag }) => {
  // console.log("componente ProductSection remontado!");
  return (
    <section className={styles.productSection}>
      <div className="container">
        <h2 className="title two">Produtos em Destaque</h2>

        <ProductList addToBag={addToBag} />
      </div>
    </section>
  );
};
