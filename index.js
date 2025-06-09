document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("menu-overlay");
  const drawerClose = document.getElementById("drawer-close");

  function openMenu() {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  menuIcon?.addEventListener("click", openMenu);


  drawerClose?.addEventListener("click", closeMenu);

  overlay?.addEventListener("click", closeMenu);


  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });


  const treatmentSelect = document.getElementById('treatment');
  const detailsInput = document.getElementById('treatment-details');
  if (treatmentSelect && detailsInput) {
    treatmentSelect.addEventListener('change', () => {
      detailsInput.style.display = treatmentSelect.value ? 'block' : 'none';
    });
  }

  // Rotating words with smooth fade
  const words = ["Empowered", "Radiant", "Serene", "Confident", "Timeless"];
  let index = 0;
  const wordSpan = document.getElementById("dynamic-word");
  wordSpan.textContent = words[0];
  wordSpan.classList.add("fade-in");

  setInterval(() => {
    wordSpan.classList.remove("fade-in");
    // Force reflow to restart the animation
    void wordSpan.offsetWidth;
    index = (index + 1) % words.length;
    wordSpan.textContent = words[index];
    wordSpan.classList.add("fade-in");
  }, 2500);

  // --- Modal Interaction Logic ---


  const flipCards = document.querySelectorAll('.flip-card');
  const modalOverlay = document.getElementById('procedure-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalApplyBtn = document.querySelector('.modal-apply-btn');


  const openModal = (card) => {

    const imageSrc = card.querySelector('.flip-card-front img').src;
    const titleText = card.querySelector('.flip-card-front h3').textContent;
    const descriptionText = card.querySelector('.flip-card-back p').textContent;


    modalImage.src = imageSrc;
    modalTitle.textContent = titleText;
    modalDescription.textContent = descriptionText;


    modalOverlay.classList.add('active');
    document.body.classList.add('modal-open'); 
  };


  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-open'); 
  };


  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      openModal(card);
    });
  });


  modalCloseBtn.addEventListener('click', closeModal);
  

  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });


  modalApplyBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

});