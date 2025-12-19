import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Building2,
  Calendar,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import gallery from "../data/gallery";
import { createSchoolsData } from "../data/campusData";

const CampusDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Get campus-related images from gallery
  const getCampusImages = () => {
    const campusKeywords = ["campus", "school", "building", "hall", "class"];
    return gallery.filter((item) => {
      const fileName = item.file?.toLowerCase() || "";
      return campusKeywords.some((keyword) => fileName.includes(keyword));
    });
  };

  const campusImages = getCampusImages();

  // Schools and institutions data (same as Campus.jsx) - from data file
  const schools = createSchoolsData(campusImages);

  const campus = schools.find((s) => s.id === parseInt(id));

  if (!campus) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Campus Not Found
          </h2>
          <button
            onClick={() => navigate("/campus")}
            className="text-blue-800 hover:text-blue-600"
          >
            Return to Campus
          </button>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % (campus.images.length || 1));
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prev) =>
        (prev - 1 + (campus.images.length || 1)) % (campus.images.length || 1)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}

      {/* Hero Image */}
      <section className="relative h-150 overflow-hidden">
        <img
          src={campus.image}
          alt={campus.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x400?text=Campus+Image";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-4 md:left-20">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-3xl md:text-4xl text-white font-extrabold">
                  {campus.name}
                </h1>
                <p className="text-blue-100 mt-1">{campus.location}</p>
              </div>
            </div>
          </div>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-800 text-white">
            {campus.type}
          </span>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  About {campus.name}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {campus.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {campus.longDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {campus.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-800 shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Info Card */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Quick Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-800 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Location
                      </p>
                      <p className="text-sm text-gray-600">{campus.location}</p>
                      {campus.area && (
                        <p className="text-xs text-gray-500 mt-1">
                          Area: {campus.area}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-800 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Established
                      </p>
                      <p className="text-sm text-gray-600">
                        {campus.established}
                      </p>
                    </div>
                  </div>

                  {campus.contact && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        Contact
                      </p>
                      <p className="text-xs text-gray-600">
                        {campus.contact.phone}
                      </p>
                      <p className="text-xs text-gray-600">
                        {campus.contact.email}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {campus.contact.address}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        {/* Image Gallery */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {campus.images && campus.images.length > 0 && (
            <div className="w-full ">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {campus.images.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={img.src || img}
                      alt={`${campus.name} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x400?text=Image";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null &&
        campus.images &&
        campus.images.length > 0 && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              <img
                src={
                  campus.images[selectedImageIndex]?.src ||
                  campus.images[selectedImageIndex]
                }
                alt={`${campus.name} ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Image";
                }}
              />
            </div>
          </div>
        )}
    </div>
  );
};

export default CampusDetail;
