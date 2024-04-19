import styles from "./styles.module.scss";
import { FaRegTrashCan, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const BagCard = ({
  bagItem,
  removeFromBag,
  addToBag,
  removeItemQuantityFromBag,
}) => {
  return (
    <li className={styles.bagCard}>
      <figure>
        <img src={bagItem.img} alt="" />
      </figure>

      <div className={styles.bagItemDetails}>
        <p className="text">{bagItem.name}</p>

        <div className={styles.itemQuantity}>
          <p className="text sm">Quantidade:</p>
          <button
            disabled={bagItem.quantity === 1}
            onClick={() => removeItemQuantityFromBag(bagItem.id)}
          >
            <FaChevronLeft />
          </button>
          <span className="text">
            <strong>{bagItem.quantity}</strong>
          </span>
          <button onClick={() => addToBag(bagItem)}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <span className="text">
        <strong>
          {(bagItem.price * bagItem.quantity).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </span>

      <button onClick={() => removeFromBag(bagItem.id)}>
        <FaRegTrashCan size={20} />
      </button>
    </li>
  );
};
