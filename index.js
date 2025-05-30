document.addEventListener("DOMContentLoaded", () => {
  const treatmentSelect = document.getElementById('treatment');
  const detailsInput = document.getElementById('treatment-details');

  if (treatmentSelect) {
    treatmentSelect.addEventListener('change', () => {
      detailsInput.style.display = treatmentSelect.value ? 'block' : 'none';
    });
  }
});