import Header from './header.js';
import Footer from './footer.js';

export const Layout = (contentElement) => {
  // Create the overall layout container
  const layoutElement = document.createElement('div');
  layoutElement.classList.add('layout-container');

  // Append Header
  const headerContainer = Header(); // Assuming Header is imported correctly
  layoutElement.appendChild(headerContainer);

  // Append Main Content (passed as a DOM element)
  const mainElement = document.createElement('main');
  mainElement.classList.add('content-container');
  mainElement.appendChild(contentElement);  // Append the passed content element directly
  layoutElement.appendChild(mainElement);

  // Append Footer
  const footerContainer = Footer(); // Assuming Footer is imported correctly
  layoutElement.appendChild(footerContainer);

  return layoutElement;
};

export default Layout;
