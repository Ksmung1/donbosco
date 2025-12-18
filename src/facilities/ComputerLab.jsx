import React from "react";
import FacilityTemplate from "./FacilityTemplate";

const highlights = [
  "Airy lab with ergonomic seating and dual rows for supervision.",
  "Projector-ready instructor station for live demos.",
  "High-speed network, surge protection, and UPS backup.",
  "Coding-first layout that supports pair and group work.",
  "Clear lab rules, cable management, and sanitizer points.",
];

const equipment = [
  "Updated desktops with fast internet and productivity suites",
  "Projector/TV for demonstrations and walkthroughs",
  "UPS and surge protection for uninterrupted practice",
  "Headsets for language and multimedia practice",
  "Whiteboard and pin-board for quick references",
];

const galleryFiles = ["computer.avif", "computer2.avif", "computer3.avif", "computer4.avif"];

const ComputerLab = () => {
  return (
    <FacilityTemplate
      title="Computer Laboratory"
      intro="A modern computer lab built for coding, design, and research—structured so every learner gets guided screen time."
      highlights={highlights}
      equipment={equipment}
      equipmentTitle="Lab Resources"
      galleryFiles={galleryFiles}
    />
  );
};

export default ComputerLab;
