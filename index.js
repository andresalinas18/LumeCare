/**
 * LumeCare - Main JavaScript File
 *
 * This script handles all client-side interactions for the website,
 * including mobile navigation, dynamic word animations, and the procedure modal.
 */

document.addEventListener("DOMContentLoaded", () => {

  /**
   * =================================================================
   * MOBILE NAVIGATION
   * Manages the slide-in menu for mobile devices.
   * =================================================================
   */
  const initMobileNav = () => {
    const header = document.querySelector('.header');
    const navToggleBtn = document.getElementById('mobile-menu-toggle');
    
    // Safety check: only run if the toggle button exists
    if (!navToggleBtn || !header) {
      console.warn("Mobile navigation elements not found.");
      return;
    }

    navToggleBtn.addEventListener('click', () => {
      header.classList.toggle('nav-open');
      document.body.classList.toggle('nav-open');
      
      // Update ARIA attribute for accessibility
      const isExpanded = navToggleBtn.getAttribute('aria-expanded') === 'true';
      navToggleBtn.setAttribute('aria-expanded', !isExpanded);
    });
  };

  /**
   * =================================================================
   * DYNAMIC WORD ANIMATION
   * Rotates a series of words in the hero section.
   * =================================================================
   */
  const initDynamicWords = () => {
    const wordSpan = document.getElementById("dynamic-word");
    if (!wordSpan) return; // Exit if the element doesn't exist

    const words = ["Empowered", "Radiant", "Serene", "Confident", "Timeless"];
    let currentIndex = 0;

    // Set initial state
    wordSpan.textContent = words[currentIndex];
    wordSpan.style.opacity = 1;

    setInterval(() => {
      wordSpan.style.opacity = 0; // Fade out

      // Wait for the fade-out transition to complete
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        wordSpan.textContent = words[currentIndex];
        wordSpan.style.opacity = 1; // Fade in
      }, 500); // This should match the CSS transition duration
    }, 2500);
  };

  /**
   * =================================================================
   * PROCEDURE MODAL
   * Handles opening and closing the details modal for procedure cards.
   * =================================================================
   */
  const initProcedureModal = () => {
    const flipCards = document.querySelectorAll('.flip-card');
    const modalOverlay = document.getElementById('procedure-modal');

    // Exit if essential modal elements are missing
    if (!modalOverlay || flipCards.length === 0) {
      console.warn("Modal or flip cards not found, modal logic skipped.");
      return;
    }
    
    const modalContent = modalOverlay.querySelector('.modal-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    const openModal = (card) => {
      const imageSrc = card.querySelector('.flip-card-front img')?.src;
      const titleText = card.querySelector('.flip-card-front h3')?.textContent;
      const descriptionText = card.querySelector('.flip-card-back p')?.textContent;

      if (imageSrc) modalImage.src = imageSrc;
      if (titleText) modalTitle.textContent = titleText;
      if (descriptionText) modalDescription.textContent = descriptionText;
      
      modalOverlay.classList.add('active');
      document.body.classList.add('modal-open');
    };

    const closeModal = () => {
      modalOverlay.classList.remove('active');
      document.body.classList.remove('modal-open');
    };

    // Event Listeners
    flipCards.forEach(card => card.addEventListener('click', () => openModal(card)));
    modalCloseBtn?.addEventListener('click', closeModal);
    
    // Close modal by clicking on the overlay backdrop
    modalOverlay.addEventListener('click', (event) => {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });

    // Close modal with the 'Escape' key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });
  };
  
  // --- Initialize all functionalities ---
  initMobileNav();
  initDynamicWords();
  initProcedureModal();

});