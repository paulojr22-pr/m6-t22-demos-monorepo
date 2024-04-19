// import { productsArray } from "../../../../database/productsDatabase";
import styles from "./styles.module.scss";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { hardwareAPI } from "../../../../services/api";
import { LoadingSpinner } from "../../../LoadingSpinner";

export const ProductList = ({ addToBag }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      // const productsArray = await fetchAPI();
      // setProducts([...productsArray]);

      try {
        setLoading(true);
        const { data } = await hardwareAPI.get("/hardwares");
        // const { data } = await hardwareAPI.get("/hardwaresZZZ");
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul className={styles.productList}>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                addToBag={addToBag}
                product={product}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};
