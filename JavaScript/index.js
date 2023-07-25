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
  e.addEventListener("mouseenter", (enterEvent) => {
    const rndmIndex = Math.floor(Math.random() * coloursArray.length) + 1;
    const rndmColour = coloursArray[rndmIndex];
    e.style.cursor = "pointer";
    gsap.to(e, {
      color: `${rndmColour}`,
      duration: 0.5,
      ease: "power2.easeIn",
    });
  });
  e.addEventListener("mouseout", (outEvent) => {
    gsap.to(e, {
      delay: 2.5,
      color: "#676B67",
      duration: 0.5,
      ease: "power2.easeIn",
    });
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

const arrow = document.querySelector(".arrow");
gsap.to(arrow, {
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

/*! Interaction Observer Implementation: */

const valuesElement = document.querySelector(".values-element");
const eyeElement = document.querySelector(".eye-element");
const liveElement = document.querySelector(".live-element");
const byElement = document.querySelector("by-element");
const subTextContainer = document.querySelector(".text-container");

const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  const abtTimeline = gsap.timeline();

  abtTimeline.to(targetSection, {
    delay: 0.25,
    opacity: 1,
    transform: "translateY(0%)",
    duration: 0.5,
    ease: "power1.out",
  }),
    abtTimeline.to(subTextContainer, {
      left: "45%",
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    }),
    abtTimeline.to(valuesElement, {
      x: "95%",
      duration: 0.45,
      ease: "power1.out",
    }),
    abtTimeline.to(eyeElement, {
      x: "75%",
      duration: 0.55,
      ease: "power1.out",
    }),
    abtTimeline.to(liveElement, {
      x: "50%",
      duration: 0.65,
      ease: "power1.out",
    });
  observer.unobserve(targetSection);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.45,
  rootMargin: "168px",
});

let targetSection = document.querySelector(".about-section");
sectionObserver.observe(targetSection);

/* Accordion: */

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("show");
    console.log("clicked");
  });
});
