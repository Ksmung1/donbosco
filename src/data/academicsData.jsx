// Function to create slides data with resolved images
export const createSlidesData = (academicImages, resolveImages) => {
  return [
    {
      id: 1,
      sectionCode: "hs",
      title: "Higher Secondary",
      subtitle: "Classes XI & XII",
      description:
        "Comprehensive higher secondary education with multiple streams including Science, Arts, and Commerce. Preparing students for board examinations and higher education.",
      image:
        academicImages.find((img) => img.file?.toLowerCase().includes("lab"))
          ?.src ||
        academicImages.find((img) => img.file?.toLowerCase().includes("class"))
          ?.src ||
        academicImages[0]?.src,
      streams: [
        {
          name: "Science Stream",
          subjects: [
            "Physics",
            "Chemistry",
            "Biology",
            "Mathematics",
            "Computer Science",
          ],
          description:
            "Building future scientists with hands-on laboratory experiences",
          facilities: [
            "Physics Laboratory",
            "Chemistry Laboratory",
            "Biology Laboratory",
            "Computer Lab",
          ],
          images: resolveImages(
            ["lab"],
            [
              "lab18.avif",
              "lab19.avif",
              "lab20.avif",
              "lab21.avif",
              "lab22.avif",
              "lab23.avif",
              "lab2.avif",
              "lab3.avif",
              "lab4.avif",
              "lab10.avif",
              "lab11.avif",
              "lab12.avif",
              "lab13.avif",
              "lab14.avif",
              "lab15.avif",
              "computer.avif",
              "computer2.avif",
              "computer3.avif",
              "computer4.avif",
            ]
          ),
        },
        {
          name: "Arts Stream",
          subjects: [
            "History",
            "Political Science",
            "Geography",
            "Economics",
            "English Literature",
          ],
          description:
            "Nurturing creative minds with focus on critical thinking",
          facilities: [
            "History & Social Studies Lab",
            "Geography Lab",
            "Library & Reading Room",
            "Multimedia Classroom",
          ],
          images: resolveImages(
            ["hall", "class"],
            [
              "hall.avif",
              "hall2.avif",
              "hall3.avif",
              "hall4.avif",
              "hall5.avif",
              "hall6.avif",
              "class3.avif",
              "class4.avif",
              "class5.avif",
              "class6.avif",
              "class7.avif",
              "class8.avif",
            ]
          ),
        },
        {
          name: "Commerce Stream",
          subjects: [
            "Accountancy",
            "Business Studies",
            "Economics",
            "Mathematics",
            "Informatics Practices",
          ],
          description:
            "Shaping business leaders with financial and digital literacy",
          facilities: [
            "Accountancy Lab",
            "Computer Lab",
            "Business Studies Room",
            "Economics Resource Center",
          ],
          images: resolveImages(
            ["computer", "class"],
            [
              "computer.avif",
              "computer2.avif",
              "computer3.avif",
              "computer4.avif",
              "class9.avif",
              "class10.avif",
              "class11.avif",
            ]
          ),
        },
      ],
      features: [
        "State-of-the-art laboratories",
        "Expert faculty for each stream",
        "Board examination preparation",
        "Career counseling and guidance",
      ],
    },
    {
      id: 2,
      sectionCode: "hr",
      title: "High School",
      subtitle: "Classes IX & X",
      description:
        "Strong foundation in core subjects with emphasis on holistic development. Preparing students for higher secondary education with comprehensive curriculum.",
      image:
        academicImages.find((img) => img.file?.toLowerCase().includes("class"))
          ?.src ||
        academicImages[1]?.src ||
        academicImages[0]?.src,
      streams: [
        {
          name: "Core Subjects",
          subjects: [
            "Mathematics",
            "Science",
            "Social Studies",
            "English",
            "Regional Language",
          ],
          description: "Comprehensive coverage of all core subjects",
          facilities: [
            "Science Laboratory",
            "Mathematics Resource Room",
            "Language Lab",
            "Library",
          ],
          images: resolveImages(
            ["class", "lab"],
            [
              "class.avif",
              "class2.avif",
              "class3.avif",
              "class4.avif",
              "class5.avif",
              "class6.avif",
              "class7.avif",
              "class8.avif",
              "lab2.avif",
              "lab3.avif",
            ]
          ),
        },
      ],
      features: [
        "Well-structured curriculum",
        "Regular assessments and evaluations",
        "Extracurricular activities",
        "Foundation for higher studies",
      ],
    },
    {
      id: 3,
      sectionCode: "pb",
      title: "Junior Section",
      subtitle: "Classes I to VIII",
      description:
        "Early childhood and primary education focusing on foundational skills, creativity, and character development. Nurturing young minds in a supportive environment.",
      image:
        academicImages.find((img) => img.file?.toLowerCase().includes("class"))
          ?.src ||
        academicImages[2]?.src ||
        academicImages[0]?.src,
      streams: [
        {
          name: "Primary Education",
          subjects: [
            "Mathematics",
            "English",
            "Science",
            "Social Studies",
            "Arts & Crafts",
            "Physical Education",
          ],
          description:
            "Holistic development through play-based and activity-oriented learning",
          facilities: [
            "Activity Room",
            "Playground",
            "Arts & Crafts Room",
            "Library",
          ],
          images: resolveImages(
            ["class", "ground"],
            [
              "class.avif",
              "class2.avif",
              "class3.avif",
              "class4.avif",
              "ground.avif",
              "ground2.avif",
              "ground3.avif",
              "ground4.avif",
            ]
          ),
        },
      ],
      features: [
        "Activity-based learning",
        "Child-friendly environment",
        "Focus on creativity and imagination",
        "Character building and values education",
      ],
    },
  ];
};

