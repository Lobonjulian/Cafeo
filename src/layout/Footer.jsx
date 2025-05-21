import styles from "./styles.module.css";
import Logo from "../components/Common/Logo";

const Footer = () => {
  const footerSections = [
    {
      title: "Sobre Nosotros",
      items: [
        "Nuestra Historia",
        "Trabaja con nosotros",
        "Contacto",
        "Ubicaciones",
      ],
    },
    {
      title: "Servicios",
      items: ["Delivery", "Catering", "Tarjetas Regalo", "Programa de Lealtad"],
    },
    {
      title: "Legal",
      items: [
        "Términos y Condiciones",
        "Privacidad",
        "Cookies",
        "Accesibilidad",
      ],
    },
  ];

  return (
    <footer className={`${styles.footer} `}>
      <div className={`${styles.footerContainer}`}>
        <div className={styles.footerContainerLogo}>
          <Logo />
          <p>Haciendo que cada taza sea una experiencia única</p>
        </div>
        {footerSections.map((section, index) => (
          <div key={index} className={`${styles.footerSection} ${styles.flex}`}>
            <h4>{section.title}</h4>
            <ul className={styles.footerSectionList}>
              {section.items.map((item, i) => (
                <li key={i}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.footerCopyright}>
        <p className={styles.footerCopyrightText}>
          © 2024- {new Date().getFullYear()} - <span>Cafeo</span>. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
