import Button from "../components/Common/Button";
import Logo from "../components/Common/Logo";
import styles from "./styles.module.css";

const Header = () => {
  const navigationLinks = [
    {
      title: "MENÚ",
      href: "#",
    },
    {
      title: "RECOMPENSAS",
      href: "#",
    },
    {
      title: "TARJETAS REGALO",
      href: "#",
    },
  ];

  return (
    <header className={`${styles.header} ${styles.flex}`}>
      <div className={`${styles.headerContainer} ${styles.flex}`}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={`${styles.navList} ${styles.flex}`}>
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`${styles.userActions} ${styles.flex}`}>
        <Button btnText="Encuentra una tienda" btnClass={styles.btnPrimary}/>
        <Button btnText="Iniciar sesión" btnClass={styles.btnPrimary}/>
        <Button btnText="Únete ahora" />
      </div>
    </header>
  );
};

export default Header;
