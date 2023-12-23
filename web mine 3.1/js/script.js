// script.js
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector("header");

  if (currentScroll > lastScrollTop) {
    // Прокрутка вниз
    header.classList.add("hidden");
  } else {
    // Прокрутка вверх
    header.classList.remove("hidden");
  }

  lastScrollTop = currentScroll;
});
