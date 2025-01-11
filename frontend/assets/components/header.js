// import '../styles/header.css'; // will be imported in each page for top-level rendering requirements

// Header Component with Logo, Navigation, and User/Login Button
export const Header = () => {
  const headerElement = document.createElement('header');
  headerElement.classList.add('header');

  const container = document.createElement('div');
  container.classList.add('container');

  // Create Logo and Heading (make logo a clickable link)
  const h1 = document.createElement('h1');
  const logoLink = document.createElement('a');  // Wrap the logo with a link
  logoLink.href = '/';  // Redirect to homepage or another URL when clicked
  const logo = document.createElement('img');
  logo.src = '../assets/media/images/logo.png';  // Set the correct path to your logo
  logo.alt = 'OnBoardly Logo';
  logo.classList.add('logo');
  logoLink.appendChild(logo);  // Add the logo to the link
  logoLink.appendChild(document.createTextNode('OnBoardly'));  // Add the logo text after the image

  h1.appendChild(logoLink);  // Add the link (logo) to the header

  // Navigation
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.classList.add('nav');

  const homeLink = document.createElement('li');
  const homeAnchor = document.createElement('a');
  homeAnchor.href = '#/';
  homeAnchor.textContent = 'Home';
  homeLink.appendChild(homeAnchor);

  const aboutLink = document.createElement('li');
  const aboutAnchor = document.createElement('a');
  aboutAnchor.href = '#/about';
  aboutAnchor.textContent = 'About';
  aboutLink.appendChild(aboutAnchor);

  const contactLink = document.createElement('li');
  const contactAnchor = document.createElement('a');
  contactAnchor.href = '#/contact';
  contactAnchor.textContent = 'Contact';
  contactLink.appendChild(contactAnchor);

  ul.appendChild(homeLink);
  ul.appendChild(aboutLink);
  ul.appendChild(contactLink);

  nav.appendChild(ul);

  // User/Login Button
  const userBtn = document.createElement('a');
  userBtn.classList.add('user-btn');
  userBtn.href = '#/login';  // Default to login if not logged in
  userBtn.textContent = 'Login';  // Change to 'Username' if logged in

  // Check if user is logged in (mock check for example purposes)
  const isLoggedIn = false;  // Replace with actual check, such as from a session or cookie
  if (isLoggedIn) {
    userBtn.textContent = 'Username';  // Display username if logged in
    userBtn.href = '#/profile';  // Redirect to profile if logged in
  }

  // Append elements to container
  container.appendChild(h1);
  container.appendChild(nav);
  container.appendChild(userBtn);
  headerElement.appendChild(container);

  return headerElement;
};

export default Header;
