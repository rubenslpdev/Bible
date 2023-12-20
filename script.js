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

// API para compartilhar texto selecionado

Sharect.appendCustomShareButtons([
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 478.165 478.165"><path d="M478.165 232.946c0 128.567-105.057 232.966-234.679 232.966-41.102 0-79.814-10.599-113.445-28.969L0 478.165l42.437-125.04c-21.438-35.065-33.77-76.207-33.77-120.159C8.667 104.34 113.763 0 243.485 0c129.623 0 234.68 104.34 234.68 232.946zM243.485 37.098c-108.802 0-197.422 87.803-197.422 195.868 0 42.915 13.986 82.603 37.576 114.879l-24.586 72.542 75.849-23.968c31.121 20.481 68.457 32.296 108.583 32.296 108.723 0 197.323-87.843 197.323-195.908 0-107.886-88.6-195.709-197.323-195.709zM361.931 286.62c-1.395-2.331-5.22-3.746-10.898-6.814-5.917-2.849-34.089-16.497-39.508-18.37-5.16-1.913-8.986-2.849-12.811 2.829-4.005 5.638-14.903 18.629-18.23 22.354-3.546 3.785-6.854 4.264-12.552 1.435-5.618-2.809-24.267-8.866-46.203-28.391-17.055-15.042-28.67-33.711-31.997-39.508-3.427-5.758-.398-8.826 2.471-11.635 2.69-2.59 5.778-6.734 8.627-10.041 2.969-3.287 3.905-5.638 5.798-9.424 1.913-3.905.936-7.192-.478-10.141-1.415-2.849-13.01-30.881-17.752-42.337-4.841-11.416-9.543-9.523-12.871-9.523-3.467 0-7.212-.478-11.117-.478-3.785 0-10.041 1.395-15.381 7.192-5.2 5.658-20.123 19.465-20.123 47.597 0 28.052 20.601 55.308 23.55 59.053 2.869 3.785 39.747 63.197 98.303 86.07 58.476 22.872 58.476 15.321 69.115 14.365 10.38-.956 34.069-13.867 38.811-27.096 4.66-13.45 4.66-24.766 3.246-27.137z"/></svg>',
    url: "https://api.whatsapp.com/send?text=TEXT_SELECTION%20PAGE_URL",
  },
]);

Sharect.config({
  facebook: true,
  twitter: true,
  twitterUsername: "",
  backgroundColor: "#9c824b",
  iconColor: "#FFF",
  selectableElements: ["p"],
});

Sharect.init();

//Menu códice

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlR1ZSBEZWMgMDUgMjAyMyAxODo0MjoxMSBHTVQrMDAwMC5ydWJlbnNscEBnbWFpbC5jb20iLCJpYXQiOjE3MDE4MDE3MzF9.VZWPmcP0mX7Du7Gc3guXd_68HIvBE4c94BwvlkHAs60";

const divVT = document.getElementById("books-vt");
const divNT = document.getElementById("books-nt");
const divChaptersVT = document.getElementById("chapters-vt");
const divChaptersNT = document.getElementById("chapters-nt");

async function getBooks() {
  const api_url = "https://www.abibliadigital.com.br/api/books";

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(api_url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

let showingChapters = false;
let currentButton = null;

function showBooks() {
  getBooks().then((books) => {
    books.forEach((book) => {
      const btn = document.createElement("button");
      btn.textContent = book.name;
      btn.className = "dropdown-btn";

      if (book.testament === "VT") {
        divVT.appendChild(btn);
      } else {
        divNT.appendChild(btn);
      }

      btn.addEventListener("click", () => {
        divChaptersVT.innerHTML = "";
        divChaptersNT.innerHTML = "";

        const abbrev = book.abbrev.pt;
        const div = book.testament === "VT" ? divChaptersVT : divChaptersNT;

        if (showingChapters) {
          if (currentButton !== btn) {
            currentButton.nextElementSibling.remove();
            showChapters(abbrev, div, btn);
            currentButton = btn;
          } else {
            btn.nextElementSibling.remove();
            showingChapters = false;
            currentButton = null;
          }
        } else {
          showChapters(abbrev, div, btn);
          showingChapters = true;
          currentButton = btn;
        }
      });
    });
  });
}

function showChapters(abbrev, div, btn) {
  const api_url = `https://www.abibliadigital.com.br/api/books/${abbrev}`;

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  fetch(api_url, options)
    .then((response) => response.json())
    .then((data) => {
      const chapters = data.chapters;
      const divList = document.createElement("div");
      divList.setAttribute("class", "chapter-list");
      btn.insertAdjacentElement("afterend", divList);

      for (let i = 1; i <= chapters; i++) {
        const divItem = document.createElement("div");
        divItem.textContent = i;
        divItem.setAttribute("class", "chapter-item");
        divList.appendChild(divItem);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

showBooks();

// Right SIDE MENU

const dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    let icon = this.querySelector("i");

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    } else {
      dropdownContent.style.display = "block";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    }
  });
}
