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

//slider
let prev = document.querySelector(".slide__btn.prev");
let next = document.querySelector(".slide__btn.next");
let listMem = document.querySelector(".member__list");

let member = [
  {
    name: "Dr. Essence Page",
    img: "./assets/img/model3.webp",
    job: "DDS, Ohio - Linda University",
  },
  {
    name: "Doctor Squid",
    img: "./assets/img/mdel1.jpeg",
    job: "DDS, Ohio - Linda University",
  },
  {
    name: "Yua Miami",
    img: "./assets/img/model2.jpeg",
    job: "DDS, Ohio - Linda University",
  },
  {
    name: "Dr. Essence Page",
    img: "./assets/img/model4.webp",
    job: "DDS, Ohio - Linda University",
  },
  {
    name: "Emi Fukuda",
    img: "./assets/img/model2.jpeg",
    job: "DDS, Ohio - Linda University",
  },
  {
    name: "Dr. Essence Page",
    img: "./assets/img/model4.webp",
    job: "DDS, Ohio - Linda University",
  },
  {
    name: "Mazia Orawoa",
    img: "./assets/img/model2.jpeg",
    job: "DDS, Ohio - Linda University",
  },
];

function render(arr) {
  let html = arr.map((item) => {
    return `<div class="member__item">
    <figure class="member__images">
      <img src=${item.img} alt="" />
    </figure>
    <h3 class="member__name">${item.name}</h3>
    <p class="member__education">
     ${item.job}
    </p>
  </div>`;
  });
  listMem.innerHTML = html.join("");
}
render(member);
let Item = document.querySelector(".member__item");
let widthItem = Item.offsetWidth;

function srcollNext() {
  listMem.scrollLeft += widthItem;
}

function scrollPrev() {
  listMem.scrollLeft -= widthItem;
}

next.onclick = () => {
  srcollNext();
};

prev.onclick = () => {
  scrollPrev();
};
