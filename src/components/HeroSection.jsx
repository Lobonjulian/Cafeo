import Button from "./Common/Button";
import styles from "./HeroSection.module.css";
import taza from "../assets/TazaCapuchino.png";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1 className={styles.title}>CAFÉ GRATIS A UN TOQUE DE DISTANCIA</h1>
        <p className={styles.description}>
          Únete ahora y empieza a ganar recompensas
        </p>
        <Button btnText="Únete ahora" />
      <p className={styles.description}>
        O descarga nuestra app para una mejor experiencia
      </p>
      </div>
      <div className={styles.heroImageContainer}>
        <img src={taza} alt="Taza de Capuchino" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default HeroSection;
