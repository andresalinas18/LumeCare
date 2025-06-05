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

  // Abrir menú
  menuIcon?.addEventListener("click", openMenu);

  // Cerrar menú desde ícono interno
  drawerClose?.addEventListener("click", closeMenu);

  // Cerrar al hacer clic fuera (overlay)
  overlay?.addEventListener("click", closeMenu);

  // Cerrar al hacer clic en un enlace del menú
  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Opcional: tratamiento
  const treatmentSelect = document.getElementById('treatment');
  const detailsInput = document.getElementById('treatment-details');
  if (treatmentSelect && detailsInput) {
    treatmentSelect.addEventListener('change', () => {
      detailsInput.style.display = treatmentSelect.value ? 'block' : 'none';
    });
  }
});
