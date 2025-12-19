import { useOutletContext } from "react-router-dom";
import gallery from "../data/gallery";
import { Mail, Phone, Award, BookOpen, Heart, Users } from "lucide-react";

const Principal = () => {
  const { state } = useOutletContext();
  const principal = gallery.find((item) =>
    item.file?.toLowerCase().includes("father2")
  );
  const fatherImg = gallery.find((item) =>
    item.file?.toLowerCase().includes("father.jpg")
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        {principal?.src || fatherImg?.src ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${principal?.src || fatherImg?.src})`,
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/35 to-black/20"></div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Principal's <span className="text-blue-200">Message</span>
            </h1>
            <div className="w-24 h-1 bg-blue-200 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              A Message from Rev. Fr. Stephen Baite
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="py-5  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-">
            {/* Principal Image */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                {fatherImg?.src ? (
                  <img
                    src={fatherImg?.src}
                    alt="Rev. Fr. Stephen Baite"
                    className="w-full h-[300px] md:h-[500px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[500px] md:h-[600px] bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">
                      Principal Image
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Message Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <p className="text-base md:text-lg font-semibold text-gray-900 mb-4">
                  Dear Friends,
                </p>
                <blockquote className="text-lg md:text-xl leading-relaxed text-gray-800 italic border-l-4 border-blue-800 pl-6 mb-6">
                  "Education is not just the transfer of knowledge—it is an
                  invitation to grow in character, kindness, and purpose. At Don
                  Bosco, we walk with every child so they discover their gifts
                  and serve others with joy."
                </blockquote>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Our mission is to provide a nurturing environment where students
                can explore their potential, develop critical thinking skills,
                and build strong character. We believe in holistic education
                that prepares students not just for exams, but for life itself.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Through our dedicated faculty, modern facilities, and
                comprehensive curriculum, we strive to create an atmosphere of
                learning, growth, and excellence. Every student is valued, and
                every achievement is celebrated.
              </p>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                  Rev. Fr. Stephen Baite
                </p>
                <p className="text-base text-gray-600">
                  Principal, Don Bosco Higher Secondary School
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="p-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8 md:p-12 border border-blue-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                We welcome your questions, feedback, and engagement with our
                school community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 text-white p-3 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <p className="text-gray-600">sspprs001@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-800 text-white p-3 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <p className="text-gray-600">+91 8837368736</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Principal;
