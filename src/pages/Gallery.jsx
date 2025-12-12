import React, { useState } from "react";

// IMPORT ALL IMAGES ↓
import asembly from "../assets/asembly.avif";
import asembly2 from "../assets/asembly2.avif";
import boy from "../assets/boy.avif";
import building from "../assets/building.avif";
import classImg from "../assets/class.avif";
import class2 from "../assets/class2.avif";
import class3 from "../assets/class3.avif";
import class4 from "../assets/class4.avif";
import class5 from "../assets/class5.avif";
import class6 from "../assets/class6.avif";
import class7 from "../assets/class7.avif";
import class8 from "../assets/class8.avif";
import class9 from "../assets/class9.avif";
import class10 from "../assets/class10.avif";
import class11 from "../assets/class11.avif";
import computer from "../assets/computer.avif";
import computer2 from "../assets/computer2.avif";
import computer3 from "../assets/computer3.avif";
import computer4 from "../assets/computer4.avif";
import corridor from "../assets/corridor.avif";
import corridor2 from "../assets/corridor2.avif";
import developer from "../assets/developer.avif";
import donbosco from "../assets/donbosco.avif";
import father from "../assets/father.avif";
import father2 from "../assets/father2.avif";
import father3 from "../assets/father3.avif";
import father4 from "../assets/father4.avif";
import father5 from "../assets/father5.avif";
import fatherOffice from "../assets/fatherOffice.avif";
import garden from "../assets/garden.avif";
import garden2 from "../assets/garden2.avif";
import ground from "../assets/ground.avif";
import ground2 from "../assets/ground2.avif";
import ground3 from "../assets/ground3.avif";
import ground4 from "../assets/ground4.avif";
import ground5 from "../assets/ground5.avif";
import hall from "../assets/hall.avif";
import hall2 from "../assets/hall2.avif";
import hall3 from "../assets/hall3.avif";
import hall4 from "../assets/hall4.avif";
import hall5 from "../assets/hall5.avif";
import hall6 from "../assets/hall6.avif";
import hall7 from "../assets/hall7.avif";
import hslcToppers from "../assets/hslc-toppers.avif";
import lab from "../assets/lab.avif";
import lab2 from "../assets/lab2.avif";
import lab3 from "../assets/lab3.avif";
import lab4 from "../assets/lab4.avif";
import lab5 from "../assets/lab5.avif";
import lab6 from "../assets/lab6.avif";
import lab7 from "../assets/lab7.avif";
import lab8 from "../assets/lab8.avif";
import lab9 from "../assets/lab9.avif";
import lab10 from "../assets/lab10.avif";
import lab11 from "../assets/lab11.avif";
import lab12 from "../assets/lab12.avif";
import lab13 from "../assets/lab13.avif";
import lab14 from "../assets/lab14.avif";
import lab15 from "../assets/lab15.avif";
import lab16 from "../assets/lab16.avif";
import lab17 from "../assets/lab17.avif";
import lab18 from "../assets/lab18.avif";
import lab19 from "../assets/lab19.avif";
import lab20 from "../assets/lab20.avif";
import lab21 from "../assets/lab21.avif";
import lab22 from "../assets/lab22.avif";
import lab23 from "../assets/lab23.avif";
import logo from "../assets/logo.avif";
import mary from "../assets/mary.avif";
import mary2 from "../assets/mary2.avif";
import office from "../assets/office.avif";
import office2 from "../assets/office2.avif";
import office3 from "../assets/office3.avif";
import office4 from "../assets/office4.avif";
import office5 from "../assets/office5.avif";
import park from "../assets/park.avif";
import park2 from "../assets/park2.avif";
import park3 from "../assets/park3.avif";
import park4 from "../assets/park4.avif";
import principals1 from "../assets/principals1.avif";
import principals2 from "../assets/principals2.avif";
import schoolCopy from "../assets/school-copy.avif";
import school from "../assets/school.avif";
import staffroom from "../assets/staffroom.avif";
import staffroom2 from "../assets/staffroom2.avif";
import staffroom3 from "../assets/staffroom3.avif";
import staffroom4 from "../assets/staffroom4.avif";
import staffroom5 from "../assets/staffroom5.avif";
import staffroom6 from "../assets/staffroom6.avif";
import students from "../assets/students.avif";
import teachers from "../assets/teachers.avif";
import teachers2 from "../assets/teachers2.avif";
import teachers3 from "../assets/teachers3.avif";
import teachers4 from "../assets/teachers4.avif";
import teachers5 from "../assets/teachers5.avif";
import teachers6 from "../assets/teachers6.avif";
import teachers7 from "../assets/teachers7.avif";
import teachers8 from "../assets/teachers8.avif";

