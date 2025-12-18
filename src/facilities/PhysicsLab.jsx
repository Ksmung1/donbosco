import React from "react";
import FacilityTemplate from "./FacilityTemplate";

const highlights = [
  "Dedicated optics, mechanics, and electricity workstations.",
  "Safety-first layout with proper ventilation and supervised zones.",
  "Digital sensors and data loggers for accurate experimentation.",
  "Demo rigs for wave motion, electromagnetism, and modern physics.",
  "Small-group benches so every student gets hands-on time.",
];

const equipment = [
  "Optical benches, lenses, prisms, and diffraction kits",
  "Vernier calipers, micrometers, pendulum and spring-mass rigs",
  "DC/AC power supplies, galvanometers, multimeters, breadboards",
  "CROs, signal generators, transformers, electromagnetism setups",
  "Wave motion and resonance apparatus, sonometers, tuning forks",
  "Data loggers and sensors for timing, motion, and voltage",
];

const galleryFiles = ["lab16.avif", "lab17.avif", "lab18.avif", "lab19.avif", "lab20.avif", "lab21.avif", "lab22.avif", "lab23.avif"];

const PhysicsLab = () => {
  return (
    <FacilityTemplate
      title="Physics Laboratory"
      intro="Our physics lab is designed for immersive, hands-on discovery. Students explore mechanics, optics, electricity, and modern physics using calibrated apparatus, digital sensors, and demonstration rigs—all under guided supervision for safe and effective learning."
      highlights={highlights}
      equipment={equipment}
      galleryFiles={galleryFiles}
    />
  );
};

export default PhysicsLab;