import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Building2, Users, Calendar } from "lucide-react";
import gallery from "../data/gallery";
import { createSchoolsData } from "../data/campusData";

const Campus = () => {
  const navigate = useNavigate();

  // Get campus-related images from gallery
  const getCampusImages = () => {
    const campusKeywords = ["campus", "school", "building", "hall", "class"];
    return gallery.filter((item) => {
      const fileName = item.file?.toLowerCase() || "";
      return campusKeywords.some((keyword) => fileName.includes(keyword));
    });
  };

  const campusImages = getCampusImages();

  // Get father image from gallery
  const fatherImage = gallery.find((item) =>
    item.file?.toLowerCase().includes("father")
  )?.src;

  // Schools and institutions under the same Father/Administration - from data file
  const schools = createSchoolsData(campusImages);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] bg-blue-800 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        {fatherImage && (
          <div
            className="absolute inset-0  bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${fatherImage})` }}
          ></div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/20 to-transparent"></div>
        <div className="relative flex max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-left mt-14  max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              All Schools & Institutions under Father
            </h1>
            <p className="text-xs md:text-xl text-blue-100 max-w-3xl ">
              Discover all the educational institutions and facilities managed
              under the same administration, each committed to providing quality
              education and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Schools & Institutions Cards Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schools.map((school) => (
              <div
                key={school.id}
                onClick={() => navigate(`/campus/${school.id}`)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
              >
                {/* School Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/600x400?text=School+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-800 text-white">
                      {school.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                      <h2 className="text-xl font-bold text-gray-900">
                        {school.name}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* School Info */}
                <div className="p-6">
                  {/* Location & Area */}
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-blue-800 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">
                        {school.location}
                      </p>
                      {school.area && (
                        <p className="text-xs text-gray-500 mt-1">
                          Area: {school.area}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {school.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h3>
                    <ul className="space-y-2">
                      {school.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-800"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Established */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                    <Calendar className="w-4 h-4 text-blue-800" />
                    <span className="text-xs text-gray-600">
                      Established: <strong>{school.established}</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Our Educational <span className="text-blue-800">Network</span>
              </h2>
              <div className="w-24 h-1 bg-blue-800 mx-auto mb-4"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                All our schools and institutions are united under the same
                administration, sharing common values, high educational
                standards, and a commitment to nurturing young minds across
                different regions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Modern Infrastructure
                </h3>
                <p className="text-gray-600 text-sm">
                  State-of-the-art buildings with modern amenities and
                  technology-enabled classrooms.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Student-Centered
                </h3>
                <p className="text-gray-600 text-sm">
                  Facilities designed with student needs in mind, promoting
                  comfort and effective learning.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Strategic Locations
                </h3>
                <p className="text-gray-600 text-sm">
                  Campuses located in accessible areas, ensuring convenience for
                  students and parents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campus;
