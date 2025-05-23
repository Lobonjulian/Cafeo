import Card from "../Common/Card";
import styles from "./Section.module.css";

const Section = ({ title, items, sectionClass, cardClass, children }) => {
  return (
    <section className={`${styles.section} ${sectionClass}`}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionCards}>
        {items.map((item, index) => (
          <Card key={index} {...item} cardClass={cardClass} />
        ))}
      </div>
      {children}
    </section>
  );
};

export default Section;
