// Function to create admission data with resolved images
// This allows dynamic image resolution from gallery
export const createAdmissionData = (academicImages) => {
  return [
    {
      id: 1,
      sectionCode: "hs",
      title: "Higher Secondary",
      subtitle: "Classes XI & XII",
      description:
        "Admission to Higher Secondary section with multiple streams including Science, Arts, and Commerce.",
      image:
        academicImages.find((img) => img.file?.toLowerCase().includes("lab"))
          ?.src ||
        academicImages.find((img) => img.file?.toLowerCase().includes("class"))
          ?.src ||
        academicImages[0]?.src,
      admissionProcess: [
        {
          step: "1",
          title: "Application Form",
          description:
            "Fill out the admission form available online or at the school office.",
        },
        {
          step: "2",
          title: "Document Submission",
          description:
            "Submit required documents including HSLC marksheet, transfer certificate, and photographs.",
        },
        {
          step: "3",
          title: "Assessment/Interview",
          description:
            "Students may be required to take an assessment test or attend an interview session.",
        },
        {
          step: "4",
          title: "Admission Confirmation",
          description:
            "Upon selection, complete fee payment and receive admission confirmation.",
        },
      ],
      classAdmissions: [
        {
          class: "XI",
          age: "16-17 years",
          seats: "45 per class",
          requirements: "HSLC marksheet, Transfer certificate",
        },
        {
          class: "XII",
          age: "17-18 years",
          seats: "45 per class",
          requirements: "Class XI marksheet, Transfer certificate",
        },
      ],
      feeStructure: [
        {
          class: "XI",
          admission: "₹3,500",
          monthly: "₹2,200",
          annual: "₹26,400",
          other: "₹6,000",
        },
        {
          class: "XII",
          admission: "₹3,500",
          monthly: "₹2,200",
          annual: "₹26,400",
          other: "₹6,000",
        },
      ],
      requiredDocuments: [
        "HSLC marksheet (original + 2 copies)",
        "Previous school Transfer Certificate",
        "Previous year mark sheets",
        "Passport size photographs (4 copies)",
        "Aadhaar card copy (student & parents)",
        "Caste certificate (if applicable)",
        "Medical certificate",
      ],
      importantDates: [
        { event: "Admission Open", date: "March 1, 2025" },
        { event: "Last Date for Application", date: "April 30, 2025" },
        { event: "Assessment/Interview", date: "May 10-15, 2025" },
        { event: "Result Declaration", date: "May 20, 2025" },
        { event: "Fee Payment Deadline", date: "June 5, 2025" },
        { event: "Academic Session Begins", date: "June 15, 2025" },
      ],
    },
    {
      id: 2,
      sectionCode: "hr",
      title: "High School",
      subtitle: "Classes IX & X",
      description:
        "Admission to High School section with strong foundation in core subjects.",
      image:
        academicImages.find((img) => img.file?.toLowerCase().includes("class"))
          ?.src ||
        academicImages[1]?.src ||
        academicImages[0]?.src,
      admissionProcess: [
        {
          step: "1",
          title: "Application Form",
          description:
            "Fill out the admission form available online or at the school office.",
        },
        {
          step: "2",
          title: "Document Submission",
          description:
            "Submit required documents including previous school records and photographs.",
        },
        {
          step: "3",
          title: "Assessment/Interview",
          description:
            "Students may be required to take an assessment test or attend an interview session.",
        },
        {
          step: "4",
          title: "Admission Confirmation",
          description:
            "Upon selection, complete fee payment and receive admission confirmation.",
        },
      ],
      classAdmissions: [
        {
          class: "IX",
          age: "14-15 years",
          seats: "40 per class",
          requirements: "Class VIII marksheet, Transfer certificate",
        },
        {
          class: "X",
          age: "15-16 years",
          seats: "40 per class",
          requirements: "Class IX marksheet, Transfer certificate",
        },
      ],
      feeStructure: [
        {
          class: "IX",
          admission: "₹3,000",
          monthly: "₹2,000",
          annual: "₹24,000",
          other: "₹5,000",
        },
        {
          class: "X",
          admission: "₹3,000",
          monthly: "₹2,000",
          annual: "₹24,000",
          other: "₹5,000",
        },
      ],
      requiredDocuments: [
        "Previous school Transfer Certificate",
        "Previous year mark sheets (Class VIII/IX)",
        "Birth Certificate (original + 2 copies)",
        "Passport size photographs (4 copies)",
        "Aadhaar card copy (student & parents)",
        "Caste certificate (if applicable)",
        "Medical certificate",
      ],
      importantDates: [
        { event: "Admission Open", date: "March 1, 2025" },
        { event: "Last Date for Application", date: "April 30, 2025" },
        { event: "Assessment/Interview", date: "May 10-15, 2025" },
        { event: "Result Declaration", date: "May 20, 2025" },
        { event: "Fee Payment Deadline", date: "June 5, 2025" },
        { event: "Academic Session Begins", date: "June 15, 2025" },
      ],
    },
    {
      id: 3,
      sectionCode: "pb",
      title: "Junior Section",
      subtitle: "Classes I to VIII",
      description:
        "Admission to Junior Section focusing on foundational skills and holistic development.",
      image:
        academicImages.find((img) => img.file?.toLowerCase().includes("class"))
          ?.src ||
        academicImages[2]?.src ||
        academicImages[0]?.src,
      admissionProcess: [
        {
          step: "1",
          title: "Application Form",
          description:
            "Fill out the admission form available online or at the school office.",
        },
        {
          step: "2",
          title: "Document Submission",
          description:
            "Submit required documents including birth certificate and photographs.",
        },
        {
          step: "3",
          title: "Interaction Session",
          description:
            "Child and parent interaction session to understand the child's needs.",
        },
        {
          step: "4",
          title: "Admission Confirmation",
          description:
            "Upon selection, complete fee payment and receive admission confirmation.",
        },
      ],
      classAdmissions: [
        {
          class: "I - V",
          age: "5-10 years",
          seats: "30 per class",
          requirements: "Birth certificate, Previous school records (if any)",
        },
        {
          class: "VI - VIII",
          age: "11-13 years",
          seats: "35 per class",
          requirements: "Transfer certificate, Previous year marksheet",
        },
      ],
      feeStructure: [
        {
          class: "I - V",
          admission: "₹2,000",
          monthly: "₹1,500",
          annual: "₹18,000",
          other: "₹3,500",
        },
        {
          class: "VI - VIII",
          admission: "₹2,500",
          monthly: "₹1,800",
          annual: "₹21,600",
          other: "₹4,000",
        },
      ],
      requiredDocuments: [
        "Birth Certificate (original + 2 copies)",
        "Previous school records (if applicable)",
        "Transfer Certificate (for Class VI-VIII)",
        "Passport size photographs (4 copies)",
        "Aadhaar card copy (student & parents)",
        "Medical certificate",
        "Immunization records",
      ],
      importantDates: [
        { event: "Admission Open", date: "March 1, 2025" },
        { event: "Last Date for Application", date: "April 30, 2025" },
        { event: "Interaction Session", date: "May 10-15, 2025" },
        { event: "Result Declaration", date: "May 20, 2025" },
        { event: "Fee Payment Deadline", date: "June 5, 2025" },
        { event: "Academic Session Begins", date: "June 15, 2025" },
      ],
    },
  ];
};
