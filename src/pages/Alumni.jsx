import React, { useState } from "react";
import {
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import gallery from "../data/gallery";
import { alumniAchievements, benefits } from "../data/alumniData";
import { getIcon } from "../utils/iconMapper";

const Alumni = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    year: "",
    course: "",
    currentOccupation: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for registering! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      year: "",
      course: "",
      currentOccupation: "",
      message: "",
    });
  };

  // Get alumni-related images from gallery
  const getAlumniImages = () => {
    const alumniKeywords = ["class", "school", "hall", "graduation"];
    return gallery.filter((item) => {
      const fileName = item.file?.toLowerCase() || "";
      return alumniKeywords.some((keyword) => fileName.includes(keyword));
    });
  };

  const alumniImages = getAlumniImages();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/50 to-blue-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Alumni Association
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Don Bosco <span className="text-blue-200">Alumni</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Stay connected with your alma mater. Join our vibrant community of
              alumni and continue the journey of excellence together.
            </p>
          </div>
        </div>
      </section>

      {/* About Alumni Association */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Welcome to Our{" "}
                <span className="text-blue-800">Alumni Network</span>
              </h2>
              <div className="w-24 h-1 bg-blue-800 mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The Don Bosco Alumni Association is a vibrant community of
                former students who continue to stay connected with their alma
                mater. We believe in the power of our shared experiences and the
                impact we can make together.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our alumni network spans across various fields and industries,
                creating opportunities for networking, mentorship, and giving
                back to the institution that shaped us.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-800" />
                  <span>1000+ Active Members</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-800" />
                  <span>Regular Events</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-800" />
                  <span>Career Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {alumniImages[0] && (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={alumniImages[0].src}
                    alt="Alumni"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/600x400?text=Alumni";
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Benefits of <span className="text-blue-800">Joining</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the many advantages of being part of our alumni community
            </p>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-800">
                  {getIcon(benefit.iconName, "w-6 h-6")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Achievements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Alumni <span className="text-blue-800">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating the success stories of our distinguished alumni
            </p>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {alumniAchievements.map((alumni, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <GraduationCap className="w-8 h-8 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {alumni.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>Batch of {alumni.year}</span>
                      <span>•</span>
                      <span>{alumni.course}</span>
                    </div>
                    <p className="text-blue-800 font-semibold mb-2">
                      {alumni.achievement}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {alumni.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join/Register Section */}
      <section className="py-16 md:py-24 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Join Our <span className="text-blue-200">Alumni Network</span>
              </h2>
              <p className="text-blue-100 text-lg">
                Register today and become part of our growing community
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Graduation Year *
                  </label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="e.g., 2015"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Course/Stream *
                  </label>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="e.g., Science, Arts, Commerce"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Current Occupation
                  </label>
                  <input
                    type="text"
                    name="currentOccupation"
                    value={formData.currentOccupation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Your current job/position"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Tell us about yourself or how you'd like to contribute..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Get in <span className="text-blue-800">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you
            </p>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">+91 98765 43211</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">alumni@donbosco.edu</p>
              <p className="text-gray-600">info@donbosco.edu</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">Don Bosco School</p>
              <p className="text-gray-600">City, State - PIN Code</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
