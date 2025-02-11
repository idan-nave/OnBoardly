// <!-- layout pages -->
import { Layout } from './assets/components/layout.js'; // Import the Layout
// <!-- general pages -->
import { AboutPage } from './views/about.js';
import { HomePage } from './views/home.js';
// <!-- user pages -->
import { LoginPage } from './views/login.js';
import { RegisterPage } from './views/register.js';
import { ProfilePage } from './views/profile.js';
// <!-- cpmpany logic pages -->
import { DepartmentsPage } from './views/departments.js';
import { AddDepartmentPage } from './views/addDepartment.js';
import { ProcessesPage } from './views/processes.js';
import { AddProcessPage } from './views/addProcess.js';
// <!-- company hr pages -->
import { ManagerAccessPage } from './views/manageAccess.js';


import { ManagersPage } from './views/managers.js';
import { AddManagerPage } from './views/addManager.js';
import { EmployeesPage } from './views/employees.js';
import { AddEmployeePage } from './views/addEmployee.js';

// import { CompaniesPage } from './views/companies.js';

// <!-- cpmpany managment pages -->
import { ManageEmployeePage } from './views/manageEmployee.js';
// import { ProcessManagmentPage } from './views/manageProcess.js';


// Define routes and the components to render for each
const routes = {
  '/': HomePage,
  // <!-- user pages -->
  '/login': LoginPage,
  '/register': RegisterPage,
  '/about': AboutPage,
  '/profile': ProfilePage,
  // <!-- cpmpany logic pages -->
  '/departments': DepartmentsPage,
  '/departments/new': AddDepartmentPage,
  '/processes': ProcessesPage,
  '/processes/new': AddProcessPage,
  // <!-- company hr pages -->
  '/managers/access': ManagerAccessPage,
  '/managers': ManagersPage,
  '/managers/new': AddManagerPage,
  '/employees': EmployeesPage,
  '/employees/new': AddEmployeePage,
  // <!-- company managment pages -->
  '/employees/id': ManageEmployeePage,
  // '/processes/id': ProcessManagmentPage,
  // '/users': UsersPage,
  // '/users/new': AddUserPage,
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