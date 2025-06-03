document.addEventListener("DOMContentLoaded", () => {
  const treatmentSelect = document.getElementById('treatment');
  const detailsInput = document.getElementById('treatment-details');

  if (treatmentSelect) {
    treatmentSelect.addEventListener('change', () => {
      detailsInput.style.display = treatmentSelect.value ? 'block' : 'none';
    });
  }
});

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
