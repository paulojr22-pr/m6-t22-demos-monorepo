import styles from "./styles.module.scss";
import { FaRegTrashCan } from "react-icons/fa6";

// PRETTIER (formatador de código)

/*
  DESAFIO:
  - implementar a parte de remover o item da sacola pelo botão de lixeira do modal
*/
export const Modal = ({ setIsModalOpen, bagItems }) => {
  // console.log("componente Modal remontado!");

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
                  <FaRegTrashCan size={35} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
