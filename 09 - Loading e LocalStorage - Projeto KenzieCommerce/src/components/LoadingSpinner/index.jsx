import styles from "./styles.module.scss";

export const LoadingSpinner = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};
