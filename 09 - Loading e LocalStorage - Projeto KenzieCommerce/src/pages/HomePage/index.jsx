import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductSection } from "../../components/sections/ProductSection";
import { Modal } from "../../components/Modal";

export const HomePage = () => {
  const localBagItem = localStorage.getItem("@kenzieCommerce:bagItem");
  const [bagItems, setBagItem] = useState(
    localBagItem ? JSON.parse(localBagItem) : []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("@kenzieCommerce:bagItem", JSON.stringify(bagItems));
  }, [bagItems]);

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
    setBagItem(bagItems.filter(({ id }) => id !== itemId));
  };

  const removeItemQuantityFromBag = (itemId) => {
    const foundItem = bagItems.find((bagItem) => bagItem.id === itemId);

    if (foundItem && foundItem.quantity > 1) {
      console.log("IF REMOVE FROM BAG");
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
          removeItemQuantityFromBag={removeItemQuantityFromBag}
          addToBag={addToBag}
          setBagItem={setBagItem}
        />
      ) : null}
      <Header bagItemsCount={bagItems.length} setIsModalOpen={setIsModalOpen} />

      <main>
        <ProductSection addToBag={addToBag} />
      </main>
    </>
  );
};
