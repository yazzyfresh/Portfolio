// --- Scroll Fade for Sections ---
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("visible");
    }
  });

  // Show/hide Back to Top button
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

  // Navbar shrink effect
  const navbar = document.querySelector("nav");
  if (window.scrollY > 80) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

// --- Run fade-in on page load for hero ---
window.addEventListener("load", () => {
  const hero = document.querySelector("#hero");
  hero.classList.add("visible");
});

// --- Back to Top button functionality ---
const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
