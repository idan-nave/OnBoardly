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

// Helper function to create the key features section
const createKeyFeaturesSection = () => {
  const section = document.createElement("section");
  section.classList.add("about-section");

  const heading = document.createElement("h2");
  heading.textContent = "Key Features";

  const featuresList = document.createElement("ul");
  const features = [
    "Applicant Tracking",
    "Interview Scheduling",
    "Document Management",
    "Automated Workflow with Conditional Logic",
    "Status Tracking and Notifications",
  ];

  features.forEach((feature) => {
    const listItem = document.createElement("li");
    listItem.textContent = feature;
    featuresList.appendChild(listItem);
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

  // Create the header
  const header = document.createElement("header");
  header.classList.add("main-header");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "Onboardly";

  const nav = document.createElement("nav");
  const homeLink = createNavLink("Home", "#/home");
  const aboutLink = createNavLink("About", "#/about", true);
  // const contactLink = createNavLink('Contact', '#/contact'); // Uncomment if needed

  nav.appendChild(homeLink);
  nav.appendChild(aboutLink);
  // nav.appendChild(contactLink); // Uncomment if needed

  header.appendChild(logo);
  header.appendChild(nav);

  // Create sections
  const heroSection = createHeroSection();
  const missionSection = createAboutSection(
    "Our Mission",
    "Onboardly is dedicated to creating an efficient and integrated onboarding management system. By automating workflows, we aim to ensure that every new hire is set up for success from day one."
  );
  const featuresSection = createKeyFeaturesSection();

  // Create footer
  const footer = document.createElement("footer");
  footer.classList.add("main-footer");
  footer.textContent = "© 2025 Onboardly. All rights reserved.";

  // Append all elements to the container
  container.appendChild(header);
  container.appendChild(heroSection);
  container.appendChild(missionSection);
  container.appendChild(featuresSection);
  container.appendChild(footer);

  // Return the container for the router to handle rendering
  return container;
};
// Export AboutPage for routing
export default AboutPage;
