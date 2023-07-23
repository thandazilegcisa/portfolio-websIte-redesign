"use strict";

// ! My Variables:

const overlayContainer = document.querySelector(".load-overlay-container");
const overlayBlack = document.querySelector(".overlay-container-black");
const counterElement = document.querySelector(".counter-element");
const mainContent = document.querySelector("#main-content");

const tl = gsap.timeline();

function runLoader() {
  let initialCounter = 0;

  function upadateLoader() {
    if (initialCounter === 100) return;

    initialCounter += Math.floor(Math.random() * 10) + 1;

    if (initialCounter > 95) {
      initialCounter = 100;
      mainContent.style.display = "block";
    } else {
      mainContent.style.display = "none";
    }

    const delay = Math.floor(Math.random() * 325) + 50;

    overlayContainer.style.width = `${initialCounter}vw`;
    counterElement.textContent = `${initialCounter}%`;
    setTimeout(upadateLoader, delay);
  }

  upadateLoader();
}
/* runLoader(); */

window.addEventListener("load", runLoader(), function () {
  mainContent.style.display = "block";
});

// Overylay Animations : //

tl.to(overlayContainer, {
  delay: 1,
  duration: 1.5,
  ease: "power2.out",
})
  .to(overlayContainer, {
    delay: 2,
    height: "100vh",
    duration: 1,
    ease: "power1.inOut",
  })
  .to(overlayBlack, 0, {
    display: "none",
    ease: "power2.easeIn",
  });

// Text Animations : //

// ! Todo: Generate random colour upon mouseenter
// ? Place the colours that i want in an array and cycle through that array

let coloursArray = ["#FEBC00", "#C95B00", "#0B1915", "#3EA88E", "#BAE7AE"];

const textSpan = document.querySelectorAll(".letterElement");
textSpan.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    const rndmIndex = Math.floor(Math.random() * coloursArray.length) + 1;
    const rndmColour = coloursArray[rndmIndex];

    e.style.cursor = "pointer";
    e.style.color = `${rndmColour}`;
  });

  e.addEventListener("mouseout", () => {
    e.style.color = "#676B67";
  });
});

// ! To Do: Add motion to text using gsap

const textElement = document.querySelectorAll(".letterElement");
const textAnimTl = gsap.timeline();

textAnimTl.to(textElement, {
  delay: 5,
  transform: "translateY(0%)",
  duration: 1,
  stagger: 0.05,
  ease: "power2.easeIn",
});

const navElement = document.querySelectorAll(".nav-element");
gsap.to(navElement, {
  delay: 5.5,
  transform: "translateY(0%)",
  duration: 0.5,
  stagger: 0.05,
  ease: "power2.easeIn",
});

const skillsItem = document.querySelectorAll(".skills-list-item");
gsap.to(skillsItem, {
  delay: 6,
  opacity: 1,
  duration: 1,
  ease: "power2.easIn",
});

const coorContainer = document.querySelector(".coordinates-container");
gsap.to(coorContainer, {
  delay: 6,
  opacity: 1,
  duration: 1,
  ease: "power2.easeIn",
});

/* Smooth Scroll Navigation */

const navParent = document.querySelector("#navigation");
console.log(navParent);
navParent.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    let moveToLocation = e.target.getAttribute("href");
    document
      .querySelector(moveToLocation)
      .scrollIntoView({ behavior: "smooth" });
  }
});

/* Interaction Observer Implementation: */

const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  gsap.to(entry.target, {
    delay: 0.25,
    opacity: 1,
    transform: "translateY(0%)",
    duration: 1.45,
    ease: "power2.easeIn",
  });
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.45,
  rootMargin: "168px",
});

let targetSection = document.querySelector(".about-section");
/* targetSection.style.opacity = 0;
targetSection.style.transform = "translateY(15%)"; */
sectionObserver.observe(targetSection);
