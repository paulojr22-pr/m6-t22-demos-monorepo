import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductSection } from "../../components/sections/ProductSection";
// import { FinanceSection } from "../../components/sections/FinanceSection";

export const HomePage = () => {
  const [bagItems, setBagItem] = useState([]);

  const addToBag = (item) => {
    setBagItem([...bagItems, item]);
  };

  console.log(bagItems);
  return (
    <>
      <Header bagItemsCount={bagItems.length} />
      <main className="container">
        <ProductSection addToBag={addToBag} />
      </main>
    </>
  );
};
