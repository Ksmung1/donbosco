import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Newspaper } from "lucide-react";
import informations from "../data/informations";

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

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const info = informations.find((item) => item.id === parseInt(id));

  if (!info) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            News Not Found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="text-blue-800 hover:text-blue-600"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src={info.image}
          alt={info.title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x400?text=News+Image";
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>

        {/* Back Button */}
        <div className="absolute top-4 left-4 md:left-6 z-20">
          <button
            onClick={() => navigate("/news")}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-900 hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full pb-8">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-blue-800/80 backdrop-blur-sm rounded-full">
              <Newspaper className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                News & Updates
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2">
              {info.title}
            </h1>
            <div className="flex items-center gap-4 text-blue-100 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(info.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{info.time}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Content */}
            <article className="flex-1 prose prose-lg max-w-none">
              <div className="bg-white shadow-sm border border-gray-100">
                <div className="text-gray-700 leading-relaxed text-sm md:text-lg whitespace-pre-line">
                  {info.content}
                </div>
              </div>
            </article>

            {/* Image */}
            {info.image && (
              <div className="w-full md:w-auto md:shrink-0 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src={info.image}
                  alt={info.title}
                  className="w-full md:w-auto h-auto max-w-md object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x600?text=News+Image";
                  }}
                />
              </div>
            )}
          </div>

          {/* Back to News Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => navigate("/news")}
              className="flex items-center gap-2 px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to News</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetails;
