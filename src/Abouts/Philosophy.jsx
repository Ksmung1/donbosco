import { useOutletContext } from "react-router-dom";
import gallery from "../data/gallery";
import { Heart, Shield, Award, Star } from "lucide-react";

const Philosophy = () => {
  const school = gallery.find((item) =>
    item.file?.toLowerCase().includes("school")
  );

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Faith",
      description:
        "We believe that faith in God is the beginning of true wisdom and the anchor of life. Human life would be meaningless without faith in oneself and others too. The school provides a platform to grow in faith, the bedrock of holistic growth.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We believe that honesty, sincerity and justice signify the core of a person's character. We adhere to the highest ethical standards in all the curricular, co-curricular and extra-curricular activities in order to nurture integrated persons for the future of our nation and world at large.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Dignity",
      description:
        "We believe that dignity of the human person is the foundation for empowerment and socio-economic transformation. We shall strive to uplift the dignity of the socially disadvantaged, marginalized and the underprivileged through genuine love and service.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We believe that hardwork, commitment and dedication produce excellence in all spheres of life. The management, faculty and administration set high benchmarks of academic and holistic excellence and provide innovative, student-centred, globally competent processes and services for the success of every student.",
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
              Educational <span className="text-blue-200">Philosophy</span>
            </h1>
            <div className="w-24 h-1 bg-blue-200 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              The Salesian Preventive System: Reason, Religion, and Kindness
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our Core <span className="text-blue-800">Values (FIDE)</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide our educational philosophy
              and daily practices
            </p>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-800 mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-12 bg-blue-800 rounded"></div>
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                To be a leading educational institution that shapes future
                leaders through excellence in education, character formation,
                and holistic development. We envision a school where every
                student discovers their unique gifts and uses them to serve
                society with joy and purpose.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 italic">
                "We envision a school where every student discovers their unique
                gifts, develops their full potential, and learns to serve others
                with joy. Through the Preventive System of Reason, Religion, and
                Kindness, we prepare students not just for academic success, but
                for a life of purpose, integrity, and service to humanity."
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-12 bg-blue-800 rounded"></div>
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                To provide quality education that empowers students to achieve
                their full potential academically, socially, and spiritually. We
                are committed to nurturing well-rounded individuals who are
                prepared to face the challenges of the modern world with
                confidence, integrity, and a sense of service to others.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Through our dedicated faculty, modern facilities, and
                comprehensive curriculum, we strive to create an atmosphere of
                learning, growth, and excellence. Every student is valued, and
                every achievement is celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
