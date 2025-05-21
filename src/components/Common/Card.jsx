import styles from "./styles.module.css";

const Card = ({ icon, title, stars, description, cardClass , number}) => {
  return (
    <div className={`${styles.card} ${cardClass}`}>
      {icon ? (
        <img src={icon} alt={title} className={styles.cardIcon} />
      ) : icon || number ? (
        <span className={styles.cardNumber}>{icon || number}</span>
      ) : null}
      <h2 className={styles.cardTitle}>
        {stars && <span className={styles.cardStars}>{stars}</span>}
        {title}
      </h2>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default Card;
