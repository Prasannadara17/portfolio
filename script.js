<<<<<<< HEAD
// Scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle burger menu (if used)
const burger = document.getElementById("burger-menu");
const navLinks = document.getElementById("nav-links");
if (burger && navLinks) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Typing effect using Typed.js
const typed = new typed("#typed-text", {
  strings: ["Web Developer", "Problem Solver"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Vanilla tilt effect on project cards
VanillaTilt.init(document.querySelectorAll(".project-card, .icon-card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.4
});
=======
// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });
>>>>>>> adb98bf4cf14737140509d9ffa740b4de96d6cf8
