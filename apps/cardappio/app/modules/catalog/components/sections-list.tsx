import { SectionCard } from "./section-card";

export function SectionsList() {
  const sections = [
    {
      title: "Promoções",
      link: "/promocoes",
    },
    {
      title: "Pizzas",
      link: "/pizzas",
    },
    {
      title: "Calzones",
      link: "/calzones",
    },
    {
      title: "Bebidas",
      link: "/bebidas",
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <SectionCard key={index} link={section.link}>
          <p>{section.title}</p>
        </SectionCard>
      ))}
    </div>
  );
}
