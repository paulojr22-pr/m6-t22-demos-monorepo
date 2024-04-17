import styles from "./styles.module.scss";
import { BagCard } from "./BagCard";

export const BagList = ({ bagItems, removeFromBag, addToBag }) => {
  return (
    <ul className={styles.bagList}>
      {bagItems.map((bagItem) => {
        return (
          <BagCard
            key={bagItem.id}
            bagItem={bagItem}
            removeFromBag={removeFromBag}
            addToBag={addToBag}
          />
        );
      })}
    </ul>
  );
};
