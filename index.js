document.addEventListener("DOMContentLoaded", () => {
  const treatmentSelect = document.getElementById('treatment');
  const detailsInput = document.getElementById('treatment-details');

  if (treatmentSelect) {
    treatmentSelect.addEventListener('change', () => {
      detailsInput.style.display = treatmentSelect.value ? 'block' : 'none';
    });
  }
});

/* toogle menu */
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

 /*Close the toggle menu when clicked */
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
