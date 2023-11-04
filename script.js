// ======
// MENU
// ======

// SIDE NAVIGATION
const mySidevav = document.getElementById("mySidenav");
const sidenavOverlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closebtn");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
  mySidevav.style.width = "250px";
  sidenavOverlay.classList.add("open-overlay");
});

closeBtn.addEventListener("click", function () {
  mySidevav.style.width = "0";
  sidenavOverlay.classList.remove("open-overlay");
});

sidenavOverlay.addEventListener("click", function () {
  mySidevav.style.width = "0";
  sidenavOverlay.classList.remove("open-overlay");
});

mySidevav.addEventListener("click", function (e) {
  e.stopPropagation();
});

// SEARCH NAVIGATION
const mySearchnav = document.getElementById("mySearchnav");
const searchBtn = document.querySelector(".fa-rectangle-list");
const closeSearchBtn = document.querySelector(".search-closebtn");

searchBtn.addEventListener("click", function () {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;

  if (isMobile) {
    mySearchnav.style.width = "100%";
  } else {
    mySearchnav.style.width = "450px";
  }

  document.body.style.overflowY = "hidden";
  sidenavOverlay.classList.add("open-overlay");
});

closeSearchBtn.addEventListener("click", function () {
  mySearchnav.style.width = "0";
  setTimeout(function () {
    document.body.style.overflowY = "auto";
  }, 450);
  sidenavOverlay.classList.remove("open-overlay");
});

sidenavOverlay.addEventListener("click", function () {
  mySearchnav.style.width = "0";
  setTimeout(function () {
    document.body.style.overflowY = "auto";
  }, 450);
  sidenavOverlay.classList.remove("open-overlay");
});

mySearchnav.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Dark MODE

const btnDarkMode = document.getElementById("check");
const theme = window.localStorage.getItem("theme");
// const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

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

// if (prefersDarkTheme.matches) {
//   document.body.classList.add("dark");
//   btnDarkMode.checked = true;
// }
