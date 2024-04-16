import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductSection } from "../../components/sections/ProductSection";
import { Modal } from "../../components/Modal";

export const HomePage = () => {
  const [bagItems, setBagItem] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToBag = (item) => {
    const foundItem = bagItems.find((bagItem) => bagItem.id === item.id);

    if (foundItem) {
      // ESTÁ NA SACOLA, ADICIONA +1 A CHAVE QUANTITY
      const updatedBag = bagItems.map((bagItem) => {
        if (bagItem.id === item.id) {
          return { ...bagItem, quantity: bagItem.quantity + 1 };
        }

        return bagItem;
      });

      setBagItem(updatedBag);
    } else {
      // NAO ESTÁ NA SACOLA, CRIA COM QUANTITY = 1
      setBagItem([...bagItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromBag = (itemId) => {
    const foundItem = bagItems.find((bagItem) => bagItem.id === itemId);

    if (foundItem && foundItem.quantity > 1) {
      // const updatedBag = bagItems.map((bagItem) => {
      //   if (bagItem.id === itemId) {
      //     return { ...bagItem, quantity: bagItem.quantity - 1 };
      //   }

      //   return bagItem;
      // });
      const updatedBag = bagItems.map((bagItem) => {
        return bagItem.id === itemId
          ? { ...bagItem, quantity: bagItem.quantity - 1 }
          : bagItem;
      });

      setBagItem(updatedBag);
    } else {
      // const updatedBag = bagItems.filter(({ id }) => id !== itemId);
      // setBagItem(updatedBag);
      setBagItem(bagItems.filter(({ id }) => id !== itemId));
    }
  };

  // console.table(bagItems);
  // console.log("componente Home Page remontado!!");

  return (
    <>
      {/* CONDITIONAL RENDERING */}
      {isModalOpen ? (
        <Modal
          setIsModalOpen={setIsModalOpen}
          bagItems={bagItems}
          removeFromBag={removeFromBag}
          addToBag={addToBag}
        />
      ) : null}
      <Header bagItemsCount={bagItems.length} setIsModalOpen={setIsModalOpen} />
      <main className="container">
        <ProductSection addToBag={addToBag} />
      </main>
    </>
  );
};
