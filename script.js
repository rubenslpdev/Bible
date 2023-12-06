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

// Random verse HOME

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlR1ZSBEZWMgMDUgMjAyMyAxODo0MjoxMSBHTVQrMDAwMC5ydWJlbnNscEBnbWFpbC5jb20iLCJpYXQiOjE3MDE4MDE3MzF9.VZWPmcP0mX7Du7Gc3guXd_68HIvBE4c94BwvlkHAs60";

// Lista de endpoints dos versos selecionados
const listaDeVersos = [
  "https://www.abibliadigital.com.br/api/verses/nvi/gn/1/1",
  "https://www.abibliadigital.com.br/api/verses/nvi/gn/1/2",
  "https://www.abibliadigital.com.br/api/verses/nvi/gn/1/3",
  "https://www.abibliadigital.com.br/api/verses/nvi/gn/1/4",
  "https://www.abibliadigital.com.br/api/verses/nvi/gn/1/5",
  // Adicione mais endpoints conforme necessário
];

// Função para selecionar um endpoint aleatório da lista
function selecionarVersoAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * listaDeVersos.length);
  return listaDeVersos[indiceAleatorio];
}

// Função assíncrona para buscar um verso bíblico do endpoint selecionado
async function fetchSelectedBibleVerse() {
  const versoSelecionado = selecionarVersoAleatorio();
  try {
    const response = await fetch(versoSelecionado, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const verseData = await response.json();
    // Atualiza o conteúdo das divs com as informações do verso
    document.getElementById("ver-rand-cap").textContent = `${verseData.book.name} ${verseData.chapter}:${verseData.number}`;
    document.getElementById("ver-rand").textContent = verseData.text;
  } catch (error) {
    console.error("Erro ao buscar verso bíblico:", error);
    document.getElementById("ver-rand-cap").textContent = "Erro";
    document.getElementById("ver-rand").textContent = "Erro ao carregar verso.";
  }
}

// Adiciona evento de clique ao botão e chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("random-btn").addEventListener("click", fetchSelectedBibleVerse);
  fetchSelectedBibleVerse();
});
