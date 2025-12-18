import React from "react";
import FacilityTemplate from "./FacilityTemplate";

const highlights = [
  "Tiered seating layout with clear sightlines to stage.",
  "Acoustic-friendly interiors for speeches and performances.",
  "Backstage area for green-room prep and quick transitions.",
  "Lighting grid and projector-ready screen for AV content.",
  "Accessible aisles and reserved seating for guests.",
];

const equipment = [
  "Stage lighting with dimmers and spot options",
  "Projector/screen combo plus HDMI connectivity",
  "PA system with wireless and lapel microphones",
  "Podium, risers, and modular staging blocks",
  "Ventilation, emergency exits, and safety signage",
];

const galleryFiles = ["asembly.avif", "asembly2.avif"];

const Auditorium = () => {
  return (
    <FacilityTemplate
      title="Auditorium"
      intro="A warm, AV-ready auditorium for assemblies, productions, seminars, and parent gatherings."
      highlights={highlights}
      equipment={equipment}
      equipmentTitle="AV & Venue"
      galleryFiles={galleryFiles}
    />
  );
};

export default Auditorium;
