// ======
// MENU
// ======

// SIDE NAVIGATION

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

// SEARCH NAVIGATION

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
