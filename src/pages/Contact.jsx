import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import axiosInstance from "../../api";

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

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      content: "Salemveng, D.Phailien, Churachandpur, Manipur 795128",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+91 87985 39293",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "info.dbcschool@gmail.com",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Office Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM",
    },
  ];

  const isEmailValid = (email) => /^\S+@\S+\.\S+$/.test(email);
  const isPhoneValid = (phone) => phone.trim() === "" || /^[0-9+\-\s()]{6,20}$/.test(phone);

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
      setFeedback({ type: "error", text: "Please enter a valid email address." });
      return;
    }
    if (!isPhoneValid(formData.phone)) {
      setFeedback({ type: "error", text: "Please enter a valid phone number." });
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
      setFeedback({ type: "success", text: "Thank you — your message was sent. We'll contact you soon." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setFeedback({ type: "error", text: "Something went wrong. Please try again later." });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 via-white to-gray-50 pointer-events-none" />
        <div className="relative mx-auto flex items-center flex-col max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-gray-900 tracking-tight">
            Contact Us
          </h1>
          <p className="mt-6 max-w-5xl text-base md:text-lg text-gray-600 leading-relaxed">
            Have a question about admissions, academics, or school life? Reach out to us — we're happy to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-black">Send us a message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-2">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-500 transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-800 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-500 transition-colors"
                      placeholder="Inquiry about admissions"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
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
                        feedback.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                      }`}
                    >
                      {feedback.text}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 bg-green-700/95 hover:bg-green-800 text-white px-5 py-3 rounded-lg text-sm font-medium transition disabled:opacity-60"
                    aria-disabled={sending}
                  >
                    <Send size={16} />
                    <span>{sending ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              </div>

            {/* Contact Information + Map */}
            <div>
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-black">Contact Information</h2>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-700">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-1 uppercase tracking-wide">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="mt-12">
                  <h3 className="text-lg font-medium mb-4 text-black">Location</h3>
                  <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                    <iframe
                      title="Salt Brook School Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.822091620114!2d93.69130997514665!3d24.33871727827359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374eb30064c61bef%3A0x65f3224f6e5fb1be!2sDon%20Bosco%20School%20Ground!5e1!3m2!1sen!2sin!4v1765338232754!5m2!1sen!2sin"                      loading="lazy"
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
