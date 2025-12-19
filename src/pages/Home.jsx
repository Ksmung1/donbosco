import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Slider from "../components/Slider";
import Notification from "../components/Notification";
import {
  Book,
  GraduationCap,
  Users,
  Award,
  Newspaper,
  Trophy,
  Calendar,
  Star,
  Target,
  Heart,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { staffsData } from "../data/staffsData";
import { toppersData } from "../data/toppersData";
import informations from "../data/informations";
import gallery from "../data/gallery";
import { createStateData } from "../data/homeData";
import { getIcon } from "../utils/iconMapper";

// Helper function to get image from gallery by filename
const getImageFromGallery = (filename) => {
  const image = gallery.find(
    (item) =>
      item.file?.toLowerCase() === filename.toLowerCase() ||
      item.file?.toLowerCase().includes(filename.toLowerCase())
  );
  return image?.src || null;
};

// Format date from YYYY-MM-DD to MMM DD, YYYY
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

// Blue theme constants
const PRIMARY_COLOR = "#2563eb";

function useImageLoaded(src) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!src) {
      setLoaded(true);
      return;
    }
    setLoaded(false);
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(true);
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);
  return loaded;
}

// State-specific data - created from data file
const stateData = createStateData(getImageFromGallery);

const Home = () => {
  const { state, setState, states } = useOutletContext();
  const [openDetailsId, setOpenDetailsId] = useState(null);
  const navigate = useNavigate();

  // Get state-specific data
  const currentData = stateData[state] || stateData.hs;

  // Filter staffs based on state
  const filteredStaffs = staffsData
    .filter((t) => {
      if (state === "jb") {
        return t.state === "pb" || t.state === "jb";
      }
      return t.state === state;
    })
    .slice(0, 6);

  // Filter toppers based on state
  const filteredToppers = toppersData
    .filter((t) => {
      const topperState = t.state?.toLowerCase();
      if (state === "jb") {
        return topperState === "pb" || topperState === "jb";
      }
      return topperState === state;
    })
    .sort((a, b) => {
      const yearA = Number(a.year) || 0;
      const yearB = Number(b.year) || 0;
      if (yearB !== yearA) return yearB - yearA;
      const percentA = Number(a.percent) || 0;
      const percentB = Number(b.percent) || 0;
      return percentB - percentA;
    })
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-700">
      {/* Slider */}
      <Slider state={state} setState={setState} states={states} />
      <Notification />

      {/* MESSSGE AND UPDATES SECTION */}
      <section className="flex flex-col md:flex-row pt-23 gap-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full md:w-2/3">
          <div className="mb-8 text-justify flex flex-col gap-4">
            <h2 className="text-2xl md:text-5xl text-left md:text-right font-extrabold">
              Welcome to <span className="text-blue-800">Don Bosco</span>
            </h2>
            <p className="text-black text-sm md:text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              veritatis nemo debitis dolorem, expedita laudantium
              exercitationem, veniam velit harum vitae eos nam dignissimos magni
              error minima officia odit quos architecto illum! Hic fugit maiores
              laboriosam nostrum! Iure necessitatibus accusantium sed obcaecati
              explicabo animi, voluptas, enim aliquid voluptate quod facilis, et
              hic repellendus a autem. Voluptatem, impedit vitae aperiam quidem
              possimus eius placeat praesentium nulla culpa molestias eaque
              aspernatur sed earum eum velit? Eum autem eaque non dolorum eos ex
              atque, error animi inventore sunt itaque et quia doloribus, ipsa
              molestiae commodi vel, adipisci omnis veniam officia sit
              recusandae qui nobis quam. Aperiam obcaecati vero aut eaque,
              neque, eligendi quam dignissimos modi nisi tempore illo voluptates
              omnis nostrum porro ducimus voluptatem soluta repellendus optio
              atque libero ea, voluptatum aliquam. Dolores, molestiae quam neque
              distinctio exercitationem laborum tempore rem accusantium
              voluptate sequi possimus hic reiciendis, similique quasi quod
              eaque adipisci magni aspernatur maiores! A, aliquam numquam odit
              quaerat accusamus, atque ab temporibus tempora rem repellendus
              dolore, praesentium delectus tenetur maxime facere placeat eos
              suscipit perferendis. Nulla placeat delectus minus?
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3  relative md:border border-gray-200 shadow-md rounded-md p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-2xl text-left font-extrabold">
              News and <span className="text-blue-700">Updates</span>
            </h2>
            {informations.length > 3 && (
              <button
                onClick={() => navigate("/news")}
                className="text-sm font-medium text-blue-800 hover:text-blue-600 hover:underline"
              >
                View All
              </button>
            )}
          </div>

          <div className="flex flex-col gap-2">
            {informations.slice(0, 3).map((info) => {
              const loaded = useImageLoaded(info.image);

              return (
                <article
                  key={info.id}
                  className="overflow-hidden border  shadow-md hover:shadow-lg bg-white transition-shadow duration-300 flex flex-row gap-5  p-2 px-4 rounded-md border-gray-300 shrink-0"
                  aria-labelledby={`info-${info.id}`}
                >
                  <div className="flex items-center">
                    <p className="p-4 rounded-full bg-blue-100">
                      <Newspaper />
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3
                      id={`info-${info.id}`}
                      className="font-semibold text-md"
                    >
                      {formatDate(info.date)} {info.time}
                    </h3>

                    <div className="text-sm text-gray-600">
                      {openDetailsId === info.id ? (
                        <>
                          <p>{info.content}</p>
                          <button
                            onClick={() => setOpenDetailsId(null)}
                            className="mt-2 text-sm underline text-blue-800"
                          >
                            Show less
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="line-clamp-2">{info.content}</p>
                          <button
                            onClick={() => navigate(`/news/${info.id}`)}
                            className="mt-2 text-sm font-medium text-blue-800"
                          >
                            Read more ...
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-5 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-5xl font-extrabold">
              What We <span className="text-blue-800">Offer</span>
            </h2>
            <p className="mt-2 text-xs md:text-md text-gray-600 max-w-2xl mx-auto">
              High-quality programs, a supportive community, and a focus on
              student success.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentData.features.map((ftr, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 p-4 md:p-6 bg-linear-to-b from-white to-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                role="article"
                aria-labelledby={`feature-${idx}`}
              >
                <div className="flex items-center justify-left gap-2">
                  <div className="text-blue-800">
                    {getIcon(ftr.iconName, "w-6 h-6")}
                  </div>
                  <h3
                    id={`feature-${idx}`}
                    className="text-md md:text-lg font-semibold"
                  >
                    {ftr.heading}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600 flex-1">
                  {ftr.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 md:w-10 md:h-10 text-blue-200" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold mb-1">
                {currentData.stats.students}
              </div>
              <div className="text-sm md:text-base text-blue-100">
                Active Students
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-blue-200" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold mb-1">
                {currentData.stats.staffs}
              </div>
              <div className="text-sm md:text-base text-blue-100">
                Expert Teachers
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Trophy className="w-8 h-8 md:w-10 md:h-10 text-blue-200" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold mb-1">
                {currentData.stats.years}
              </div>
              <div className="text-sm md:text-base text-blue-100">
                Years of Excellence
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-8 h-8 md:w-10 md:h-10 text-blue-200" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold mb-1">
                95%+
              </div>
              <div className="text-sm md:text-base text-blue-100">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose <span className="text-blue-800">Don Bosco</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for quality education
            </p>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Academic Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                Our rigorous curriculum and experienced faculty ensure students
                achieve their highest potential in academics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Holistic Development
              </h3>
              <p className="text-gray-600 text-sm">
                We focus on nurturing not just academic skills but also
                character, values, and life skills for complete growth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Modern Facilities
              </h3>
              <p className="text-gray-600 text-sm">
                State-of-the-art laboratories, libraries, and technology-enabled
                classrooms provide the best learning environment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Individual Attention
              </h3>
              <p className="text-gray-600 text-sm">
                Small class sizes and personalized guidance ensure every student
                receives the attention they need to succeed.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Extracurricular Activities
              </h3>
              <p className="text-gray-600 text-sm">
                Sports, arts, clubs, and events provide opportunities for
                students to explore their interests and talents.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Proven Track Record
              </h3>
              <p className="text-gray-600 text-sm">
                Years of outstanding results and successful alumni demonstrate
                our commitment to excellence in education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our community of learners and discover the Don Bosco
              difference. Admissions are now open for the upcoming academic
              year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admissions"
                className="px-8 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Apply for Admission
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors border-2 border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
