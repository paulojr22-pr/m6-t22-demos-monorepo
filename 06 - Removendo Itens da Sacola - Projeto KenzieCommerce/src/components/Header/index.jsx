import styles from "./styles.module.scss";
import { Nav } from "./Nav";

export const Header = ({ bagItemsCount, setIsModalOpen }) => {
  // console.log("componente Header remontado!");

  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className="title one">Kenzie Commerce</h1>
        <Nav bagItemsCount={bagItemsCount} setIsModalOpen={setIsModalOpen} />
      </div>
    </header>
  );
};
