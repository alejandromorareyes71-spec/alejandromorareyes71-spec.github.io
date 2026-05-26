const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const yearNode = document.getElementById('current-year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const setActiveLink = () => {
  const scrollPosition = window.scrollY + 120;
  let currentSectionId = '';

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentSectionId}`;
    link.classList.toggle('active', isActive);
  });
};

setActiveLink();
window.addEventListener('scroll', setActiveLink, { passive: true });



