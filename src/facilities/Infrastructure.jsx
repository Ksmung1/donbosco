import React from "react";
import FacilityTemplate from "./FacilityTemplate";

const highlights = [
  "Neat campus circulation with shaded walkways and ramps.",
  "Green courts and gardens that double as outdoor classrooms.",
  "Signage-led navigation for visitors, students, and parents.",
  "Well-lit corridors with clear emergency exits.",
  "Parking and drop-off zones that keep movement safe.",
];

const equipment = [
  "Clean corridors with ventilation and natural light",
  "Wayfinding signage and display boards",
  "Garden courts with benches and gathering spots",
  "Secure gates, monitored entries, and CCTV coverage",
  "Accessible ramps and handrails at key points",
];

const galleryFiles = [
  "mary.avif",

  "building.avif",
  "school-copy.avif",

  "donbosco.avif",
  "corridor.avif",
  "corridor2.avif",
  "park.avif",
  "basketball.jpg",

  "church.jpg",
  "garden.avif",
  "garden2.avif",
  "ground.avif",

];

const Infrastructure = () => {
  return (
    <FacilityTemplate
      title="Infrastructure & Campus"
      intro="A clean, thoughtfully planned campus—easy to navigate, green, and safe for students and visitors."
      highlights={highlights}
      equipment={equipment}
      equipmentTitle="Campus Features"
      galleryFiles={galleryFiles}
    />
  );
};

export default Infrastructure;
