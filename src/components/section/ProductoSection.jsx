import { useState } from "react";
import { imageAgua, imageCafe, imageTe } from "../../assets/imageData";
import Section from "./Section";
import styles from "./Section.module.css";

const productos = [
  {
    title: "Café",
    description: "Café de alta calidad",
  },
  {
    title: "Té",
    description: "Té de alta calidad",
  },
  {
    title: "Agua",
    description: "Agua de alta calidad",
  },
];

const ProductoSection = () => {
  const [itemImage, setitemImage] = useState("cafe");

  const handleImageClick = (image) => {
    setitemImage(image);
    
  };

  const images = {
    cafe: imageCafe[Math.floor(Math.random() * imageCafe.length)].image,
    te: imageTe[Math.floor(Math.random() * imageTe.length)].image,
    agua:imageAgua[Math.floor(Math.random() * imageAgua.length)].image,
  };


  return (
    <Section
      title="Obtén tus favoritos gratis"
      items={productos}
      sectionClass={styles.productoSection}
    >
      <div className={styles.productoSectionImageContainer}>
        <img
          src={images[itemImage]}
          alt={itemImage}
          className={styles.productoSectionImage}
        />
        <div className={styles.productoSectionImageContainerButtons}>
          <button onClick={() => handleImageClick("cafe")}>🟤</button>
          <button onClick={() => handleImageClick("te")}>🟣</button>
          <button onClick={() => handleImageClick("agua")}>⚪</button>
        </div>
      </div>
    </Section>
  );
};

export default ProductoSection;