// Function to create facilities data
export const createFacilitiesData = () => {
  return [
    {
      name: "Chemistry Laboratory",
      description:
        "Fully equipped chemistry laboratory with modern apparatus and safety equipment for conducting experiments and practical demonstrations in organic and inorganic chemistry.",
      forSection: ["hs", "hr"],
      imagePrefixes: ["lab"],
      imageFiles: [
        "lab2.avif",
        "lab3.avif",
        "lab4.avif",
        "lab10.avif",
        "lab11.avif",
      ],
    },
    {
      name: "Physics Laboratory",
      description:
        "State-of-the-art physics laboratory featuring advanced equipment for mechanics, optics, electricity, and modern physics experiments to enhance practical understanding.",
      forSection: ["hs", "hr"],
      imagePrefixes: ["lab"],
      imageFiles: [
        "lab18.avif",
        "lab19.avif",
        "lab20.avif",
        "lab21.avif",
        "lab22.avif",
        "lab23.avif",
      ],
    },
    {
      name: "Biology Laboratory",
      description:
        "Well-equipped biology laboratory with microscopes, specimens, and modern tools for studying plant and animal life, fostering hands-on scientific exploration.",
      forSection: ["hs", "hr"],
      imagePrefixes: ["lab"],
      imageFiles: ["lab12.avif", "lab13.avif", "lab14.avif", "lab15.avif"],
    },
    {
      name: "Computer Laboratory",
      description:
        "Dedicated Computer Lab with high-speed internet, latest software, and updated hardware to support digital literacy and computer science education across all grades.",
      forSection: ["hs", "hr", "pb"],
      imagePrefixes: ["computer"],
      imageFiles: [
        "computer.avif",
        "computer2.avif",
        "computer3.avif",
        "computer4.avif",
      ],
    },
    {
      name: "Library",
      description:
        "Extensive library collection with thousands of books, reference materials, periodicals, and digital resources to support research and foster a love for reading.",
      forSection: ["hs", "hr", "pb"],
      imagePrefixes: ["library", "class"],
      imageFiles: ["class3.avif", "class4.avif", "class5.avif", "class6.avif"],
    },
    {
      name: "Playground",
      description:
        "Spacious playground with sports facilities, recreational equipment, and open areas for physical activities, sports events, and outdoor learning experiences.",
      forSection: ["hs", "hr", "pb"],
      imagePrefixes: ["ground"],
      imageFiles: [
        "ground.avif",
        "ground2.avif",
        "ground3.avif",
        "ground4.avif",
      ],
    },
    {
      name: "Auditorium",
      description:
        "Large auditorium with modern sound and lighting systems, seating capacity for assemblies, cultural events, seminars, and academic presentations.",
      forSection: ["hs", "hr", "pb"],
      imagePrefixes: ["hall"],
      imageFiles: [
        "hall.avif",
        "hall2.avif",
        "hall3.avif",
        "hall4.avif",
        "hall5.avif",
        "hall6.avif",
      ],
    },
  ];
};
