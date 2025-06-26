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

  /*
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
      return;
    }
    

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
      document.body.style.overflow = 'hidden'; 
    };

    const closeModal = () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
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
/**
   * =================================================================
   * VALUE CAROUSEL
   * Manages the interactive card carousel in the "About Us" section.
   * =================================================================
   */
  const initValueCarousel = () => {
  const container = document.querySelector('.value-carousel-container');
  const cards = document.querySelectorAll('.value-carousel-card');
  let activeCard = cards[0];
  let hoverTimeout;

  activeCard.classList.add('active');

  const activateCard = (card) => {
    if (card === activeCard) return;
    activeCard.classList.remove('active');
    card.classList.add('active');
    activeCard = card;
  };

  const debouncedActivate = (card) => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => activateCard(card), 80);
  };

  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      if (window.innerWidth > 768) debouncedActivate(card);
    });

    card.addEventListener('click', () => {
      if (window.innerWidth <= 768) activateCard(card);
    });
  });
};

  
  // --- Initialize all functionalities ---
  initMobileNav();
  initProcedureModal();
  initValueCarousel();

});