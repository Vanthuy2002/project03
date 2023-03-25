let navLinks = document.querySelectorAll(".navbar__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    [...navLinks].forEach((item) => {
      item.classList.remove("navbar__item--active");
    });
    link.classList.add("navbar__item--active");
  });
});
