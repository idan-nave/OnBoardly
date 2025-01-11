// import '../styles/profileNav.css'; // Make sure the styles are loaded

// ProfileNav Component with Logo, Navigation, and Categories for Logged-in Users
export const ProfileNav = () => {
  const headerElement = document.createElement('profile-nav-hdr');
  headerElement.classList.add('profile-nav-hdr');

  const container = document.createElement('div');
  container.classList.add('container');

  // Create Logo and Heading (make logo a clickable link)
  const h1 = document.createElement('h1');
  const logoLink = document.createElement('a');  // Wrap the logo with a link
  logoLink.href = '#/profile';  // Redirect to homepage or another URL when clicked
  const logo = document.createElement('img');
  logo.src = '../assets/media/users/Zim/logo.png';  // Set the correct path to your logo
  logo.alt = 'OnBoardly Logo';
  logo.classList.add('logo');
  logoLink.appendChild(logo);  // Add the logo to the link
  logoLink.appendChild(document.createTextNode('My Company'));  // Add the logo text after the image

  h1.appendChild(logoLink);  // Add the link (logo) to the header

  // Navigation Menu (categories for logged-in users)
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.classList.add('nav');

  // Categories for logged-in users
  const categories = [
    { name: 'Departments', href: '#/departments' },
    { name: 'Onboarding Processes', href: '#/processes' },
    { name: 'Stages Pool', href: '#/stages' },
    { name: 'Managers', href: '#/managers' },
    { name: 'Incoming Employees', href: '#/employees' },
    { name: 'Management Users', href: '#/management-users' }
  ];

  // Create list items for each category
  categories.forEach(category => {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = category.href;
    anchor.textContent = category.name;
    li.appendChild(anchor);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  // Append elements to container
  container.appendChild(h1);
  container.appendChild(nav);
  headerElement.appendChild(container);

  return headerElement;
};

export default ProfileNav;
