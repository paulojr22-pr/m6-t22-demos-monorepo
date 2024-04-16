import { BagIcon } from "../../icons/BagIcon";
import styles from "./styles.module.scss";

export const Nav = ({ bagItemsCount, setIsModalOpen }) => {
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
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};
