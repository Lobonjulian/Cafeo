import Section from "./Section";

const BeneficiosSection = () => {

  const beneficios = [
    {
      title: "Regalos Divertidos",
      description:
        "No solo podrás obtener café gratis, también sorpresas en tu cumpleaños y ofertas exclusivas",
    },
    {
      title: "Ordena y paga por adelantado",
      description:
        "Disfruta de la comodidad de ordenar y pagar desde la app, o pedir para recoger en tienda",
    },
    {
      title: "Obtén recompensas más rápido",
      description:
        "Gana Estrellas más rápido con los desafíos de Estrella Extra, juegos divertidos y promociones",
    },
  ];

  return <Section title="Extras Sin Fin" items={beneficios} />;
};

export default BeneficiosSection;