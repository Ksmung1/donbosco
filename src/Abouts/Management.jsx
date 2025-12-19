import { useOutletContext } from "react-router-dom";
import gallery from "../data/gallery";
import {
  Users,
  FileText,
  Phone,
  Mail,
  Building,
  Award,
  Shield,
  CheckSquare,
} from "lucide-react";

const Management = () => {
  const { state } = useOutletContext();
  const school = gallery.find((item) =>
    item.file?.toLowerCase().includes("school")
  );
  const schoolPictures = gallery.filter((item) =>
    item.file?.toLowerCase().includes("school")
  );

  const leadershipTeam = [
    {
      name: "Rev. Fr. Stephen Baite",
      role: "Principal",
      description:
        "Provides strategic guidance and leads school vision, curriculum, and pastoral care. Committed to holistic education and student welfare.",
      image: gallery.find((item) => item.file?.toLowerCase().includes("father"))
        ?.src,
    },
    {
      name: "Mrs. Anita Sharma",
      role: "Vice Principal",
      description:
        "Oversees daily operations, academic coordination, and student discipline. Ensures smooth functioning of academic programs.",
      image: schoolPictures[0]?.src,
    },
    {
      name: "Mr. Ravi Kumar",
      role: "Administrator",
      description:
        "Manages administrative functions, admissions, and compliance with educational standards. Handles school operations and logistics.",
      image: schoolPictures[1]?.src,
    },
  ];

  const boardMembers = [
    {
      name: "Fr. John Doe",
      role: "Chairman",
      description:
        "Provides strategic direction and oversight for the school's mission and vision.",
    },
    {
      name: "Mrs. Priya Singh",
      role: "Board Member",
      description:
        "Focuses on academic excellence and curriculum development initiatives.",
    },
    {
      name: "Mr. David Meitei",
      role: "Board Member",
      description:
        "Oversees financial planning and infrastructure development projects.",
    },
    {
      name: "Dr. Sarah Thangjam",
      role: "Board Member",
      description:
        "Advises on student welfare and community engagement programs.",
    },
  ];

  const committees = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Board of Governors",
      description:
        "Responsible for strategic direction, major policy decisions, and financial oversight. Meets quarterly to review school progress and set future goals.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Academic Council",
      description:
        "Faculty leaders and coordinators that guide curriculum, assessments, and academic standards. Ensures quality education delivery.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Student Welfare Committee",
      description:
        "Focuses on student wellbeing, counseling, safety, and inclusion. Addresses student concerns and promotes a positive school environment.",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Infrastructure Committee",
      description:
        "Manages facility planning, maintenance, and development projects. Ensures safe and modern learning environments.",
    },
  ];

  const policies = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Admissions Policy",
      summary:
        "Transparent, merit & need-aware admissions with clear criteria and timelines. Ensures fair and equitable access to education.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Child Safeguarding",
      summary:
        "Strict child protection protocols, background checks, and reporting procedures. Committed to student safety and wellbeing.",
    },
    {
      icon: <CheckSquare className="w-5 h-5" />,
      title: "Academic Integrity",
      summary:
        "Standards for assessment conduct, plagiarism prevention, and fair evaluation. Promotes honest and ethical academic practices.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Code of Conduct",
      summary:
        "Clear expectations for student behavior, discipline procedures, and character development. Fosters respect and responsibility.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        {school?.src ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${school.src})` }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/30"></div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Management & <span className="text-blue-200">Administration</span>
            </h1>
            <div className="w-24 h-1 bg-blue-200 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Stewardship, governance, and the people who guide our school
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Our leadership team combines educational expertise, pastoral care,
              and community engagement to provide a safe, effective, and
              welcoming learning environment. We are committed to excellence in
              education and the holistic development of every student.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Leadership <span className="text-blue-800">Team</span>
            </h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-[300px] overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-800 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Governors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Board of <span className="text-blue-800">Governors</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated individuals guiding our institution's strategic
              direction
            </p>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-800 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-16 md:py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              School <span className="text-blue-200">Committees</span>
            </h2>
            <div className="w-24 h-1 bg-blue-200 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {committees.map((committee, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-200 text-blue-900 p-3 rounded-lg shrink-0">
                    {committee.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {committee.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {committee.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              School <span className="text-blue-800">Policies</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clear guidelines and standards that ensure quality education and
              student welfare
            </p>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-800 p-3 rounded-lg shrink-0">
                    {policy.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {policy.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {policy.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8 md:p-12 border border-blue-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Administrative Office
              </h2>
              <p className="text-gray-600">
                Contact us for inquiries, appointments, or administrative
                matters
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-800 text-white p-4 rounded-lg inline-block mb-3">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600 text-sm">
                  Main Administrative Office
                </p>
                <p className="text-gray-600 text-sm">
                  Don Bosco Higher Secondary School
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-800 text-white p-4 rounded-lg inline-block mb-3">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 8837368736</p>
                <p className="text-gray-600 text-sm">
                  Mon - Fri, 9:00 AM - 4:30 PM
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-800 text-white p-4 rounded-lg inline-block mb-3">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">sspprs001@gmail.com</p>
                <p className="text-gray-600 text-sm">
                  We respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
