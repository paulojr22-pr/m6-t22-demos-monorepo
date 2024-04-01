import { productsArray } from "../../../database/productsDatabase";
import { BagIcon } from "../../icons/BagIcon";

export const ProductSection = () => {
  return (
    <section>
      <h2>Produtos em Destaque</h2>

      <ul>
        {productsArray.map((product) => {
          return (
            <li key={product.id}>
              <figure>
                <img className="product__img" src={product.img} alt="" />
              </figure>

              <div>
                <div>
                  <small>{product.category}</small>
                </div>

                <h3>{product.name}</h3>

                <small>à vista</small>

                <p>
                  <strong>
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                </p>

                <small>no PIX com 15% de desconto</small>

                <p>
                  <strong>R$ 211,75</strong>
                </p>

                <small>
                  em até 12x de{" "}
                  <strong>
                    <span>R$ 17,65</span>
                  </strong>
                </small>

                <button>
                  <BagIcon />
                  Adicionar a sacola
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
