"use strict";

const overlayContainer = document.querySelector(".load-overlay-container");
const overlayBlack = document.querySelector(".overlay-container-black");
const tl = gsap.timeline();

function runLoader() {
  let initCounter = 0;

  function upadateLoader() {
    if (initCounter === 100) return;

    initCounter += Math.floor(Math.random() * 10) + 1;

    if (initCounter > 100) {
      initCounter = 100;
    }

    const delay = Math.floor(Math.random() * 325) + 25;
    console.log(initCounter);

    overlayContainer.style.width = `${initCounter}vw`;
    setTimeout(upadateLoader, delay);
  }

  upadateLoader();
}

runLoader();

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
    ease: "power3.inOut",
  });

// Text Animations : //

// ! Todo: Generate random colour upon mouseenter
// ? Place the colours that i want in an array and cycle through that array

let colousArray = ["#FEBC00", "#C95B00", "#0B1915", "#3EA88E", "#BAE7AE"];

const textSpan = document.querySelectorAll(".letterElement");
textSpan.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    const rndmIndex = Math.floor(Math.random() * colousArray.length) + 1;
    const rndmColour = colousArray[rndmIndex];

    e.style.cursor = "pointer";
    e.style.color = `${rndmColour}`;
  });

  e.addEventListener("mouseout", () => {
    e.style.color = "black";
  });
});
