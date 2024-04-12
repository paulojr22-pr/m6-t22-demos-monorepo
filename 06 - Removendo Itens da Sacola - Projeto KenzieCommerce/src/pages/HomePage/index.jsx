import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductSection } from "../../components/sections/ProductSection";
import { Modal } from "../../components/Modal";

export const HomePage = () => {
  const [bagItems, setBagItem] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToBag = (item) => {
    setBagItem([...bagItems, item]);
  };

  const removeFromBag = (itemId) => {
    const updatedBag = bagItems.filter(({ id }) => id !== itemId);

    setBagItem(updatedBag);
  };

  console.log(bagItems);
  // console.log("componente Home Page remontado!!");

  return (
    <>
      {/* CONDITIONAL RENDERING */}
      {isModalOpen ? (
        <Modal
          setIsModalOpen={setIsModalOpen}
          bagItems={bagItems}
          removeFromBag={removeFromBag}
        />
      ) : null}
      <Header bagItemsCount={bagItems.length} setIsModalOpen={setIsModalOpen} />
      <main className="container">
        <ProductSection addToBag={addToBag} />
      </main>
    </>
  );
};