/**
 * Gallery items: each item has name, date (ISO string), category, image (src) and state.
 */
const ITEMS = [
  // Assembly
  { id: 1, name: "Morning Assembly", date: "2024-09-12", category: "Event", state: "hs", image: asembly },
  { id: 2, name: "School Assembly", date: "2024-09-15", category: "Event", state: "hs", image: asembly2 },
  
  // Campus & Building
  { id: 3, name: "School Building", date: "2024-01-10", category: "Campus", state: "hs", image: building },
  { id: 4, name: "Don Bosco Campus", date: "2024-01-12", category: "Campus", state: "hs", image: donbosco },
  { id: 5, name: "School Main Building", date: "2024-01-15", category: "Campus", state: "hs", image: school },
  { id: 6, name: "School Campus View", date: "2024-01-18", category: "Campus", state: "hs", image: schoolCopy },
  { id: 7, name: "School Logo", date: "2024-01-20", category: "Campus", state: "hs", image: logo },
  
  // Classes
  { id: 8, name: "Classroom", date: "2024-02-01", category: "Academics", state: "hs", image: classImg },
  { id: 9, name: "Classroom Session", date: "2024-02-05", category: "Academics", state: "hs", image: class2 },
  { id: 10, name: "Library Classroom", date: "2024-02-08", category: "Academics", state: "hs", image: class3 },
  { id: 11, name: "Modern Classroom", date: "2024-02-12", category: "Academics", state: "hs", image: class4 },
  { id: 12, name: "Classroom Activity", date: "2024-02-15", category: "Academics", state: "hs", image: class5 },
  { id: 13, name: "Study Hall", date: "2024-02-18", category: "Academics", state: "hs", image: class6 },
  { id: 14, name: "Classroom Learning", date: "2024-02-22", category: "Academics", state: "hs", image: class7 },
  { id: 15, name: "Interactive Classroom", date: "2024-02-25", category: "Academics", state: "hs", image: class8 },
  { id: 16, name: "Classroom Discussion", date: "2024-03-01", category: "Academics", state: "hs", image: class9 },
  { id: 17, name: "Classroom Setup", date: "2024-03-05", category: "Academics", state: "hs", image: class10 },
  { id: 18, name: "Classroom Environment", date: "2024-03-08", category: "Academics", state: "hs", image: class11 },
  
  // Computer Labs
  { id: 19, name: "Computer Lab", date: "2024-03-10", category: "Academics", state: "hs", image: computer },
  { id: 20, name: "Computer Lab Session", date: "2024-03-12", category: "Academics", state: "hs", image: computer2 },
  { id: 21, name: "IT Lab", date: "2024-03-15", category: "Academics", state: "hs", image: computer3 },
  { id: 22, name: "Computer Training", date: "2024-03-18", category: "Academics", state: "hs", image: computer4 },
  
  // Corridors
  { id: 23, name: "School Corridor", date: "2024-03-20", category: "Campus", state: "hs", image: corridor },
  { id: 24, name: "Main Corridor", date: "2024-03-22", category: "Campus", state: "hs", image: corridor2 },
  
  // Staff & Administration
  { id: 25, name: "Principal Office", date: "2024-03-25", category: "Administration", state: "hs", image: fatherOffice },
  { id: 26, name: "Staff Meeting", date: "2024-03-28", category: "Administration", state: "hs", image: father },
  { id: 27, name: "Administration", date: "2024-04-01", category: "Administration", state: "hs", image: father2 },
  { id: 28, name: "Staff Conference", date: "2024-04-05", category: "Administration", state: "hs", image: father3 },
  { id: 29, name: "Management Team", date: "2024-04-08", category: "Administration", state: "hs", image: father4 },
  { id: 30, name: "Leadership Meeting", date: "2024-04-12", category: "Administration", state: "hs", image: father5 },
  { id: 31, name: "Principal", date: "2024-04-15", category: "Administration", state: "hs", image: principals1 },
  { id: 32, name: "School Principal", date: "2024-04-18", category: "Administration", state: "hs", image: principals2 },
  
  // Gardens
  { id: 33, name: "School Garden", date: "2024-04-20", category: "Campus", state: "hs", image: garden },
  { id: 34, name: "Campus Garden", date: "2024-04-22", category: "Campus", state: "hs", image: garden2 },
  
  // Grounds & Sports
  { id: 35, name: "Sports Ground", date: "2024-04-25", category: "Sports", state: "hs", image: ground },
  { id: 36, name: "Playground", date: "2024-04-28", category: "Sports", state: "hs", image: ground2 },
  { id: 37, name: "Athletic Field", date: "2024-05-01", category: "Sports", state: "hs", image: ground3 },
  { id: 38, name: "Sports Facility", date: "2024-05-05", category: "Sports", state: "hs", image: ground4 },
  { id: 39, name: "Recreation Ground", date: "2024-05-08", category: "Sports", state: "hs", image: ground5 },
  
  // Halls
  { id: 40, name: "Assembly Hall", date: "2024-05-10", category: "Campus", state: "hs", image: hall },
  { id: 41, name: "Main Hall", date: "2024-05-12", category: "Campus", state: "hs", image: hall2 },
  { id: 42, name: "Event Hall", date: "2024-05-15", category: "Event", state: "hs", image: hall3 },
  { id: 43, name: "Conference Hall", date: "2024-05-18", category: "Event", state: "hs", image: hall4 },
  { id: 44, name: "Auditorium", date: "2024-05-22", category: "Campus", state: "hs", image: hall5 },
  { id: 45, name: "Hall Interior", date: "2024-05-25", category: "Campus", state: "hs", image: hall6 },
  { id: 46, name: "Main Auditorium", date: "2024-05-28", category: "Campus", state: "hs", image: hall7 },
  
  // Labs
  { id: 47, name: "Science Lab", date: "2024-06-01", category: "Academics", state: "hs", image: lab },
  { id: 48, name: "Chemistry Lab", date: "2024-06-05", category: "Academics", state: "hs", image: lab2 },
  { id: 49, name: "Physics Lab", date: "2024-06-08", category: "Academics", state: "hs", image: lab3 },
  { id: 50, name: "Biology Lab", date: "2024-06-12", category: "Academics", state: "hs", image: lab4 },
  { id: 51, name: "Lab Session", date: "2024-06-15", category: "Academics", state: "hs", image: lab5 },
  { id: 52, name: "Science Experiment", date: "2024-06-18", category: "Academics", state: "hs", image: lab6 },
  { id: 53, name: "Lab Equipment", date: "2024-06-22", category: "Academics", state: "hs", image: lab7 },
  { id: 54, name: "Research Lab", date: "2024-06-25", category: "Academics", state: "hs", image: lab8 },
  { id: 55, name: "Laboratory", date: "2024-06-28", category: "Academics", state: "hs", image: lab9 },
  { id: 56, name: "Lab Activity", date: "2024-07-01", category: "Academics", state: "hs", image: lab10 },
  { id: 57, name: "Science Facility", date: "2024-07-05", category: "Academics", state: "hs", image: lab11 },
  { id: 58, name: "Lab Work", date: "2024-07-08", category: "Academics", state: "hs", image: lab12 },
  { id: 59, name: "Practical Session", date: "2024-07-12", category: "Academics", state: "hs", image: lab13 },
  { id: 60, name: "Lab Demonstration", date: "2024-07-15", category: "Academics", state: "hs", image: lab14 },
  { id: 61, name: "Science Lab Setup", date: "2024-07-18", category: "Academics", state: "hs", image: lab15 },
  { id: 62, name: "Lab Environment", date: "2024-07-22", category: "Academics", state: "hs", image: lab16 },
  { id: 63, name: "Modern Lab", date: "2024-07-25", category: "Academics", state: "hs", image: lab17 },
  { id: 64, name: "Lab Facility", date: "2024-07-28", category: "Academics", state: "hs", image: lab18 },
  { id: 65, name: "Lab Session 2", date: "2024-08-01", category: "Academics", state: "hs", image: lab19 },
  { id: 66, name: "Lab Activity 2", date: "2024-08-05", category: "Academics", state: "hs", image: lab20 },
  { id: 67, name: "Lab Work 2", date: "2024-08-08", category: "Academics", state: "hs", image: lab21 },
  { id: 68, name: "Lab Equipment 2", date: "2024-08-12", category: "Academics", state: "hs", image: lab22 },
  { id: 69, name: "Lab Setup 2", date: "2024-08-15", category: "Academics", state: "hs", image: lab23 },
  
  // Offices
  { id: 70, name: "Administrative Office", date: "2024-08-18", category: "Administration", state: "hs", image: office },
  { id: 71, name: "Office Space", date: "2024-08-22", category: "Administration", state: "hs", image: office2 },
  { id: 72, name: "Office Interior", date: "2024-08-25", category: "Administration", state: "hs", image: office3 },
  { id: 73, name: "Office Setup", date: "2024-08-28", category: "Administration", state: "hs", image: office4 },
  { id: 74, name: "Office Environment", date: "2024-09-01", category: "Administration", state: "hs", image: office5 },
  
  // Parks
  { id: 75, name: "Campus Park", date: "2024-09-05", category: "Campus", state: "hs", image: park },
  { id: 76, name: "School Park", date: "2024-09-08", category: "Campus", state: "hs", image: park2 },
  { id: 77, name: "Park Area", date: "2024-09-12", category: "Campus", state: "hs", image: park3 },
  { id: 78, name: "Recreation Park", date: "2024-09-15", category: "Campus", state: "hs", image: park4 },
  
  // Staffrooms
  { id: 79, name: "Staff Room", date: "2024-09-18", category: "Administration", state: "hs", image: staffroom },
  { id: 80, name: "Teachers Lounge", date: "2024-09-22", category: "Administration", state: "hs", image: staffroom2 },
  { id: 81, name: "Staff Area", date: "2024-09-25", category: "Administration", state: "hs", image: staffroom3 },
  { id: 82, name: "Staff Room 2", date: "2024-09-28", category: "Administration", state: "hs", image: staffroom4 },
  { id: 83, name: "Teachers Room", date: "2024-10-01", category: "Administration", state: "hs", image: staffroom5 },
  { id: 84, name: "Staff Facility", date: "2024-10-05", category: "Administration", state: "hs", image: staffroom6 },
  
  // Students
  { id: 85, name: "Students", date: "2024-10-08", category: "Event", state: "hs", image: students },
  { id: 86, name: "Student", date: "2024-10-12", category: "Event", state: "hs", image: boy },
  { id: 87, name: "HSLC Toppers", date: "2024-10-15", category: "Achievement", state: "hs", image: hslcToppers },
  
  // Teachers
  { id: 88, name: "Teaching Staff", date: "2024-10-18", category: "Administration", state: "hs", image: teachers },
  { id: 89, name: "Faculty Members", date: "2024-10-22", category: "Administration", state: "hs", image: teachers2 },
  { id: 90, name: "Teachers", date: "2024-10-25", category: "Administration", state: "hs", image: teachers3 },
  { id: 91, name: "Teaching Team", date: "2024-10-28", category: "Administration", state: "hs", image: teachers4 },
  { id: 92, name: "Faculty", date: "2024-11-01", category: "Administration", state: "hs", image: teachers5 },
  { id: 93, name: "Teachers Group", date: "2024-11-05", category: "Administration", state: "hs", image: teachers6 },
  { id: 94, name: "Staff Members", date: "2024-11-08", category: "Administration", state: "hs", image: teachers7 },
  { id: 95, name: "Teaching Faculty", date: "2024-11-12", category: "Administration", state: "hs", image: teachers8 },
  
  // Others
  { id: 96, name: "Mary's Statue", date: "2024-11-15", category: "Campus", state: "hs", image: mary },
  { id: 97, name: "Campus Statue", date: "2024-11-18", category: "Campus", state: "hs", image: mary2 },
  { id: 98, name: "Developer", date: "2024-11-22", category: "Event", state: "hs", image: developer },
];

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
};

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null); // index into ITEMS

  const openAt = (index) => setSelectedIndex(index);
  const close = () => setSelectedIndex(null);

  const prev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((i) => (i === 0 ? ITEMS.length - 1 : i - 1));
  };
  const next = (e) => {
    e?.stopPropagation();
    setSelectedIndex((i) => (i === ITEMS.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-20">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">School Gallery</h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Moments from classrooms, events, sports, and campus life. Click any image to view details.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ITEMS.map((item, index) => (
              <figure
                key={item.id}
                onClick={() => openAt(index)}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-gray-100"
                title={`${item.name} — ${item.category}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover transform group-hover:scale-110 transition duration-300"
                  loading="lazy"
                />

                {/* overlay */}
                <figcaption className="absolute left-0 bottom-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold leading-tight">{item.name}</div>
                      <div className="text-xs text-gray-200/90">{item.category} • {formatDate(item.date)}</div>
                    </div>

                    <div className="ml-3 text-xs uppercase bg-white/10 px-2 py-1 rounded-md">{item.state}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed z-100 inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full mx-auto rounded-lg overflow-hidden bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            {/* IMAGE */}
            <div className="relative h-[70vh] overflow-hidden bg-black">
              <img
                src={ITEMS[selectedIndex].image}
                alt={ITEMS[selectedIndex].name}
                className="w-full h-full object-contain bg-black"
                style={{ display: "block", margin: "0 auto" }}
              />

              {/* Prev / Next buttons */}
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              >
                ›
              </button>

              {/* Close */}
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-3 top-3 min-w-10 rounded-full bg-white/70 p-2 shadow hover:bg-white"
              >
                ✕
              </button>
            </div>

            {/* METADATA */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{ITEMS[selectedIndex].name}</h3>

              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-medium text-gray-800">Date:</span>{" "}
                  {formatDate(ITEMS[selectedIndex].date)}
                </div>
                <div>
                  <span className="font-medium text-gray-800">Category:</span>{" "}
                  {ITEMS[selectedIndex].category}
                </div>
                <div>
                  <span className="font-medium text-gray-800">State:</span>{" "}
                  {ITEMS[selectedIndex].state}
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                {/* optional description area — replace or remove if you don't need text */}
                {ITEMS[selectedIndex].description || "No description"}
              </p>

              {/* small thumbnails row */}
              <div className="mt-6 flex items-center gap-3 overflow-x-auto">
                {ITEMS.map((it, i) => (
                  <button
                    key={it.id}
                    onClick={() => setSelectedIndex(i)}
                    className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border ${i === selectedIndex ? "border-green-600 ring-2 ring-green-200" : "border-gray-200"}`}
                    title={it.name}
                  >
                    <img src={it.image} alt={it.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
