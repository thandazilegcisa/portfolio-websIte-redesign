"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const gsapScript = document.createElement("script");
  gsapScript.src =
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";

  gsapScript.onload = () => {
    const indexScript = document.createElement("script");
    indexScript.src = "./JavaScript/index.js";
    document.head.appendChild(indexScript);
  };
  document.head.appendChild(gsapScript);
});
