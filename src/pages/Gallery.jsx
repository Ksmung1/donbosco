import React, { useMemo, useEffect, useState } from "react";
import gallery from "../data/gallery";

/**
 * Gallery items: each item has name, date (ISO string), category, image (src) and state.
 */
const ITEMS = gallery.map((g, idx) => ({
  id: idx + 1,
  name:
    g.file?.replace(/\.(avif|png|jpg|jpeg|webp|gif)$/i, "") ||
    `Image ${idx + 1}`,
  date: "2024-01-01",
  category: "Gallery",
  state: "hs",
  image: g.src,
}));

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
  const [currentHeroImage, setCurrentHeroImage] = useState(null);

  // Get random image every 5 seconds
  useEffect(() => {
    // Set initial random image
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * ITEMS.length);
      setCurrentHeroImage(ITEMS[randomIndex]);
    };

    getRandomImage();

    // Change image every 5 seconds
    const interval = setInterval(getRandomImage, 5000);

    return () => clearInterval(interval);
  }, []);

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
      {/* Hero Section with Random Image */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          {currentHeroImage ? (
            <img
              key={currentHeroImage.id}
              src={currentHeroImage.image}
              alt={currentHeroImage.name}
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
          ) : (
            <div className="w-full h-full bg-blue-200 flex items-center justify-center">
              <div className="text-blue-600 text-xl">Loading...</div>
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 flex items-center z-10">
            <div className="w-full ">
              <div className="flex max-w-7xl px-4 md:px-6 lg:px-8 mx-auto flex-col justify-center items-start text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-3">
                  School Gallery
                </h1>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
                  Moments from classrooms, events, sports, and campus life.
                  Click any image to view details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto py-20 px-4 md:px-6 lg:px-8">
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
              <figcaption className="absolute left-0 bottom-0 right-0 p-3 bg-linear-to-t from-black/60 to-transparent text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold leading-tight">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-200/90">
                      {item.category} • {formatDate(item.date)}
                    </div>
                  </div>

                  <div className="ml-3 text-xs uppercase bg-white/10 px-2 py-1 rounded-md">
                    {item.state}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed z-50 inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
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
              <h3 className="text-xl font-semibold">
                {ITEMS[selectedIndex].name}
              </h3>

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
                    className={`shrink-0 w-20 h-14 rounded-md overflow-hidden border ${
                      i === selectedIndex
                        ? "border-green-600 ring-2 ring-green-200"
                        : "border-gray-200"
                    }`}
                    title={it.name}
                  >
                    <img
                      src={it.image}
                      alt={it.name}
                      className="w-full h-full object-cover"
                    />
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
