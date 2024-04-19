import styles from "./styles.module.scss";
import { FaXmark } from "react-icons/fa6";

export const ModalHeader = ({ setIsModalOpen }) => {
  return (
    <header className={styles.modalHeader}>
      <h2 className="title two">Sacola</h2>
      {/* <button onClick={() => setIsModalOpen(false)}>X</button> */}
      <button onClick={() => setIsModalOpen(false)}>
        <FaXmark />
      </button>
    </header>
  );
};
