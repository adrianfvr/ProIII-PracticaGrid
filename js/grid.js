document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu button");
  const sections = document.querySelectorAll(".section");
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");

      // Cambiar sección activa
      sections.forEach((section) => section.classList.remove("active"));
      const targetSection = document.getElementById(targetId);
      if (targetSection) targetSection.classList.add("active");

      // Cambiar botón activo
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  // Menú hamburguesa
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Establecer boton activo al iniciar la pagina
  const initialSection =
    document.querySelector(".section.active") ||
    document.getElementById("section-fullbleed");

  const initialButton = Array.from(buttons).find(
    (btn) => btn.getAttribute("data-target") === initialSection?.id
  );

  if (initialButton) initialButton.classList.add("active");
});
