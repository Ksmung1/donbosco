import React from "react";
import gallery from "../data/gallery";

const imageByFile = (file) => gallery.find((g) => g.file === file)?.src;


const webState = {
          state: "Don Bosco Facilities",
          from: "Classes I - XII",
          about:
            "School is equipped with modern facilities to support the academic and extracurricular activities of the students.",
          description2:
            "Our community values are rooted in respect, service, and the pursuit of knowledge. We blend strong academics with character formation and extracurricular opportunity.",
        };

const facilityGroups = [
  {
    title: "Physics Labs",
    description: "Dedicated physics labs with modern apparatus for experimentation and demonstrations.",
    images: ["lab18.avif", "lab19.avif", "lab20.avif", "lab21.avif", "lab22.avif", "lab23.avif"],
    accent: "from-amber-100/80 to-amber-50",
  },
  {
    title: "Chemistry Labs",
    description: "Safe, well-ventilated chemistry labs designed for hands-on practicals.",
    images: ["lab2.avif", "lab3.avif", "lab4.avif", "lab10.avif", "lab11.avif"],
    accent: "from-orange-100/80 to-orange-50",
  },
  {
    title: "Biology Labs",
    description: "Spaces equipped for life science studies, specimen work, and observation.",
    images: ["lab12.avif", "lab13.avif", "lab14.avif", "lab15.avif"],
    accent: "from-green-100/80 to-green-50",
  },
  {
    title: "Computer Labs",
    description: "Digital literacy and coding labs with updated systems and high-speed access.",
    images: ["computer.avif", "computer2.avif", "computer3.avif", "computer4.avif"],
    accent: "from-sky-100/80 to-sky-50",
  },
  {
    title: "Library & Reading Room",
    description: "Bright classrooms with smart boards and ample seating for collaborative learning.",
    images: ["class.avif", "class8.avif", "class9.avif", "class10.avif", "class11.avif"],
    accent: "from-indigo-100/80 to-indigo-50",
  },
  {
    title: "Sports & Courts",
    description: "Basketball, football, and open courts for daily games, drills, and tournaments.",
    images: ["ground.avif", "ground2.avif", "ground3.avif", "ground4.avif", "ground5.avif", "park.avif"],
    accent: "from-emerald-100/80 to-emerald-50",
  },
  {
    title: "Auditorium",
    description: "Auditoria and halls for assemblies, performances, debates, and cultural programs.",
    images: ["asembly.avif", "asembly2.avif"],
    accent: "from-purple-100/80 to-purple-50",
  },
  {
    title: "Staff & Support",
    description: "Staff rooms and admin spaces that keep the campus running smoothly.",
    images: ["staffroom.avif", "staffroom2.avif", "staffroom3.avif", "staffroom4.avif", "staffroom5.avif", "staffroom6.avif", "fatherOffice.avif"],
    accent: "from-slate-100/80 to-slate-50",
  },

];

export default function Facilities() {
  return (
    <main className="text-gray-900 bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="inline-flex items-center rounded-full bg-(--primary-soft,rgba(5,150,105,0.08)) px-3 py-1 text-xs font-semibold uppercase tracking-wider text-(--primary,#059669)">
                  Facilities
                </p>
                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {webState.state}
                </h1>
                <p className="mt-4 text-gray-600 max-w-xl">{webState.about}</p>
              </div>

            </div>
      </section>

        <div className="space-y-12">
          {facilityGroups.map((group) => {
            const resolvedImages = group.images.map(imageByFile).filter(Boolean);
            return (
              <section key={group.title} className="bg-white shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold">{group.title}</h2>
                  </div>
                  <div className="">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 ">
                      {resolvedImages.map((src, idx) => (
                        <div key={idx} className="relative overflow-hidden rounded-xl bg-gray-100 aspect-video shadow-sm">
                          <img src={src} alt={`${group.title} ${idx + 1}`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                        </div>
                      ))}
                      {resolvedImages.length === 0 && (
                        <div className="col-span-2 md:col-span-3 p-6 text-center text-sm text-gray-500">
                          Images coming soon.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}