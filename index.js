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
   * =================================================================
   */
  const initMobileNav = () => {
    const header = document.querySelector('.header');
    const navToggleBtn = document.getElementById('mobile-menu-toggle');
    
    if (!navToggleBtn || !header) {
      console.warn("Mobile navigation elements not found.");
      return;
    }

    navToggleBtn.addEventListener('click', () => {
      header.classList.toggle('nav-open');
      document.body.classList.toggle('nav-open');
      
      const isExpanded = navToggleBtn.getAttribute('aria-expanded') === 'true';
      navToggleBtn.setAttribute('aria-expanded', !isExpanded);
    });
  };


  /**
   * =================================================================
   * VALUE CAROUSEL
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

   /* =================================================================
   * PROCEDURES ACCORDION
   * =================================================================
   */

  const initProcedureAccordion = () => {
    const cards = document.querySelectorAll(".procedure-card");
    if (!cards || cards.length === 0) return;

    let activeCard = null;

    const toggleCard = (card) => {
      if (card === activeCard) {
        card.classList.remove("active");
        activeCard = null;
      } else {
        if (activeCard) activeCard.classList.remove("active");
        card.classList.add("active");
        activeCard = card;
      }
    };

    cards.forEach((card) => {
      card.addEventListener("click", (event) => {
        event.stopPropagation(); 
        toggleCard(card);
      });
    });

    document.addEventListener("click", (event) => {
      if (activeCard && !event.target.closest(".procedure-card")) {
        activeCard.classList.remove("active");
        activeCard = null;
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && activeCard) {
        activeCard.classList.remove("active");
        activeCard = null;
      }
    });
  };
  
  // --- Initialize all functionalities ---
  initMobileNav();
  initValueCarousel();
  initProcedureAccordion();

});