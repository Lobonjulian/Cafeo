import { useState, useCallback, useMemo } from "react";
import Button from "../components/Common/Button";
import Logo from "../components/Common/Logo";
import styles from "./styles.module.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("MENÚ");
  const [description, setDescription] = useState("");

  const navigationLinks = useMemo(
    () => [
      {
        title: "MENÚ",
        href: "#",
        description: "Nuestro menú de café",
      },
      {
        title: "RECOMPENSAS",
        href: "#",
        description: "Nuestro programa de recompensas",
      },
      {
        title: "TARJETAS REGALO",
        href: "#",
        description: "Tarjetas regalo para tus seres queridos",
      },
    ],
    []
  );

  const handleBtnClick = useCallback((e) => {
    e.preventDefault();
    const href = e.target.href || e.target.closest("a").href;
    if (href) {
      window.location.href = href;
    }
  }, []);

  const handleLinkClick = useCallback(
    (link) => {
      const currentLink = navigationLinks.find((l) => l.title === activeLink);
      setDescription(currentLink?.description || "");
      setActiveLink(link.title);
    },
    [activeLink, navigationLinks]
  );

  return (
    <header className={`${styles.header} ${styles.flex}`}>
      <div className={`${styles.headerContainer} ${styles.flex}`}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={`${styles.navList} ${styles.flex}`}>
            {navigationLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link)}
                  className={`${styles.navLink} ${
                    activeLink === link.title ? styles.active : ""
                  }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          {description && (
            <div className={styles.linkDescription}>{description}</div>
          )}
        </nav>
      </div>

      <div className={`${styles.userActions} ${styles.flex}`}>
        <Button
          btnText="Encuentra una tienda"
          btnClass={styles.btnPrimary}
          onClick={handleBtnClick}
        />
        <Button
          btnText="Iniciar sesión"
          btnClass={styles.btnPrimary}
          onClick={handleBtnClick}
        />
        <Button btnText="Únete ahora" onClick={handleBtnClick} />
      </div>
    </header>
  );
};

export default Header;
