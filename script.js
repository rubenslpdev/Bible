// ======
// MENU
// ======

// Left SIDE NAVIGATION MENU

const mySidevav = document.getElementById("mySidenav");
const sidenavOverlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closebtn");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  mySidevav.style.width = "250px";
  document.body.style.overflow = "hidden";
  sidenavOverlay.classList.add("open-overlay");
});

closeBtn.addEventListener("click", () => {
  mySidevav.style.width = "0";
  document.body.style.overflow = "auto";
  sidenavOverlay.classList.remove("open-overlay");
});

sidenavOverlay.addEventListener("click", () => {
  mySidevav.style.width = "0";
  document.body.style.overflow = "auto";
  sidenavOverlay.classList.remove("open-overlay");
});

mySidevav.addEventListener("click", (e) => {
  e.stopPropagation();
});

// RIGHT SIDE NAVIGATION

const mySearchnav = document.getElementById("mySearchnav");
const searchBtn = document.querySelector(".fa-rectangle-list");
const closeSearchBtn = document.querySelector(".search-closebtn");

searchBtn.addEventListener("click", () => {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;

  if (isMobile) {
    mySearchnav.style.width = "100%";
  } else {
    mySearchnav.style.width = "450px";
  }

  document.body.style.overflow = "hidden";
  mySearchnav.style.overflow = "auto";
  sidenavOverlay.classList.add("open-overlay");
});

closeSearchBtn.addEventListener("click", () => {
  mySearchnav.style.width = "0";
  document.body.style.overflow = "auto";
  mySearchnav.style.overflow = "hidden";
  sidenavOverlay.classList.remove("open-overlay");
});

sidenavOverlay.addEventListener("click", () => {
  mySearchnav.style.width = "0";
  document.body.style.overflow = "auto";
  mySearchnav.style.overflow = "hidden";
  sidenavOverlay.classList.remove("open-overlay");
});

mySearchnav.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Dark MODE

const btnDarkMode = document.getElementById("check");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") {
  document.body.classList.add("dark");
  btnDarkMode.checked = true;
}

btnDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else window.localStorage.setItem("theme", "dark");
});

// Top hidden on scroll
let lastScrollTop;
navbar = document.getElementById("header");
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-70px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// Right SIDE MENU
const dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
