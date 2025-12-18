import React from "react";
import FacilityTemplate from "./FacilityTemplate";

const highlights = [
  "Bright, ventilated space for dissections and microscopy.",
  "Live and preserved specimen trays with clear labeling.",
  "Charts, models, and skeletal systems for quick visual aids.",
  "Individual microscopes per table to maximize hands-on time.",
  "Sterile benches and proper bio-waste segregation.",
];

const equipment = [
  "Compound and stereo microscopes with prepared slides",
  "Dissection kits, trays, scalpels, forceps, and gloves",
  "Incubators, water baths, and microtome for tissue prep",
  "Charts, 3D models, and skeleton models for anatomy",
  "pH meters, hemoglobin meters, and basic centrifuge",
  "Glassware sets: test tubes, pipettes, measuring cylinders",
];

const galleryFiles = ["lab12.avif", "lab13.avif", "lab14.avif", "lab15.avif"]

const BiologyLab = () => {
  return (
    <FacilityTemplate
      title="Biology Laboratory"
      intro="A discovery-driven biology lab that blends microscopy, dissections, and model-based learning—designed to nurture curiosity about the living world."
      highlights={highlights}
      equipment={equipment}
      equipmentTitle="Lab Resources"
      galleryFiles={galleryFiles}
    />
  );
};

export default BiologyLab;
