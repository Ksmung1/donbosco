import React from "react";
import FacilityTemplate from "./FacilityTemplate";

const highlights = [
  "Dedicated wet and dry benches with fume-hood access.",
  "Clearly labeled reagents and color-coded waste segregation.",
  "Each workstation has sinks, burners, and safety gear.",
  "Micro-scale kits to minimize waste and improve safety.",
  "Data-first approach with temperature probes and pH meters.",
];

const equipment = [
  "Fume hood with proper ventilation and exhaust",
  "Analytical and top-pan balances for titrations",
  "Burettes, pipettes, volumetric flasks, conical flasks",
  "Digital pH meters, conductivity and salinity meters",
  "Distillation glassware, condensers, and water baths",
  "Hot plates, magnetic stirrers, and heating mantles",
  "Safety showers, eye-wash station, gloves, goggles, aprons",
];

const galleryFiles = ["lab.avif", "lab1.avif", "lab2.avif", "lab3.avif", "lab4.avif", "lab5.avif", "lab6.avif", "lab7.avif", "lab8.avif", "lab9.avif", "lab10.avif", "lab11.avif" ];

const ChemistryLab = () => {
  return (
    <FacilityTemplate
      title="Chemistry Laboratory"
      intro="A safety-led chemistry lab where learners practice precision, observation, and inquiry—from classical titrations to modern instrumentation-focused experiments."
      highlights={highlights}
      equipment={equipment}
      equipmentTitle="Lab Resources"
      galleryFiles={galleryFiles}
    />
  );
};

export default ChemistryLab;
