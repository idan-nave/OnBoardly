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
  logoLink.appendChild(document.createTextNode('ZIM'));  // Add the logo text after the image

  h1.appendChild(logoLink);  // Add the link (logo) to the header

  // Navigation Menu (categories for logged-in users)
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.classList.add('nav');

  // Categories for logged-in users (removed 'Stages Pool')
  const categories = [
    { name: 'Departments', href: '#/departments' },
    { name: 'Onboarding Processes', href: '#/processes' },
    { name: 'Incoming Employees', href: '#/employees' },
    { name: 'Managers', href: '#/managers' },
    { name: 'Manage Access', href: '#/managers/access' }
  ];

  // Create list items for each category
  categories.forEach(category => {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = category.href;
    anchor.textContent = category.name;
    
    // Create buttons for edit, view, and add actions
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('nav-button-container');
    
    const editButton = document.createElement('button');
    editButton.classList.add('nav-action-button', 'nav-edit-button');
    editButton.innerHTML = '✏️';  // Pencil icon for edit
    editButton.onclick = () => {
      window.location.href = category.href;
    };

    const viewButton = document.createElement('button');
    viewButton.classList.add('nav-action-button', 'nav-view-button');
    viewButton.innerHTML = '👁️';  // Eye icon for view
    viewButton.onclick = () => {
      window.location.href = category.href;
    };

    const addButton = document.createElement('button');
    addButton.classList.add('nav-action-button', 'nav-add-button');
    addButton.innerHTML = '➕';  // Plus icon for add
    addButton.onclick = () => {
      window.location.href = `${category.href}/new`;
    };

    buttonContainer.appendChild(viewButton);
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(editButton);

    // Initially hide the buttons
    buttonContainer.style.display = 'none';

    // Show buttons on hover
    li.addEventListener('mouseenter', () => {
      buttonContainer.style.display = 'flex';
    });

    li.addEventListener('mouseleave', () => {
      buttonContainer.style.display = 'none';
    });

    li.appendChild(anchor);
    li.appendChild(buttonContainer);  // Add the button container after the link
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
