import styles from "./styles.module.scss";
import { FaRegTrashCan, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// PRETTIER (formatador de código)

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
  const bagSubtotal = () => {
    const subTotal = bagItems.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);

    return subTotal;
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalBox}>
        <header>
          <h2 className="title two">Sacola</h2>
          <button onClick={() => setIsModalOpen(false)}>X</button>
        </header>

        <ul>
          {bagItems.map((bagItem) => {
            return (
              <li key={bagItem.id} className={styles.bagCard}>
                <figure>
                  <img src={bagItem.img} alt="" />
                </figure>

                <div className={styles.bagItemDetails}>
                  <p className="text">{bagItem.name}</p>
                  <div>
                    <p className="text sm">Quantidade:</p>
                    <button
                      disabled={bagItem.quantity === 1}
                      onClick={() => removeFromBag(bagItem.id)}
                    >
                      <FaChevronLeft />
                    </button>
                    <span>{bagItem.quantity}</span>
                    <button onClick={() => addToBag(bagItem)}>
                      <FaChevronRight />
                    </button>
                  </div>
                </div>

                <span className="text">
                  <strong>
                    {(bagItem.price * bagItem.quantity).toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      }
                    )}
                  </strong>
                </span>

                <button onClick={() => removeFromBag(bagItem.id)}>
                  <FaRegTrashCan size={20} />
                </button>
              </li>
            );
          })}
        </ul>

        <div className={styles.subTotal}>
          <h3 className="title three">SubTotal</h3>
          <p className="text md">
            <strong>
              {bagSubtotal().toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};
