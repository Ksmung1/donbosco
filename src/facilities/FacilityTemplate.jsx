import React from "react";
import gallery from "../data/gallery";

const resolveImages = (prefixes = [], files = []) => {
  const loweredPrefixes = prefixes.map((p) => p.toLowerCase());
  const loweredFiles = files.map((f) => f.toLowerCase());

  return gallery
    .filter(({ file = "" }) => {
      const name = file.toLowerCase();
      if (loweredFiles.includes(name)) return true;
      return loweredPrefixes.some((prefix) => name.startsWith(prefix));
    })
    .map((g) => g.src);
};

const FacilityTemplate = ({
  title,
  badge = "Facilities",
  intro,
  highlights = [],
  equipment = [],
  equipmentTitle = "Key Equipment",
  galleryPrefixes = [],
  galleryFiles = [],
  galleryTitle,
  images: imagesProp = [],
}) => {
  const images = React.useMemo(() => {
    if (imagesProp && imagesProp.length > 0) return imagesProp;
    return resolveImages(galleryPrefixes, galleryFiles);
  }, [imagesProp, galleryPrefixes, galleryFiles]);
  const collage = images.slice(0, 4);
  const finalGalleryTitle = galleryTitle || `${title} Gallery`;

  return (
    <main className="text-gray-900 bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-4">
            <p className="inline-flex items-center rounded-full bg-(--primary-soft,rgba(5,150,105,0.08)) px-3 py-1 text-xs font-semibold uppercase tracking-wider text-(--primary,#059669)">
              {badge}
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h1>
            <p className="text-gray-700 leading-relaxed">{intro}</p>

            {collage.length > 0 && (
              <div className="pt-1 space-y-2 mb-10">
                <div className="flex flex-wrap gap-3">
                  {collage.map((src, idx) => {
                    const offsetClass =
                      idx === 1 ? "translate-y-3" : idx === 2 ? "-translate-y-2" : idx === 3 ? "translate-y-4" : "-translate-y-1";
                    return (
                      <div
                        key={idx}
                        className={`w-28 h-20 sm:w-32 sm:h-24 rounded-xl overflow-hidden bg-gray-100 shadow-sm transition transform hover:-translate-y-1 ${offsetClass}`}
                      >
                        <img src={src} alt={`${title} snapshot ${idx + 1}`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {highlights.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="h-8 w-8 rounded-full bg-(--primary-soft,rgba(5,150,105,0.08)) flex items-center justify-center text-(--primary,#059669) font-bold">
                      •
                    </div>
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {equipment.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">{equipmentTitle}</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {equipment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">{finalGalleryTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {images.map((src, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-xl bg-gray-100 shadow-sm aspect-video">
                <img src={src} alt={`${title} ${idx + 1}`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
            ))}
            {images.length === 0 && (
              <div className="col-span-1 md:col-span-3 p-6 text-center text-sm text-gray-500 bg-white rounded-xl border border-gray-100">
                Photos coming soon.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FacilityTemplate;
