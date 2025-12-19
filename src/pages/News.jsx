import React from "react";
import { useNavigate } from "react-router-dom";
import { Newspaper, Calendar, Clock, ArrowRight } from "lucide-react";
import informations from "../data/informations";
import gallery from "../data/gallery";

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

const News = () => {
  const navigate = useNavigate();

  // Get hero background image from gallery
  const heroImage =
    getImageFromGallery("ground.avif") ||
    getImageFromGallery("ground") ||
    gallery.find((item) => item.file?.toLowerCase().includes("school"))?.src ||
    gallery.find((item) => item.file?.toLowerCase().includes("building"))
      ?.src ||
    gallery[0]?.src ||
    null;

  return (
    <div className="min-h-screen bg-gray-50">
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
                Latest <span className="text-blue-200">News</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-xl">
                Stay updated with the latest news, announcements, and events
                from Don Bosco School
              </p>
              <div className="w-24 h-1 bg-blue-200 mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* News List Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {informations.length === 0 ? (
            <div className="text-center py-12">
              <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No News Available
              </h3>
              <p className="text-gray-600">
                Check back later for the latest updates.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {informations.map((info) => (
                <article
                  key={info.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => navigate(`/news/${info.id}`)}
                >
                  {/* Image */}
                  {info.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={info.image}
                        alt={info.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x300?text=News+Image";
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-800/80 backdrop-blur-sm rounded-full">
                          <Newspaper className="w-3 h-3 text-white" />
                          <span className="text-xs font-semibold text-white uppercase">
                            News
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(info.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{info.time}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {info.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {info.content}
                    </p>

                    <button className="flex items-center gap-2 text-blue-800 font-semibold text-sm hover:text-blue-600 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
