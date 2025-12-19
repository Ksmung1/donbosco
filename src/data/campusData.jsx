// Function to create schools data with resolved images
// This allows dynamic image resolution from gallery
export const createSchoolsData = (campusImages) => {
  return [
    {
      id: 1,
      name: "Don Bosco School",
      location: "Main Campus",
      area: "Main Location",
      type: "School",
      description:
        "Don Bosco School is the flagship institution providing quality education from primary to higher secondary levels. The school offers comprehensive academic programs with modern facilities and dedicated faculty.",
      longDescription:
        "Don Bosco School stands as a beacon of educational excellence, serving students from Classes I to XII. Our institution is committed to providing holistic education that combines academic rigor with character formation. The school boasts state-of-the-art infrastructure including well-equipped science laboratories, computer labs, a comprehensive library, and a spacious auditorium. Our experienced faculty members are dedicated to nurturing each student's potential, ensuring they receive personalized attention and guidance. The school offers multiple streams including Science, Arts, and Commerce at the higher secondary level, preparing students for diverse career paths.",
      image:
        campusImages.find((img) => img.file?.toLowerCase().includes("school"))
          ?.src ||
        campusImages.find((img) => img.file?.toLowerCase().includes("building"))
          ?.src ||
        campusImages[0]?.src ||
        "https://via.placeholder.com/600x400?text=Don+Bosco+School",
      images: campusImages.slice(0, 8) || [],
      features: [
        "Classes I to XII",
        "Science, Arts & Commerce Streams",
        "Science Laboratories",
        "Computer Labs",
        "Library & Auditorium",
      ],
      established: "1985",
      contact: {
        phone: "+91 98765 43210",
        email: "info@donbosco.edu",
        address: "Don Bosco School, Main Campus",
      },
    },
    {
      id: 2,
      name: "Don Bosco School - Singat",
      location: "Singat Area",
      area: "Singat",
      type: "School",
      description:
        "Don Bosco School in Singat area extends quality education to the local community. The school maintains the same high standards of education and values as the main campus, serving students in the Singat region.",
      longDescription:
        "Don Bosco School - Singat is an extension of our commitment to providing quality education to communities across different regions. Located in the Singat area, this institution brings the same educational excellence and values-based learning to students in the region. The school features modern classrooms equipped with the latest teaching aids, a well-stocked library, and playground facilities that promote physical development alongside academic growth. Our dedicated team of teachers ensures that every child receives individual attention and support. The school actively engages with the local community through various outreach programs, making education accessible and relevant to the needs of the region.",
      image:
        campusImages.find((img) => img.file?.toLowerCase().includes("class"))
          ?.src ||
        campusImages[1]?.src ||
        campusImages[0]?.src ||
        "https://via.placeholder.com/600x400?text=Don+Bosco+Singat",
      images: campusImages.slice(1, 9) || [],
      features: [
        "Primary & Secondary Education",
        "Modern Classrooms",
        "Playground Facilities",
        "Library",
        "Community Outreach",
      ],
      established: "1995",
      contact: {
        phone: "+91 98765 43211",
        email: "singat@donbosco.edu",
        address: "Don Bosco School, Singat Area",
      },
    },
    {
      id: 3,
      name: "Don Bosco School - Thanlon",
      location: "Thanlon Area",
      area: "Thanlon",
      type: "School",
      description:
        "Don Bosco School in Thanlon area provides accessible quality education to students in the region. The institution focuses on holistic development and community engagement.",
      longDescription:
        "Don Bosco School - Thanlon represents our mission to make quality education accessible to students in remote and underserved areas. The school provides a complete educational experience with all necessary facilities including classrooms, library, sports facilities, and activity rooms. Our qualified teachers bring expertise and dedication to ensure students receive the best possible education. The school emphasizes not just academic excellence but also character building, values formation, and community service. Through various community programs and affordable education initiatives, we aim to transform lives and contribute to the development of the region.",
      image:
        campusImages.find((img) => img.file?.toLowerCase().includes("hall"))
          ?.src ||
        campusImages[2]?.src ||
        campusImages[0]?.src ||
        "https://via.placeholder.com/600x400?text=Don+Bosco+Thanlon",
      images: campusImages.slice(2, 10) || [],
      features: [
        "Complete School Facilities",
        "Qualified Teachers",
        "Sports & Activities",
        "Community Programs",
        "Affordable Education",
      ],
      established: "2000",
      contact: {
        phone: "+91 98765 43212",
        email: "thanlon@donbosco.edu",
        address: "Don Bosco School, Thanlon Area",
      },
    },
    {
      id: 4,
      name: "St. Mary School",
      location: "Main Campus Area",
      area: "Main Location",
      type: "School",
      description:
        "St. Mary School is another esteemed institution under the same administration, providing quality education with a focus on character formation and academic excellence.",
      longDescription:
        "St. Mary School is a distinguished institution that operates under the same administration, sharing the vision of providing quality education with a strong emphasis on character formation and moral values. The school offers primary and secondary education with modern infrastructure that supports effective teaching and learning. Our experienced faculty members are committed to nurturing students' academic abilities while instilling important life values. The school provides a wide range of extracurricular activities including sports, arts, music, and community service programs. St. Mary School creates a supportive and inclusive environment where every student can thrive and reach their full potential.",
      image:
        campusImages.find((img) => img.file?.toLowerCase().includes("school"))
          ?.src ||
        campusImages[3]?.src ||
        campusImages[0]?.src ||
        "https://via.placeholder.com/600x400?text=St+Mary+School",
      images: campusImages.slice(3, 11) || [],
      features: [
        "Primary & Secondary Classes",
        "Modern Infrastructure",
        "Experienced Faculty",
        "Extracurricular Activities",
        "Values-Based Education",
      ],
      established: "1990",
      contact: {
        phone: "+91 98765 43213",
        email: "stmary@donbosco.edu",
        address: "St. Mary School, Main Campus Area",
      },
    },
    {
      id: 5,
      name: "Don Bosco Hostel",
      location: "Main Campus",
      area: "Main Location",
      type: "Hostel",
      description:
        "Don Bosco Hostel provides safe and comfortable accommodation for students from distant areas. The hostel offers a home-like environment with proper facilities, supervision, and support for academic success.",
      longDescription:
        "Don Bosco Hostel is a safe and nurturing residential facility designed to provide a home away from home for students who come from distant areas. The hostel offers comfortable accommodation with well-maintained rooms, study halls, dining facilities, and recreation areas. Our dedicated staff provides 24/7 supervision ensuring the safety and well-being of all residents. The hostel environment promotes discipline, camaraderie, and academic focus. Students benefit from structured study hours, nutritious meals, and a supportive community that helps them excel in their studies. The hostel also organizes various activities and programs to ensure the holistic development of students.",
      image:
        campusImages.find((img) => img.file?.toLowerCase().includes("hall"))
          ?.src ||
        campusImages.find((img) => img.file?.toLowerCase().includes("building"))
          ?.src ||
        campusImages[0]?.src ||
        "https://via.placeholder.com/600x400?text=Don+Bosco+Hostel",
      images: campusImages.slice(0, 8) || [],
      features: [
        "Safe & Secure Accommodation",
        "Study Halls",
        "Dining Facilities",
        "Recreation Areas",
        "24/7 Supervision",
      ],
      established: "1992",
      contact: {
        phone: "+91 98765 43214",
        email: "hostel@donbosco.edu",
        address: "Don Bosco Hostel, Main Campus",
      },
    },
  ];
};
