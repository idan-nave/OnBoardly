import { Layout } from './assets/components/layout.js'; // Import the Layout
import { HomePage } from './views/home.js';
import { LoginPage } from './views/login.js';
import { RegisterPage } from './views/register.js';
import { AboutPage } from './views/about.js';

// Define routes and the components to render for each
const routes = {
  '/': HomePage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/about': AboutPage,
};

// Create background video (local video file)
const videoElement = document.createElement('video');
videoElement.src = '../assets/media/videos/hero.mp4'; // Path to the local video
videoElement.autoplay = true;
videoElement.loop = true;
videoElement.muted = true;
videoElement.playsInline = true; // Helps with autoplay on mobile devices
videoElement.classList.add('background-video');

// Add the video element as the root background
const rootElement = document.body;
rootElement.appendChild(videoElement);

// Create the loading screen element
const loadingScreen = document.createElement('div');
loadingScreen.id = 'loading-screen';
loadingScreen.classList.add('loading-screen');
loadingScreen.innerHTML = `
  <div class="spinner"></div>
  <p>Loading...</p>
`;

// Append loading screen to body (before the app content is injected)
rootElement.appendChild(loadingScreen);

// A function to render the current page based on the hash in the URL
const renderPage = () => {
  const route = window.location.hash.slice(1) || '/'; // Default to '/' if no hash
  const pageComponent = routes[route] || routes['/']; // Default to Home if no route matches

  // Clear previous content
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = '';

  // Render the page content inside the layout
  const pageContent = pageComponent(); // Call the page function to get the DOM element
  const layout = Layout(pageContent); // Wrap the content with the layout (Header + Footer)
  appContainer.appendChild(layout); // Append the complete layout to the app container

};

// Listen for hash changes (to handle routing without page reloads)
window.addEventListener('hashchange', renderPage);

// Initialize the router
document.addEventListener('DOMContentLoaded', () => {
  // Hide the loading screen once the DOM is fully loaded
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none'; // Hide loading screen after delay
  }, 500); // Delay for 2 seconds (adjust as needed)
  // Continue with any other initialization
  renderPage();
});