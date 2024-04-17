import styles from "./styles.module.scss";

export const ModalHeader = ({ setIsModalOpen }) => {
  return (
    <header className={styles.modalHeader}>
      {/* <div> */}
      <h2 className="title two">Sacola</h2>
      <button onClick={() => setIsModalOpen(false)}>X</button>
      {/* </div> */}
    </header>
  );
};
