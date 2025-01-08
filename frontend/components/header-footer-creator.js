// Function to dynamically create the header
function createHeader() {
    const header = document.createElement('div');
    header.className = 'header';

    const container = document.createElement('div');
    container.className = 'container';

    const logo = document.createElement('div');
    logo.className = 'logo';

    const logoImg = document.createElement('img');
    logoImg.src = 'path/to/logo.png'; // Replace with the actual logo path
    logoImg.alt = 'Logo';
    logo.appendChild(logoImg);

    const nav = document.createElement('nav');
    nav.className = 'nav';

    const navList = document.createElement('ul');
    navList.className = 'nav-list';

    const navItems = [
        { text: 'Features', href: '#features' },
        { text: 'About Us', href: '#about' },
        { text: 'Contact', href: '#contact' }
    ];

    navItems.forEach(item => {
        const navListItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.href = item.href;
        navLink.className = 'nav-link';
        navLink.textContent = item.text;

        navListItem.appendChild(navLink);
        navList.appendChild(navListItem);
    });

    nav.appendChild(navList);

    const searchBar = document.createElement('div');
    searchBar.className = 'search-bar';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Search...';

    const searchButton = document.createElement('button');
    searchButton.className = 'search-btn';
    searchButton.textContent = 'Go';

    searchBar.appendChild(searchInput);
    searchBar.appendChild(searchButton);

    container.appendChild(logo);
    container.appendChild(nav);
    container.appendChild(searchBar);
    header.appendChild(container);

    document.body.insertBefore(header, document.body.firstChild);
}

// Function to dynamically create the footer
function createFooter() {
    const footer = document.createElement('div');
    footer.className = 'footer';

    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';

    const footerSections = [
        {
            title: 'About',
            links: [
                { text: 'Company Info', href: '#' },
                { text: 'Careers', href: '#' },
                { text: 'Privacy Policy', href: '#' }
            ]
        },
        {
            title: 'Follow Us',
            links: [
                { text: 'Facebook', href: '#' },
                { text: 'Twitter', href: '#' },
                { text: 'LinkedIn', href: '#' }
            ]
        },
        {
            title: 'Contact Us',
            content: `
                <p>Email: <a href="mailto:support@onboardly.com" class="footer-email">support@onboardly.com</a></p>
                <p>Phone: <span class="footer-phone">123-456-7890</span></p>
            `
        }
    ];

    footerSections.forEach(section => {
        const footerSection = document.createElement('div');
        footerSection.className = 'footer-section';

        const sectionTitle = document.createElement('h4');
        sectionTitle.textContent = section.title;

        footerSection.appendChild(sectionTitle);

        if (section.links) {
            const linksList = document.createElement('ul');
            linksList.className = section.title === 'Follow Us' ? 'social-media-list' : 'footer-links';

            section.links.forEach(link => {
                const listItem = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.href = link.href;
                anchor.className = section.title === 'Follow Us' ? 'social-link' : 'footer-link';
                anchor.textContent = link.text;

                listItem.appendChild(anchor);
                linksList.appendChild(listItem);
            });

            footerSection.appendChild(linksList);
        } else if (section.content) {
            const contentDiv = document.createElement('div');
            contentDiv.innerHTML = section.content;
            footerSection.appendChild(contentDiv);
        }

        footerContainer.appendChild(footerSection);
    });

    const footerBottom = document.createElement('div');
    footerBottom.className = 'footer-bottom';

    const footerText = document.createElement('p');
    footerText.innerHTML = '&copy; 2025 OnBoardly. All rights reserved.';

    footerBottom.appendChild(footerText);
    footer.appendChild(footerContainer);
    footer.appendChild(footerBottom);

    document.body.appendChild(footer);
}

// Call the functions to create header and footer
createHeader();
createFooter();
