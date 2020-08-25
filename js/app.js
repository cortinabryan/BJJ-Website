const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const containerEl = document.querySelector(".container");
const hamburgerBarsEl = document.getElementsByTagName("span");

console.log(navTriggerEl);

function toggleNav() {
  navTriggerEl.addEventListener("click", function () {
    navEl.classList.toggle("open");
    containerEl.classList.toggle("shift");
    animateHamburger();
  });
}

function animateHamburger() {
  for (let span of hamburgerBarsEl) {
    span.classList.toggle("change");
  }
}

toggleNav();
