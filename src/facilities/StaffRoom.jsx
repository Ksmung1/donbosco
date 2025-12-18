import React from "react";
import FacilityTemplate from "./FacilityTemplate";

const highlights = [
  "Bright workspace with shared and quiet desk zones.",
  "Storage cubbies, pigeon holes, and planning boards.",
  "Common pantry corner for coffee/tea breaks.",
  "Meeting table for quick huddles and mentoring.",
  "Printing station and device charging points.",
];

const equipment = [
  "Individual desks with ergonomic seating",
  "Lockable storage and document cabinets",
  "Whiteboard/pin-board for notices and plans",
  "Printer/copier and basic stationery",
  "Pantry set-up: water, kettle, cups, and sink",
];

const galleryFiles = ["father.avif", "sister.avif", "staffroom4.avif", "staffroom5.avif", "staffroom6.avif", "teachers.avif", "fatherOffice.avif", "teachers2.avif", "teachers3.avif", "teachers4.avif", "teachers5.avif", "teachers6.avif", "teachers7.avif", "teachers8.avif"];

const StaffRoom = () => {
  return (
    <FacilityTemplate
      title="Staff Room"
      intro="A comfortable, organized workspace where teachers plan, collaborate, and recharge between classes."
      highlights={highlights}
      equipment={equipment}
      equipmentTitle="Work Conveniences"
      galleryFiles={galleryFiles}
    />
  );
};

export default StaffRoom;
