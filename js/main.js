const navbarMobile = document.querySelector(".navbar-menu__mobile");
const navbar = document.querySelector(".navbar-wrapper");
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-wrapper li a");

navbarMobile.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navbarLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".navbar-wrapper li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});

const skillData = [
  {
    id: 1,
    name: "HTML",
    text: "Kerangka dasar dalam pembuatan website berupa tag atau markup.",
  },
  {
    id: 2,
    name: "CSS",
    text: "Stylesheet yang digunakan untuk membuat website lebih menarik dengan mengatur tag dari html.",
  },
  {
    id: 3,
    name: "JavaScript",
    text: "Bahasa Pemograman yang digunakan untuk membuat website lebih interaktif.",
  },
  {
    id: 4,
    name: "TailwindCSS",
    text: "Framework dari CSS yang menggunakan ultilities class.",
  },
  {
    id: 5,
    name: "ReactJS",
    text: "Library dari JavaScript yang digunakan untuk membuat website dari segi front-end.",
  },
];

const skills = document.querySelector("#skill-select");
const skillInfo = document.querySelector("#skill-info");
skillData.forEach((skill) => {
  const skillContainer = document.createElement("option");
  skillContainer.text = skill.name;
  skillContainer.value = skill.text;
  skills.appendChild(skillContainer);
});

skills.addEventListener("change", () => {
  skillInfo.innerText = skills.value;
});

const carousel = document.querySelector(".project-carousel");

let isDragging = false,
  startX,
  startScrollLeft;

const arrowBtns = document.querySelectorAll(".project-wrapper i");
const firstCardWidth = carousel.querySelector(".project-card").offsetWidth;

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});
