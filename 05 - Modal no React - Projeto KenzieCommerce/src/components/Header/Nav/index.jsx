import { BagIcon } from "../../icons/BagIcon";
import styles from "./styles.module.scss";

// export const Nav = (variavel) => {
export const Nav = ({ bagItemsCount, setIsModalOpen }) => {
  // console.log(variavel);
  // console.log("componente Nav remontado!");
  return (
    <nav>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <a href="#">Login</a>
        </li>
        <li className={styles.navLink}>
          <a href="#">Contato</a>
        </li>
        <li className={styles.navLink}>
          <button onClick={() => setIsModalOpen(true)}>
            <a>
              <BagIcon />
              <span>{bagItemsCount}</span>
              {/* <span>{variavel.bagItemsCount}</span> */}
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};
