import Section from "./Section"
import styles from "./Section.module.css"

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
  return <Section title="Obtén tus favoritos gratis" items={productos} sectionClass={styles.productoSection} />;
};

export default ProductoSection;
