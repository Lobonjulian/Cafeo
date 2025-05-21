import Section from "./Section";
import styles from "./Section.module.css";

const PasosSection = () => {
  const pasos = [
    {
      number: 1,
      title: "Crea una cuenta",
      description:
        "Para empezar, regístrate. También puedes descargar la app para acceder a todos los beneficios de Cafeo Rewards",
    },
    {
      number: 2,
      title: "Ordena y paga como prefieras",
      description:
        "Usa efectivo, tarjeta de crédito/débito y acumula Estrellas al pagar a través de la app. Obtendrás Estrellas en cada compra.",
    },
    {
      number: 3,
      title: "Gana Estrellas, obtén Recompensas",
      description:
        "A medida que ganas Estrellas, podrás canjearlas por Recompensas: bebidas gratis, alimentos y más. Comienza a canjear con tan solo 25 Estrellas.",
    },
  ];

  return <Section title="Comenzar es fácil" items={pasos} icon="number" sectionClass={styles.pasosSection} cardClass={styles.pasosCard} />;
};

export default PasosSection;
