import React from "react";
import { Users, FileText, Phone, Calendar, CheckSquare, UserCheck } from "lucide-react";
import hall from "../assets/hall3.avif";
import teacher from "../assets/father3.avif";
import meeting from "../assets/class5.avif";
import office from "../assets/father3.avif";

const themeColors = {
  primary: "#f97316",
  primarySoft: "rgba(249,115,22,0.12)",
  neutralText: "#374151",
};

const managementState = {
  title: "Management & Administration",
  subtitle: "Stewardship, governance and the people who guide our school.",
  image: hall,
  intro:
    "Our leadership team combines educational expertise, pastoral care and community engagement to provide a safe, effective and welcoming learning environment.",
};

const boardMembers = [
  {
    name: "Fr. John Doe",
    role: "Chairman / Headmaster",
    image: teacher,
    bio: "Provides strategic guidance and leads school vision, curriculum, and pastoral care.",
  },
  {
    name: "Mrs. Anita Sharma",
    role: "Administrator",
    image: teacher,
    bio: "Oversees daily operations, admissions and compliance with educational standards.",
  },
  {
    name: "Mr. Ravi Kumar",
    role: "Finance & Operations",
    image: teacher,
    bio: "Responsible for budgeting, infrastructure planning and facility management.",
  },
];

const committees = [
  {
    title: "Board of Governors",
    description: "Responsible for strategic direction, major policy decisions and financial oversight.",
  },
  {
    title: "Academic Council",
    description: "Faculty leaders and coordinators that guide curriculum, assessments and academic standards.",
  },
  {
    title: "Student Welfare Committee",
    description: "Focus on student wellbeing, counseling, safety and inclusion.",
  },
];

const policies = [
  { title: "Admissions Policy", summary: "Transparent, merit & need-aware admissions with clear criteria and timelines." },
  { title: "Child Safeguarding", summary: "Strict child protection protocols, background checks, and reporting procedures." },
  { title: "Academic Integrity", summary: "Standards for assessment conduct, plagiarism prevention, and fair evaluation." },
];

const contact = {
  office: "Main Administrative Office",
  phone: "+91 12345 67890",
  email: "admin@donbosco.edu",
  hours: "Mon - Fri, 9:00 AM - 4:30 PM",
};

export default function JbManagement() {
  return (
    <div
      className="text-gray-900"
      style={{
        "--primary": themeColors.primary,
        "--primary-soft": themeColors.primarySoft,
        "--neutral-text": themeColors.neutralText,
      }}
    >
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
            <div>
              <p
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{ background: "var(--primary-soft)", color: "var(--primary)" }}
              >
                Management
              </p>

              <h1 className="mt-4 text-2xl md:text-5xl font-extrabold tracking-tight">
                {managementState.title}
              </h1>

              <p className="mt-4 text-xs md:text-md text-gray-600 max-w-xl">{managementState.subtitle}</p>
              <p className="mt-4 text-xs md:text-md text-gray-600 max-w-xl">{managementState.intro}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  className="inline-flex items-center gap-2 rounded-full px-2 md:px-4 py-2 text-xs md:text-sm font-medium text-white shadow"
                  style={{ background: "var(--primary)" }}
                >
                  Governance Documents
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border px-2 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                  Contact Administration
                </button>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-md">
              <div className="relative aspect-video bg-gray-100">
                <img
                  src={managementState.image}
                  alt="Administration"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOARD / MANAGEMENT */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center md:text-left">Leadership Team</h2>

          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((m) => (
              <div key={m.name} className="rounded-2xl bg-white p-4 md:p-6 shadow-sm flex gap-4 items-start">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0">
                  <img src={m.image} alt={m.name} className="object-cover w-full h-full" loading="lazy" decoding="async" />
                </div>

                <div>
                  <div className="text-sm md:text-lg font-semibold">{m.name}</div>
                  <div className="text-xs md:text-sm text-gray-500">{m.role}</div>
                  <p className="mt-2 text-xs md:text-sm text-gray-600">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITTEES & POLICIES */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold mb-4">Committees</h3>
              <div className="space-y-3 md:space-y-4">
                {committees.map((c) => (
                  <div key={c.title} className="p-3 md:p-4 border rounded-2xl bg-gray-50">
                    <div className="text-sm md:text-base font-semibold">{c.title}</div>
                    <div className="text-xs md:text-sm text-gray-600 mt-1">{c.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-extrabold mb-4">Key Policies</h3>
              <div className="space-y-3 md:space-y-4">
                {policies.map((p) => (
                  <div key={p.title} className="p-3 md:p-4 border rounded-2xl">
                    <div className="text-sm md:text-base font-semibold">{p.title}</div>
                    <div className="text-xs md:text-sm text-gray-600 mt-1">{p.summary}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMIN OFFICE / CONTACT */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-5xl font-extrabold mb-4">Contact & Office Hours</h2>
                <p className="text-xs md:text-md text-gray-600 max-w-xl">
                  For admissions, general enquiries or to schedule a meeting with a member of the management team,
                  contact the administrative office during the hours below.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 bg-white rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-(--primary,#f97316) shrink-0" />
                      <div>
                        <div className="text-xs md:text-sm font-medium">Phone</div>
                        <div className="text-xs md:text-sm text-gray-600">{contact.phone}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-4 bg-white rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 md:w-5 md:h-5 text-(--primary,#f97316) shrink-0" />
                      <div>
                        <div className="text-xs md:text-sm font-medium">Email</div>
                        <div className="text-xs md:text-sm text-gray-600">{contact.email}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-4 bg-white rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-(--primary,#f97316) shrink-0" />
                      <div>
                        <div className="text-xs md:text-sm font-medium">Office Hours</div>
                        <div className="text-xs md:text-sm text-gray-600">{contact.hours}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-4 bg-white rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <UserCheck className="w-4 h-4 md:w-5 md:h-5 text-(--primary,#f97316) shrink-0" />
                      <div>
                        <div className="text-xs md:text-sm font-medium">Office</div>
                        <div className="text-xs md:text-sm text-gray-600">{contact.office}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
              <div className="aspect-video">
                <img src={office} alt="Admin office" className="object-cover w-full h-full" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEETINGS / MINUTES */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center md:text-left">Meetings & Minutes</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-2xl bg-gray-50 p-4 md:p-6">
                <div className="text-sm md:text-lg font-semibold">Annual Board Meeting</div>
                <div className="text-xs md:text-sm text-gray-600 mt-2">Summary of strategic priorities and budget approvals.</div>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4 md:p-6">
                <div className="text-sm md:text-lg font-semibold">Academic Council</div>
                <div className="text-xs md:text-sm text-gray-600 mt-2">Curriculum review, assessment review and teacher development.</div>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4 md:p-6">
                <div className="text-sm md:text-lg font-semibold">Safety & Welfare</div>
                <div className="text-xs md:text-sm text-gray-600 mt-2">Student welfare initiatives, drills and safeguarding updates.</div>
              </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-5xl font-extrabold">Want to meet the team?</h2>
            <p className="mt-3 text-xs md:text-md text-gray-600">Request a meeting with the admin office or visit during office hours.</p>

            <div className="mt-6 flex items-center justify-center gap-3 md:gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center bg-(--primary,#f97316) text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium shadow hover:opacity-95 transition"
                style={{ background: "var(--primary)" }}
              >
                Email Admin
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center border border-gray-200 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                Call Office
              </a>
            </div>
        </div>
      </section>
    </div>
  );
}

