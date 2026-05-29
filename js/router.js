document.addEventListener("DOMContentLoaded", function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    if (currentPath.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

  const toggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-links");
  if (toggle && navMenu) {
    toggle.addEventListener("click", function() {
      navMenu.classList.toggle("open");
    });
  }
});
