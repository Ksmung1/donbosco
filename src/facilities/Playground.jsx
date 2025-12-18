import React from "react";
import FacilityTemplate from "./FacilityTemplate";

const highlights = [
  "Expansive grounds for football, athletics, and drills.",
  "Dedicated basketball court and multi-sport practice zones.",
  "Shaded seating and hydration points for students.",
  "Well-marked tracks and play areas for junior grades.",
  "Evening-friendly lighting for supervised practice.",
];

const equipment = [
  "Football and futsal goals with boundary nets",
  "Athletics lane markers, cones, hurdles, ladders",
  "Basketballs, volleyball nets, and badminton sets",
  "Agility ladders, speed cones, parachutes for drills",
  "First-aid kit and hydration coolers on standby",
];

const galleryFiles = [
  "ground.avif",
  "ground2.avif",
  "ground3.avif",
  "ground4.avif",
  "ground5.avif",
  "playground.jpg",
  "basketball.jpg",
  "park.avif",
  "park2.avif",
  "park3.avif",
  "park4.avif",
];

const Playground = () => {
  return (
    <FacilityTemplate
      title="Playground & Courts"
      intro="Outdoor sports hubs that keep students active—fields, courts, and tracks planned for both team play and skill drills."
      highlights={highlights}
      equipment={equipment}
      equipmentTitle="Facilities & Gear"
      galleryFiles={galleryFiles}
    />
  );
};

export default Playground;
