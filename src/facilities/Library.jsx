import React from "react";
import FacilityTemplate from "./FacilityTemplate";

const highlights = [
  "Calm, bright reading zones with soft seating and study desks.",
  "Open stacks for quick access plus teacher-curated displays.",
  "Research nook with periodicals and reference shelves.",
  "Checkout desk with simple circulation and student helpers.",
  "Quiet corners for group study and project discussions.",
];

const equipment = [
  "Catalogued collections: reference, fiction, non-fiction, periodicals",
  "Digital catalog terminal and reading lights at desks",
  "Projector-ready corner for book talks and research demos",
  "Ergonomic chairs, long desks, soft seating pods",
  "Stationery, whiteboards, and pin-boards for ideas",
];

const galleryFiles = [
  "class.avif",
  "class2.avif",
  "class3.avif",
  "class4.avif",
  "class5.avif",
  "class6.avif",
  "class7.avif",
  "class8.avif",
  "class9.avif",
  "class10.avif",
  "class11.avif",

];

const Library = () => {
  return (
    <FacilityTemplate
      title="Library & Reading Room"
      intro="A quiet, light-filled space that nurtures reading habits, research skills, and collaboration."
      highlights={highlights}
      equipment={equipment}
      equipmentTitle="Resources & Amenities"
      galleryFiles={galleryFiles}
    />
  );
};

export default Library;
