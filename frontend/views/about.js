// Import styles specific to the AboutPage
// import '../assets/styles/about.css';

// Helper function to create the hero section
const createHeroSection = () => {
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");

  const heading = document.createElement("h1");
  heading.textContent = "About Onboardly";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Streamlining the onboarding process to ensure a seamless experience for new employees and IT departments.";

  heroSection.appendChild(heading);
  heroSection.appendChild(paragraph);

  return heroSection;
};

// Helper function to create the about section
const createAboutSection = (title, content) => {
  const section = document.createElement("section");
  section.classList.add("about-section");

  const heading = document.createElement("h2");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.innerHTML = content;

  section.appendChild(heading);
  section.appendChild(paragraph);

  return section;
};

// Helper function to create the key features section with collapsible list
const createKeyFeaturesSection = () => {
  const section = document.createElement("section");
  section.classList.add("about-section");

  const heading = document.createElement("h2");
  heading.textContent = "Key Features";

  const featuresList = document.createElement("ul");
  const features = [
    {
      name: "Applicant Tracking",
      content:
        "Our applicant tracking system simplifies the hiring process by allowing HR teams to manage job applications, track candidates, and store resumes in one centralized system."
    },
    {
      name: "Interview Scheduling",
      content:
        "With our interview scheduling tool, you can easily coordinate interview times with candidates and interviewers, sending automated reminders and reducing scheduling conflicts."
    },
    {
      name: "Document Management",
      content:
        "Our document management system helps store and organize employee onboarding documents securely, making them easy to access and track throughout the hiring process."
    },
    {
      name: "Automated Workflow with Conditional Logic",
      content:
        "Our platform automates key onboarding workflows, such as document submission and approval, with conditional logic to ensure tasks are completed in the correct order."
    },
    {
      name: "Status Tracking and Notifications",
      content:
        "Onboardly provides real-time status tracking for each employee's onboarding progress, along with notifications to keep everyone in the loop."
    }
  ];

  features.forEach((feature, index) => {
    const listItem = document.createElement("li");

    // Create the subheader container that holds both title and the content
    const subheaderContainer = document.createElement("div");
    subheaderContainer.classList.add("feature-container");

    // Create the link for each feature (including the title)
    const featureLink = document.createElement("a");
    featureLink.href = "#";
    featureLink.textContent = feature.name;
    featureLink.classList.add("feature-link");
    subheaderContainer.appendChild(featureLink);

    // Create the content paragraph for the feature (initially hidden)
    const featureParagraph = document.createElement("p");
    featureParagraph.classList.add("feature-content");
    featureParagraph.textContent = feature.content;
    featureParagraph.style.display = "none"; // Hide initially
    subheaderContainer.appendChild(featureParagraph);

    // Add event listener to toggle visibility of the content when the subheader container is clicked
    subheaderContainer.addEventListener("click", (e) => {
      e.preventDefault();
      // Toggle the display of the clicked feature's paragraph
      const allParagraphs = document.querySelectorAll(".feature-content");
      allParagraphs.forEach((paragraph, i) => {
        if (i !== index) {
          paragraph.style.display = "none"; // Hide all other paragraphs
        }
      });
      featureParagraph.style.display =
        featureParagraph.style.display === "none" ? "block" : "none"; // Toggle the current one
    });

    featuresList.appendChild(listItem);
    listItem.appendChild(subheaderContainer); // Append subheader container to list item
  });

  section.appendChild(heading);
  section.appendChild(featuresList);

  return section;
};


// Helper function to create navigation links
const createNavLink = (text, href, isActive = false) => {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;
  if (isActive) link.classList.add("active");
  return link;
};

// Main AboutPage function
export const AboutPage = () => {
  // Create a container for the AboutPage
  const container = document.createElement("div");
  container.classList.add("about-page-container"); // Optional class for styling

  // Create sections
  const heroSection = createHeroSection();
  const missionSection = createAboutSection(
    "Our Mission",
    "Onboardly is dedicated to creating an efficient and integrated onboarding management system. By automating workflows, we aim to ensure that every new hire is set up for success from day one."
  );
  const featuresSection = createKeyFeaturesSection();

  // Append all elements to the container
  container.appendChild(heroSection);
  container.appendChild(missionSection);
  container.appendChild(featuresSection);

  // Return the container for the router to handle rendering
  return container;
};
// Export AboutPage for routing
export default AboutPage;
