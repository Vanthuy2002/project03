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
let gap = 30;

function srcollNext(selector, width) {
  selector.scrollLeft += width;
}

function scrollPrev(selector, width) {
  selector.scrollLeft -= width + gap;
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

//validate
let form = document.querySelector("form");
let input = form.querySelector("input[type=text]");
let mess = form.querySelector(".form__mess");
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.match(mailFormat)) {
    mess.textContent = "Your email is valid";
  }
  mess.textContent = "You email is invalid";
  if (input.value.length === 0) {
    mess.textContent = "";
  }
});

let btnHero = document.querySelectorAll(".hero__btn");
btnHero.forEach((btn) => {
  btn.onclick = () => {
    showToast();
  };
});

// toast message
function toast({ title, mess, type, delay }) {
  const main = document.getElementById("toastAll");

  if (main) {
    const toast = document.createElement("div");

    // auto remove toast
    const removeTime = setTimeout(() => {
      main.removeChild(toast);
    }, delay + 1000);

    //remove with action
    toast.addEventListener("click", (e) => {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(removeTime);
      }
    });

    const icons = { success: "fa-solid fa-circle-check" };
    const delaySecond = (delay / 1000).toFixed(2);

    toast.classList.add("toast", `toast__${type}`);
    toast.style.animation = `slideIn ease 0.3s , fadeOut linear 1s ${delaySecond}s forwards`;
    toast.innerHTML = `
          <div class="toast__icon">
              <i class="${icons[type]}"></i>
          </div>
          <div class="toast__container">
              <h3 class="toast__title">${title}</h3>
              <p class="toast__msg">${mess}</p>
          </div>
          <div class="toast__close">
              <i class="fa-solid fa-circle-xmark"></i>
          </div> `;
    main.appendChild(toast);
  }
}

function showToast() {
  toast({
    title: "You Passed",
    mess: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    type: "success",
    delay: 5000,
  });
}
