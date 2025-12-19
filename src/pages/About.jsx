import { useOutletContext } from "react-router-dom";
import gallery from "../data/gallery";
import { useNavigate } from "react-router-dom";
import { moreAboutUs } from "../data/aboutData";

const About = () => {
  const { state } = useOutletContext();
  const school = gallery.find((item) =>
    item.file?.toLowerCase().includes("school")
  );
  const principal = gallery.find((item) =>
    item.file?.toLowerCase().includes("principal")
  );
  const navigate = useNavigate();

  // Get a nice background image from gallery
  const heroImage =
    school?.src ||
    gallery.find((item) => item.file?.toLowerCase().includes("building"))
      ?.src ||
    gallery.find((item) => item.file?.toLowerCase().includes("class"))?.src ||
    gallery[0]?.src ||
    null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {heroImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="relative h-[400px] md:h-[500px] flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                Learn More <span className="text-blue-200">About Us</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-xl">
                Explore the various aspects that make Don Bosco a distinguished
                educational institution
              </p>
              <div className="w-24 h-1 bg-blue-200 mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Sections */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {moreAboutUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 group"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => navigate(item.link)}
                    className="text-blue-800 font-semibold hover:text-blue-900 transition-colors flex items-center gap-2"
                  >
                    Learn More
                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
