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
let prevs = document.querySelectorAll(".prev");
let nexts = document.querySelectorAll(".next");
let listMem = document.querySelector(".member__list");
let listBlog = document.querySelector(".blog__list");

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

let blogPost = [
  {
    title: "Key Considerations for Regulatory Compliant.",
    desc: "It’s easy to think about medical care from a narrow perspective. You go to the hospital.",
  },
  {
    title: "Key Considerations for Regulatory Compliant.",
    desc: "Sed iusto aliquid enim est, explicabo minima beatae maiores perferendis, optio consequatur maxime",
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

function renderBlog(arr) {
  let template = arr.map((blog) => {
    return `<div class="blog__item">
  <figure class="blog__images">
    <img src="./assets/img/thuoc.webp" alt="" />
  </figure>
  <div class="item__content">
    <h3 class="item__heading">
      ${blog.title}
    </h3>
    <p class="item__desc">
      ${blog.desc}
    </p>
    <a href="#!" class="item__link">Learn More</a>
  </div>
  </div>`;
  });
  listBlog.innerHTML = template.join("");
}
renderBlog(blogPost);
let Item = document.querySelector(".member__item");
let widthItem = Item.offsetWidth;

function srcollNext(selector, width) {
  selector.scrollLeft += width;
}

function scrollPrev(selector, width) {
  selector.scrollLeft -= width;
}

prevs.forEach((prev) => {
  prev.addEventListener("click", () => {
    if (prev.classList.contains("blog__prev")) {
      scrollPrev(listBlog);
    } else {
      scrollPrev(listMem, widthItem);
    }
  });
});

nexts.forEach((next) => {
  next.addEventListener("click", () => {
    if (next.classList.contains("blog__next")) {
      srcollNext(listBlog);
    } else {
      srcollNext(listMem, widthItem);
    }
  });
});
