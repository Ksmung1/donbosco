import { useState } from "react";
import { Send, Phone } from "lucide-react";
import axiosInstance from "../../api";
import { contactInfo } from "../data/contactData";
import { getIcon } from "../utils/iconMapper";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: "success"|"error", text: "..." }

  const isEmailValid = (email) => /^\S+@\S+\.\S+$/.test(email);
  const isPhoneValid = (phone) =>
    phone.trim() === "" || /^[0-9+\-\s()]{6,20}$/.test(phone);

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(null);

    // basic validation
    if (!formData.name.trim()) {
      setFeedback({ type: "error", text: "Please enter your full name." });
      return;
    }
    if (!formData.email.trim() || !isEmailValid(formData.email)) {
      setFeedback({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }
    if (!isPhoneValid(formData.phone)) {
      setFeedback({
        type: "error",
        text: "Please enter a valid phone number.",
      });
      return;
    }
    if (!formData.subject.trim()) {
      setFeedback({ type: "error", text: "Please enter a subject." });
      return;
    }
    if (!formData.message.trim()) {
      setFeedback({ type: "error", text: "Please enter a message." });
      return;
    }

    setSending(true);
    try {
      await axiosInstance.post("/api/contact", formData);
      setFeedback({
        type: "success",
        text: "Thank you — your message was sent. We'll contact you soon.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setFeedback({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

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
                Contact <span className="text-blue-200">Us</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-xl ">
                Have a question about admissions, academics, or school life?
                Reach out to us — we're happy to help.
              </p>
              <div className="w-24 h-1 bg-blue-200 mx- mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-1 bg-blue-800 rounded-full"></div>
                  <span className="text-sm font-semibold text-blue-800 uppercase tracking-wider">
                    Send Message
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-800 mb-2"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-800 mb-2"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-800 mb-2"
                    >
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-800 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Inquiry about admissions"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-800 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {feedback && (
                  <div
                    role="status"
                    className={`text-sm px-3 py-2 rounded-md ${
                      feedback.type === "success"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {feedback.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-lg text-sm font-semibold transition disabled:opacity-60"
                  aria-disabled={sending}
                >
                  <Send size={16} />
                  <span>{sending ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>

            {/* Contact Information + Map */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-1 bg-blue-800 rounded-full"></div>
                  <span className="text-sm font-semibold text-blue-800 uppercase tracking-wider">
                    Contact Info
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600">
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800 shrink-0">
                      {getIcon(info.iconName, "w-5 h-5")}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1 uppercase tracking-wide">
                        {info.title}
                      </h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Location
                </h3>
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                  <iframe
                    title="Don Bosco School Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.822091620114!2d93.69130997514665!3d24.33871727827359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374eb30064c61bef%3A0x65f3224f6e5fb1be!2sDon%20Bosco%20School%20Ground!5e1!3m2!1sen!2sin!4v1765338232754!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-64 md:h-80"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
