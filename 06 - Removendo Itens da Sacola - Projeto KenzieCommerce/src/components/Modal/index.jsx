import styles from "./styles.module.scss";
import { FaRegTrashCan } from "react-icons/fa6";

// PRETTIER (formatador de código)

/*
  DESAFIO:
  - implementar a parte de remover o item da sacola pelo botão de lixeira do modal
*/
export const Modal = ({ setIsModalOpen, bagItems, removeFromBag }) => {
  const bagSubtotal = () => {
    const subTotal = bagItems.reduce((acc, curr) => {
      return acc + curr.price;
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
          {bagItems.map(({ id, img, name, price }) => {
            return (
              <li key={id} className={styles.bagCard}>
                <figure>
                  <img src={img} alt="" />
                </figure>

                <div>
                  <div className={styles.bagItemDetails}>
                    <p className="text">{name}</p>

                    <span className="text">
                      <strong>
                        {price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </strong>
                    </span>
                  </div>

                  <button onClick={() => removeFromBag(id)}>
                    <FaRegTrashCan size={20} />
                  </button>
                </div>
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
