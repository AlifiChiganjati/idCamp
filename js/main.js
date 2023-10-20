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
