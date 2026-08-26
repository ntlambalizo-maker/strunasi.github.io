const header = document.querySelector(".site-header");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("menu-open");
  menuBtn.textContent = header.classList.contains("menu-open") ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => header.classList.remove("menu-open"));
});
