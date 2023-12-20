// Random verse HOME

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlR1ZSBEZWMgMDUgMjAyMyAxODo0MjoxMSBHTVQrMDAwMC5ydWJlbnNscEBnbWFpbC5jb20iLCJpYXQiOjE3MDE4MDE3MzF9.VZWPmcP0mX7Du7Gc3guXd_68HIvBE4c94BwvlkHAs60";

// Lista de endpoints dos versos selecionados
const listaDeVersos = [
  "https://www.abibliadigital.com.br/api/verses/nvi/gn/1/1",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/13/32",
  "https://www.abibliadigital.com.br/api/verses/nvi/hb/4/15",
  "https://www.abibliadigital.com.br/api/verses/nvi/is/55/8",
  "https://www.abibliadigital.com.br/api/verses/nvi/mt/5/16",
  "https://www.abibliadigital.com.br/api/verses/nvi/sl/133/1",
  "https://www.abibliadigital.com.br/api/verses/nvi/sl/133/2",
  "https://www.abibliadigital.com.br/api/verses/nvi/sl/133/3",
  "https://www.abibliadigital.com.br/api/verses/nvi/mt/22/37",
  "https://www.abibliadigital.com.br/api/verses/nvi/cl/3/23",
  "https://www.abibliadigital.com.br/api/verses/nvi/mt/28/18",
  "https://www.abibliadigital.com.br/api/verses/nvi/js/1/8",
  "https://www.abibliadigital.com.br/api/verses/nvi/1pe/2/24",
  "https://www.abibliadigital.com.br/api/verses/nvi/is/26/3",
  "https://www.abibliadigital.com.br/api/verses/nvi/at/4/12",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/3/17",
  "https://www.abibliadigital.com.br/api/verses/nvi/sl/37/4",
  "https://www.abibliadigital.com.br/api/verses/nvi/hb/4/16",
  "https://www.abibliadigital.com.br/api/verses/nvi/fp/1/6",
  "https://www.abibliadigital.com.br/api/verses/nvi/2pe/1/4",
  "https://www.abibliadigital.com.br/api/verses/nvi/hb/10/25",
  "https://www.abibliadigital.com.br/api/verses/nvi/rm/8/39",
  "https://www.abibliadigital.com.br/api/verses/nvi/rm/8/38",
  "https://www.abibliadigital.com.br/api/verses/nvi/tg/1/3",
  "https://www.abibliadigital.com.br/api/verses/nvi/tg/1/12",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/1/12",
  "https://www.abibliadigital.com.br/api/verses/nvi/rm/10/17",
  "https://www.abibliadigital.com.br/api/verses/nvi/mq/6/8",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/15/13",
  "https://www.abibliadigital.com.br/api/verses/nvi/hb/4/12",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/14/27",
  "https://www.abibliadigital.com.br/api/verses/nvi/1jo/3/16",
  "https://www.abibliadigital.com.br/api/verses/nvi/1co/6/19",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/1/1",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/15/13",
  "https://www.abibliadigital.com.br/api/verses/nvi/fp/4/19",
  "https://www.abibliadigital.com.br/api/verses/nvi/at/17/11",
  "https://www.abibliadigital.com.br/api/verses/nvi/tg/5/16",
  "https://www.abibliadigital.com.br/api/verses/nvi/hb/11/1",
  "https://www.abibliadigital.com.br/api/verses/nvi/cl/3/12",
  "https://www.abibliadigital.com.br/api/verses/nvi/gn/1/27",
  "https://www.abibliadigital.com.br/api/verses/nvi/mt/11/30",
  "https://www.abibliadigital.com.br/api/verses/nvi/ef/3/20",
  "https://www.abibliadigital.com.br/api/verses/nvi/at/2/38",
  "https://www.abibliadigital.com.br/api/verses/nvi/is/53/6",
  "https://www.abibliadigital.com.br/api/verses/nvi/tg/1/2",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/5/24",
  "https://www.abibliadigital.com.br/api/verses/nvi/hb/11/6",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/11/25",
  "https://www.abibliadigital.com.br/api/verses/nvi/rm/15/13",
  "https://www.abibliadigital.com.br/api/verses/nvi/2co/5/21",
  "https://www.abibliadigital.com.br/api/verses/nvi/is/53/4",
  "https://www.abibliadigital.com.br/api/verses/nvi/2tm/1/7",
  "https://www.abibliadigital.com.br/api/verses/nvi/at/1/8",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/16/33",
  "https://www.abibliadigital.com.br/api/verses/nvi/mt/11/29",
  "https://www.abibliadigital.com.br/api/verses/nvi/gn/1/26",
  "https://www.abibliadigital.com.br/api/verses/nvi/is/41/10",
  "https://www.abibliadigital.com.br/api/verses/nvi/rm/10/9",
  "https://www.abibliadigital.com.br/api/verses/nvi/2co/12/9",
  "https://www.abibliadigital.com.br/api/verses/nvi/hb/13/5",
  "https://www.abibliadigital.com.br/api/verses/nvi/mt/11/28",
  "https://www.abibliadigital.com.br/api/verses/nvi/1co/10/13",
  "https://www.abibliadigital.com.br/api/verses/nvi/ef/2/10",
  "https://www.abibliadigital.com.br/api/verses/nvi/1pe/5/7",
  "https://www.abibliadigital.com.br/api/verses/nvi/hb/12/2",
  "https://www.abibliadigital.com.br/api/verses/nvi/2co/5/17",
  "https://www.abibliadigital.com.br/api/verses/nvi/mt/6/33",
  "https://www.abibliadigital.com.br/api/verses/nvi/2tm/3/16",
  "https://www.abibliadigital.com.br/api/verses/nvi/1pe/3/15",
  "https://www.abibliadigital.com.br/api/verses/nvi/is/53/5",
  "https://www.abibliadigital.com.br/api/verses/nvi/gl/5/23",
  "https://www.abibliadigital.com.br/api/verses/nvi/rm/6/23",
  "https://www.abibliadigital.com.br/api/verses/nvi/ef/2/9",
  "https://www.abibliadigital.com.br/api/verses/nvi/is/40/31",
  "https://www.abibliadigital.com.br/api/verses/nvi/js/1/9",
  "https://www.abibliadigital.com.br/api/verses/nvi/fp/4/7",
  "https://www.abibliadigital.com.br/api/verses/nvi/fp/4/8",
  "https://www.abibliadigital.com.br/api/verses/nvi/rm/5/8",
  "https://www.abibliadigital.com.br/api/verses/nvi/mt/28/20",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/14/6",
  "https://www.abibliadigital.com.br/api/verses/nvi/rm/3/23",
  "https://www.abibliadigital.com.br/api/verses/nvi/1jo/1/9",
  "https://www.abibliadigital.com.br/api/verses/nvi/gl/2/20",
  "https://www.abibliadigital.com.br/api/verses/nvi/at/18/11",
  "https://www.abibliadigital.com.br/api/verses/nvi/at/18/9",
  "https://www.abibliadigital.com.br/api/verses/nvi/at/18/10",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/10/10",
  "https://www.abibliadigital.com.br/api/verses/nvi/rm/12/1",
  "https://www.abibliadigital.com.br/api/verses/nvi/gl/5/22",
  "https://www.abibliadigital.com.br/api/verses/nvi/ef/2/8",
  "https://www.abibliadigital.com.br/api/verses/nvi/mt/28/19",
  "https://www.abibliadigital.com.br/api/verses/nvi/fp/4/6",
  "https://www.abibliadigital.com.br/api/verses/nvi/rm/12/2",
  "https://www.abibliadigital.com.br/api/verses/nvi/pv/3/6",
  "https://www.abibliadigital.com.br/api/verses/nvi/pv/3/5",
  "https://www.abibliadigital.com.br/api/verses/nvi/fp/4/13",
  "https://www.abibliadigital.com.br/api/verses/nvi/rm/8/28",
  "https://www.abibliadigital.com.br/api/verses/nvi/jr/29/11",
  "https://www.abibliadigital.com.br/api/verses/nvi/jo/3/16",
];

function selecionarVersoAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * listaDeVersos.length);
  return listaDeVersos[indiceAleatorio];
}

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

    document.getElementById("ver-rand-cap").textContent = `${verseData.book.name} ${verseData.chapter}:${verseData.number}`;
    document.getElementById("ver-rand").textContent = verseData.text;
  } catch (error) {
    console.error("Erro ao buscar verso bíblico:", error);
    document.getElementById("ver-rand-cap").textContent = "Erro";
    document.getElementById("ver-rand").textContent = "Erro ao carregar verso.";
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("random-btn").addEventListener("click", fetchSelectedBibleVerse);
  fetchSelectedBibleVerse();
});
