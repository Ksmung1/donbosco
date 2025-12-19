import { useOutletContext } from "react-router-dom";
import gallery from "../data/gallery";
import {
  Calendar,
  Award,
  Users,
  BookOpen,
  Heart,
  Building,
} from "lucide-react";

const Founder = () => {
  const { state } = useOutletContext();
  const school = gallery.find((item) =>
    item.file?.toLowerCase().includes("school")
  );
  const schoolPictures = gallery.filter((item) =>
    item.file?.toLowerCase().includes("school")
  );
  const founderImg = gallery.find(
    (item) =>
      item.file?.toLowerCase().includes("father") ||
      item.file?.toLowerCase().includes("founder")
  );

  // Get images for scattered display
  const historyImages = schoolPictures.slice(0, 6);

  const historyTimeline = [
    {
      year: "1998",
      title: "Foundation",
      description:
        "Don Bosco Higher Secondary School was established with a vision to provide quality education to the children of Churachandpur and surrounding areas. The school began with humble beginnings, starting with just a few classrooms and a dedicated team of educators committed to the Salesian mission.",
      image: historyImages[0]?.src,
      position: "left",
    },
    {
      year: "2000-2005",
      title: "Early Growth",
      description:
        "The school experienced significant growth in its early years, expanding its infrastructure and student enrollment. New facilities were added, including science laboratories and a library. The school established itself as a premier educational institution in the region, focusing on holistic development.",
      image: historyImages[1]?.src,
      position: "right",
    },
    {
      year: "2005-2010",
      title: "Recognition & Excellence",
      description:
        "The school gained recognition for academic excellence and student achievements. Various extracurricular programs were introduced, including sports, arts, and community service initiatives. The institution became known for its commitment to character formation alongside academic rigor.",
      image: historyImages[2]?.src,
      position: "left",
    },
    {
      year: "2010-2015",
      title: "Modernization",
      description:
        "Major infrastructure upgrades were undertaken, including the construction of modern classrooms, computer labs, and improved sports facilities. The school embraced technology in education while maintaining its core values. Student enrollment continued to grow, reflecting the trust of the community.",
      image: historyImages[3]?.src,
      position: "right",
    },
    {
      year: "2015-2020",
      title: "Expansion & Innovation",
      description:
        "The school expanded its curriculum offerings and introduced innovative teaching methodologies. New programs in career guidance, leadership development, and community outreach were launched. The institution strengthened its ties with the local community and alumni network.",
      image: historyImages[4]?.src,
      position: "left",
    },
    {
      year: "2020-Present",
      title: "Excellence & Future",
      description:
        "Today, Don Bosco Higher Secondary School stands as a beacon of educational excellence, serving over 1000 students with a dedicated team of 50+ qualified teachers. The school continues to evolve, adapting to modern educational needs while preserving the timeless values of the Salesian tradition.",
      image: historyImages[5]?.src,
      position: "right",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        {school?.src ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${school.src})` }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/30"></div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Founder & <span className="text-blue-200">History</span>
            </h1>
            <div className="w-24 h-1 bg-blue-200 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              The Legacy of Don Bosco Higher Secondary School
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-blue-800">Founder</span>
            </h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Founder Image */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {founderImg?.src ? (
                  <img
                    src={founderImg.src}
                    alt="Founder"
                    className="w-full aspect-[3/4] object-cover"
                  />
                ) : (
                  <div className="w-full h-[500px] md:h-[600px] bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Founder Image</span>
                  </div>
                )}
              </div>
            </div>

            {/* Founder Description */}
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                St. John Bosco
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Don Bosco Higher Secondary School draws its inspiration and
                educational philosophy from St. John Bosco (1815-1888), the
                founder of the Salesian Society. St. John Bosco, also known as
                Don Bosco, was an Italian Catholic priest, educator, and writer
                who dedicated his life to the education and welfare of young
                people, especially those from disadvantaged backgrounds.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                His educational approach, known as the Preventive System, is
                based on three pillars: Reason, Religion, and Kindness. This
                system emphasizes understanding, love, and prevention rather
                than punishment, creating an environment where students feel
                valued, respected, and motivated to learn and grow.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                The Salesian mission, carried forward by the Salesians of Don
                Bosco, continues to guide our school in nurturing young minds,
                fostering character development, and preparing students to
                become responsible citizens and compassionate leaders in
                society.
              </p>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-blue-800">
                  <Heart className="w-5 h-5" />
                  <p className="font-semibold text-gray-900">
                    "Education is a matter of the heart"
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-2">— St. John Bosco</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School History Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-blue-800">History</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A journey of growth, excellence, and commitment to education
            </p>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {historyTimeline.map((event, index) => (
              <div key={index} className="relative mb-16 md:mb-24">
                <div
                  className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    event.position === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      event.position === "right" ? "md:order-2" : "md:order-1"
                    } ${event.position === "right" ? "md:text-right" : ""}`}
                  >
                    <div
                      className={`bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 ${
                        event.position === "right" ? "md:ml-auto" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-800 text-white p-2 rounded-lg">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-bold text-blue-800">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                        {event.title}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed text-gray-700">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`${
                      event.position === "right" ? "md:order-1" : "md:order-2"
                    } relative`}
                  >
                    {event.image ? (
                      <div className="relative rounded-xl overflow-hidden shadow-xl">
                        <img
                          src={event.image}
                          alt={`${event.title} - ${event.year}`}
                          className="w-full h-[300px] md:h-[400px] object-cover"
                        />
                        {/* Decorative element */}
                        <div
                          className={`absolute ${
                            event.position === "right"
                              ? "-left-4 -top-4"
                              : "-right-4 -top-4"
                          } w-24 h-24 bg-blue-800/20 rounded-full blur-2xl`}
                        ></div>
                      </div>
                    ) : (
                      <div className="w-full h-[300px] md:h-[400px] bg-gray-300 rounded-xl flex items-center justify-center">
                        <span className="text-gray-500">Historical Image</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-6 h-6 bg-blue-800 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Founder;
