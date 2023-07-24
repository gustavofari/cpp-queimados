const nav = document.querySelector(".navbar");
// const btnMenu = document.querySelector(".btn-menu");
// const menu = document.querySelector(".nav-menu");

// function handleButtonClick(event) {
//   if (event.type === "touchstart") event.preventDefault();
//   event.stopPropagation();
//   nav.classList.toggle("active");
//   handleClickOutside(menu, () => {
//     nav.classList.remove("active");
//     setAria();
//   });
//   handleClickOutside(btnMenu, () => {
//     nav.classList.remove("active");
//     setAria();
//   });
//   setAria();
// }

// function handleClickOutside(targetElement, callback) {
//   const html = document.documentElement;
//   function handleHTMLClick(event) {
//     if (!targetElement.contains(event.target)) {
//       targetElement.removeAttribute("data-target");
//       html.removeEventListener("click", handleHTMLClick);
//       html.removeEventListener("touchstart", handleHTMLClick);
//       callback();
//     }
//   }
//   if (!targetElement.hasAttribute("data-target")) {
//     html.addEventListener("click", handleHTMLClick);
//     html.addEventListener("touchstart", handleHTMLClick);
//     targetElement.setAttribute("data-target", "");
//   }
// }

// function setAria() {
//   const isActive = nav.classList.contains("active");
//   btnMenu.setAttribute("aria-expanded", isActive);
//   if (isActive) {
//     btnMenu.setAttribute("aria-label", "Fechar Menu");
//   } else {
//     btnMenu.setAttribute("aria-label", "Abrir Menu");
//   }
// }

// btnMenu.addEventListener("click", handleButtonClick);
// btnMenu.addEventListener("touchstart", handleButtonClick);

function typeScreen(text, i = 0) {
  const element = document.getElementById("text-2");
  if (i < text.length) {
    element.textContent = text.slice(0, i + 1);
    setTimeout(() => typeScreen(text, i + 1), 103);
  }
}

function startTypingAnimation() {
  setTimeout(() => typeScreen("Políticas Públicas"), 0);
}

document.addEventListener("DOMContentLoaded", startTypingAnimation);

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 100)
  );
}
