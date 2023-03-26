let navLinks = document.querySelectorAll(".navbar__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    [...navLinks].forEach((item) => {
      item.classList.remove("navbar__item--active");
    });
    link.classList.add("navbar__item--active");
  });
});

let workItems = document.querySelectorAll(".work__item");
workItems.forEach((item) => {
  item.addEventListener("mousemove", () => {
    [...workItems].forEach((value) => {
      value.classList.remove("work__item--active");
    });
    item.classList.add("work__item--active");
  });
});
