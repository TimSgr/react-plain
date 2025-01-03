"use client";

import ExpandableBox from "./expandableBox";

export default function Projects() {
  const boxes = [
    {
      imageSrc: "/Example_Shopware.png",
      imageAlt: "Shopware Example",
      title: "Shopware Projekt",
      description: "Ein Shopware Projekt mit Custom Plugins und mehr",
      buttons: [
        { label: "Zum Projekt", onClick: () => alert("Zum Projekt") },
        { label: "Mehr Infos", onClick: () => alert("Mehr Infos") },
      ],
    },
    {
      imageSrc: "/Example_Project.png",
      imageAlt: "Example Project",
      title: "Anderes Projekt",
      description: "Beschreibung eines anderen Projekts",
      buttons: [
        { label: "Details", onClick: () => alert("Details anzeigen") },
        { label: "Mehr", onClick: () => alert("Mehr anzeigen") },
      ],
    },
    {
      imageSrc: "/Example_Project.png",
      imageAlt: "Example Project",
      title: "Anderes Projekt",
      description: "Beschreibung eines anderen Projekts",
      buttons: [
        { label: "Details", onClick: () => alert("Details anzeigen") },
        { label: "Mehr", onClick: () => alert("Mehr anzeigen") },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 auto-rows-auto w-full">
      {boxes.map((box, index) => (
        <ExpandableBox
          key={index}
          imageSrc={box.imageSrc}
          imageAlt={box.imageAlt}
          title={box.title}
          description={box.description}
          buttons={box.buttons}
        />
      ))}
    </div>
  );
}
