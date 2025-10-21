// Change navbar style on scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("navbar");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Theme toggle button
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
