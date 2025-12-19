import { useOutletContext } from "react-router-dom";
import gallery from "../data/gallery";
import {
  Award,
  Trophy,
  GraduationCap,
  Users,
  Building,
  Calendar,
} from "lucide-react";

const Milestones = () => {
  const { state } = useOutletContext();
  const school = gallery.find((item) =>
    item.file?.toLowerCase().includes("school")
  );
  const schoolPictures = gallery.filter((item) =>
    item.file?.toLowerCase().includes("school")
  );

  const milestones = [
    {
      year: "1998",
      title: "School Foundation",
      description:
        "Don Bosco Higher Secondary School was established, marking the beginning of our educational journey in Churachandpur.",
      icon: <Building className="w-6 h-6" />,
      achievements: ["School established", "First batch of students enrolled"],
    },
    {
      year: "2003",
      title: "Recognition & Accreditation",
      description:
        "The school received official recognition and accreditation, establishing our commitment to quality education.",
      icon: <Award className="w-6 h-6" />,
      achievements: ["Official recognition", "Accreditation received"],
    },
    {
      year: "2008",
      title: "Infrastructure Expansion",
      description:
        "Major expansion project completed, adding new classrooms, laboratories, and modern facilities to accommodate growing student population.",
      icon: <Building className="w-6 h-6" />,
      achievements: ["New buildings constructed", "Modern labs installed"],
    },
    {
      year: "2012",
      title: "Academic Excellence Award",
      description:
        "Received recognition for outstanding academic performance and student achievements in board examinations.",
      icon: <Trophy className="w-6 h-6" />,
      achievements: ["Top results in board exams", "Excellence award received"],
    },
    {
      year: "2016",
      title: "Technology Integration",
      description:
        "Launched comprehensive digital learning initiative with computer labs, smart classrooms, and online learning platforms.",
      icon: <GraduationCap className="w-6 h-6" />,
      achievements: ["Smart classrooms", "Digital learning platform"],
    },
    {
      year: "2019",
      title: "1000+ Students Milestone",
      description:
        "Reached a significant milestone with over 1000 students enrolled, reflecting the trust and confidence of the community.",
      icon: <Users className="w-6 h-6" />,
      achievements: ["1000+ students", "Community trust achieved"],
    },
    {
      year: "2022",
      title: "25 Years of Excellence",
      description:
        "Celebrated 25 years of educational excellence, serving generations of students and contributing to the community.",
      icon: <Calendar className="w-6 h-6" />,
      achievements: ["Silver jubilee celebration", "25 years milestone"],
    },
    {
      year: "2024",
      title: "Modern Facilities Upgrade",
      description:
        "Completed major renovation and upgrade of facilities, including new sports complex, library expansion, and enhanced learning spaces.",
      icon: <Building className="w-6 h-6" />,
      achievements: [
        "Sports complex",
        "Library expansion",
        "Enhanced facilities",
      ],
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
              Our <span className="text-blue-200">Milestones</span>
            </h1>
            <div className="w-24 h-1 bg-blue-200 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Celebrating achievements, growth, and excellence over the years
            </p>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Journey Through <span className="text-blue-800">Time</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key moments that have shaped our institution
            </p>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-16 md:mb-20 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Content Card */}
                  <div
                    className={`${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    } ${index % 2 === 1 ? "md:text-right" : ""}`}
                  >
                    <div
                      className={`bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-blue-100 hover:border-blue-300 transition-colors ${
                        index % 2 === 1 ? "md:ml-auto" : ""
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          index % 2 === 1 ? "md:justify-end" : ""
                        }`}
                      >
                        <div className="bg-blue-800 text-white p-3 rounded-lg">
                          {milestone.icon}
                        </div>
                        <div>
                          <span className="text-2xl font-bold text-blue-800">
                            {milestone.year}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                        {milestone.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 ${
                          index % 2 === 1 ? "md:justify-end" : ""
                        }`}
                      >
                        {milestone.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    } relative`}
                  >
                    {schoolPictures[index % schoolPictures.length]?.src ? (
                      <div className="relative rounded-xl overflow-hidden shadow-xl">
                        <img
                          src={
                            schoolPictures[index % schoolPictures.length].src
                          }
                          alt={`${milestone.title} - ${milestone.year}`}
                          className="w-full h-[300px] md:h-[400px] object-cover"
                        />
                        {/* Decorative element */}
                        <div
                          className={`absolute ${
                            index % 2 === 0
                              ? "-right-4 -top-4"
                              : "-left-4 -top-4"
                          } w-24 h-24 bg-blue-800/20 rounded-full blur-2xl`}
                        ></div>
                      </div>
                    ) : (
                      <div className="w-full h-[300px] md:h-[400px] bg-gray-300 rounded-xl flex items-center justify-center">
                        <span className="text-gray-500">Milestone Image</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-8 h-8 bg-blue-800 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Summary */}
      <section className="py-16 md:py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our <span className="text-blue-200">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-blue-200 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-100">Students Served</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Qualified Teachers</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-100">Awards & Recognition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-200 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Looking Forward
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              As we celebrate our past achievements, we remain committed to
              continuous improvement and innovation. Our vision for the future
              includes expanding our facilities, enhancing our curriculum, and
              strengthening our community partnerships. We are dedicated to
              providing the best possible education for generations to come,
              always guided by the Salesian values of reason, religion, and
              kindness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Milestones;
