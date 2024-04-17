import styles from "./styles.module.scss";
import { BagList } from "./BagList";
import { ModalHeader } from "./ModalHeader";
import { SubTotal } from "./SubTotal";
/*
  DESAFIO:
  - Componentizar o Modal
    - ModalHeader
    - BagList
      - BagCard
    - SubTotal
*/
export const Modal = ({
  setIsModalOpen,
  bagItems,
  removeFromBag,
  addToBag,
}) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalBox}>
        <ModalHeader setIsModalOpen={setIsModalOpen} />
        <BagList
          bagItems={bagItems}
          removeFromBag={removeFromBag}
          addToBag={addToBag}
        />
        <SubTotal bagItems={bagItems} />
      </div>
    </div>
  );
};
