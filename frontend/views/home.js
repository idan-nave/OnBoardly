// Import styles specific to the HomePage
// import '../assets/styles/home.css';

// Helper function to create the hero section
const createHeroSection = () => {
  const heroSection = document.createElement('section');
  heroSection.classList.add('hero');

  const heading = createHeading();
  const paragraph = createParagraph();
  const buttonsContainer = createButtonsContainer();

  heroSection.appendChild(heading);
  heroSection.appendChild(paragraph);
  heroSection.appendChild(buttonsContainer);

  return heroSection;
};

// Helper function to create the heading
const createHeading = () => {
  const heading = document.createElement('h1');
  heading.innerHTML = 'Welcome to <span class="highlight">OnBoardly</span>';
  return heading;
};

// Helper function to create the paragraph
const createParagraph = () => {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Your partner in simplifying onboarding and enhancing team collaboration.';
  return paragraph;
};

// Helper function to create the buttons container
const createButtonsContainer = () => {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');

  const joinUsLink = createButton('Join Us', '#/register'); // Use hash-based routing
  const loginLink = createButton('Login', '#/login'); // Use hash-based routing

  buttonsContainer.appendChild(joinUsLink);
  buttonsContainer.appendChild(loginLink);

  return buttonsContainer;
};

// Helper function to create a button link
const createButton = (text, href) => {
  const button = document.createElement('a');
  button.classList.add('cta-link');
  button.href = href;
  button.textContent = text;
  return button;
};

// Main HomePage function
export const HomePage = () => {
  // Create a container for the HomePage
  const container = document.createElement('div');
  container.classList.add('homepage-container'); // Optional class for styling

  // Create the hero section element
  const heroSection = createHeroSection();

  container.appendChild(heroSection);

  // Return the container for the router to handle rendering
  return container;
};

// Export HomePage for routing
export default HomePage;
