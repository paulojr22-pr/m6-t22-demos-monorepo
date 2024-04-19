import styles from "./styles.module.scss";
import { BagList } from "./BagList";
import { ModalHeader } from "./ModalHeader";
import { SubTotal } from "./SubTotal";
import { EmptyBag } from "./EmptyBag";

export const Modal = ({
  setIsModalOpen,
  bagItems,
  removeFromBag,
  removeItemQuantityFromBag,
  addToBag,
  setBagItem,
}) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalBox}>
        <ModalHeader setIsModalOpen={setIsModalOpen} />

        {bagItems.length === 0 ? (
          <EmptyBag />
        ) : (
          // TODO: Componentizar esta div (BagDetails)
          <div className={styles.bagDetails}>
            <BagList
              bagItems={bagItems}
              removeFromBag={removeFromBag}
              removeItemQuantityFromBag={removeItemQuantityFromBag}
              addToBag={addToBag}
            />
            <SubTotal bagItems={bagItems} />
            <button onClick={() => setBagItem([])} className="btn lg fullWidth">
              REMOVER TODOS OS ITENS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
