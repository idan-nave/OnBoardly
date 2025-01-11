// import '../styles/footer.css'; // will be imported in each page for top-level rendering requirements

// Footer Component
export const Footer = () => {
  const footerElement = document.createElement('footer');
  footerElement.classList.add('footer');

  const p = document.createElement('p');
  p.textContent = `© ${new Date().getFullYear()} OnBoardly. All Rights Reserved.`;

  footerElement.appendChild(p);
  return footerElement;
};

export default Footer;
