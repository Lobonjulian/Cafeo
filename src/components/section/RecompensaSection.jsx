import Section from "./Section";
import styles from "./Section.module.css";

const RecompensaSection = () => {
  const recompensas = [
    {
      title: "1 ★ por peso",
      description: "Paga como prefieras en caja",
    },
    {
      title: "2 ★ por peso",
      description: "Recarga tu tarjeta Cafeo y gana el doble",
    },
    {
      title: "Hasta 3 ★ por peso",
      description: "Con la tarjeta de crédito Cafeo Rewards",
    },
  ];

  return (
    <Section
      title="Gana Estrellas con efectivo o tarjeta"
      items={recompensas}
      sectionClass={styles.recompensaSection}
      cardClass={styles.recompensaCard}
    />
  );
};

export default RecompensaSection;
