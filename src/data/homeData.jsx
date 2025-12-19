// Helper function to get image from gallery by filename
// This will be passed from the component that has gallery access
export const createStateData = (getImageFromGallery) => ({
  hs: {
    title: "Don Bosco HSLC",
    from: "Classes I - XII",
    description:
      "An inclusive learning environment focused on academic rigor and character development.",
    description2:
      "We nurture curiosity and build skills through a balanced curriculum, modern facilities and a caring community.",
    stats: { students: "500+", staffs: "10+", years: "20+" },
    slideImage:
      getImageFromGallery("ground.avif") || getImageFromGallery("ground"),
    topperTitle: "HSLC Board",
    features: [
      {
        iconName: "Book",
        heading: "Quality Education",
        content:
          "Providing access to resources and diverse learning opportunities.",
      },
      {
        iconName: "Users",
        heading: "Community Support",
        content: "Fostering unity, parent engagement and volunteerism.",
      },
      {
        iconName: "GraduationCap",
        heading: "Empowering Students",
        content: "Equipping students to succeed academically and socially.",
      },
    ],
  },
  hr: {
    title: "Don Bosco HR",
    from: "Classes X - XII",
    description:
      "An inclusive learning environment focused on academic rigor and character development for higher secondary students.",
    description2:
      "We nurture curiosity and build skills through a balanced curriculum, modern facilities and a caring community that prepares students for higher education and life.",
    stats: { students: "600+", staffs: "20+", years: "20+" },
    slideImage: getImageFromGallery("park.avif") || getImageFromGallery("park"),
    topperTitle: "HR Board",
    features: [
      {
        iconName: "Book",
        heading: "Quality Education",
        content:
          "Providing access to resources and diverse learning opportunities.",
      },
      {
        iconName: "Users",
        heading: "Community Support",
        content: "Fostering unity, parent engagement and volunteerism.",
      },
      {
        iconName: "GraduationCap",
        heading: "Empowering Students",
        content: "Equipping students to succeed academically and socially.",
      },
    ],
  },
  jb: {
    title: "Don Bosco JB",
    from: "Pre-Primary & Primary",
    description:
      "A nurturing learning environment designed for young children, focusing on play-based learning and foundational skills.",
    description2:
      "We create a joyful and safe space where children learn through exploration, play, and guided activities that build confidence and curiosity.",
    stats: { students: "300+", staffs: "15+", years: "20+" },
    slideImage:
      getImageFromGallery("ground3.avif") || getImageFromGallery("ground3"),
    topperTitle: "JB Board",
    features: [
      {
        iconName: "Book",
        heading: "Play-Based Learning",
        content:
          "Learning through play, exploration, and hands-on activities that make education fun.",
      },
      {
        iconName: "Users",
        heading: "Holistic Development",
        content:
          "Focusing on physical, emotional, social, and cognitive development.",
      },
      {
        iconName: "GraduationCap",
        heading: "Safe & Nurturing",
        content:
          "Creating a secure, caring environment where every child feels valued.",
      },
    ],
  },
});
