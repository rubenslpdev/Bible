// Função para calcular tempo de leitura
function readingTime() {
  const text = document.getElementById("content-container").innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  document.getElementById("time").innerText = time;
}

// Função para carregar o próximo capítulo
function loadNextChapter() {
  const params = new URLSearchParams(window.location.search);
  const livro = params.get("livro");
  const capitulo = params.get("capitulo");

  if (livro && capitulo) {
    const nextChapterNumber = Number(capitulo) + 1;
    window.location.href = `testamento.html?livro=${livro}&capitulo=${nextChapterNumber}`;
  } else {
    console.log("Parâmetros livro e capitulo não foram fornecidos na URL");
  }
}

// Função para carregar o capítulo anterior
function loadPreviousChapter() {
  const params = new URLSearchParams(window.location.search);
  const livro = params.get("livro");
  const capitulo = params.get("capitulo");

  if (livro && capitulo) {
    const previousChapterNumber = Number(capitulo) - 1;
    if (previousChapterNumber > 0) {
      window.location.href = `testamento.html?livro=${livro}&capitulo=${previousChapterNumber}`;
    } else {
      console.log("Não há capítulo anterior disponível");
    }
  } else {
    console.log("Parâmetros livro e capitulo não foram fornecidos na URL");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("next-btn");
  const previousButton = document.getElementById("previous-btn");

  nextButton.addEventListener("click", loadNextChapter);
  previousButton.addEventListener("click", loadPreviousChapter);

  const params = new URLSearchParams(window.location.search);
  const livro = params.get("livro");
  const capitulo = params.get("capitulo");

  if (livro && capitulo) {
    const apiUrlBooks = "https://www.abibliadigital.com.br/api/books";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlR1ZSBEZWMgMDUgMjAyMyAxODo0MjoxMSBHTVQrMDAwMC5ydWJlbnNscEBnbWFpbC5jb20iLCJpYXQiOjE3MDE4MDE3MzF9.VZWPmcP0mX7Du7Gc3guXd_68HIvBE4c94BwvlkHAs60";

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(apiUrlBooks, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Não foi possível obter a lista de livros");
        }
        return response.json();
      })
      .then((dataBooks) => {
        const livroAtual = dataBooks.find((livroInfo) => livroInfo.abbrev.pt === livro);

        if (livroAtual) {
          if (capitulo >= livroAtual.chapters) {
            nextButton.style.visibility = "hidden";
          }

          if (capitulo <= 1) {
            previousButton.style.visibility = "hidden";
          }
        } else {
          console.error("Livro não encontrado na lista de livros");
        }
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });

    const apiUrl = `https://www.abibliadigital.com.br/api/verses/nvi/${livro}/${capitulo}`;

    fetch(apiUrl, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Não foi possível obter os versículos");
        }
        return response.json();
      })
      .then((data) => {
        const versesContainer = document.getElementById("content-container");
        if (data && data.verses && versesContainer) {
          const bookName = document.querySelector(".book-name");
          const chapterNumber = document.querySelector(".chapter-number");

          bookName.textContent = data.book.name;
          chapterNumber.textContent = `${data.chapter.number}`;

          const verses = data.verses;

          verses.forEach((verse) => {
            const verseElement = document.createElement("p");
            const verseNumberSpan = document.createElement("span");
            const verseNumberSup = document.createElement("sup");

            verseNumberSup.textContent = verse.number;

            verseElement.classList.add("verse-txt");

            verseNumberSpan.classList.add("verse-number");

            verseNumberSpan.appendChild(verseNumberSup);

            verseElement.appendChild(verseNumberSpan);

            verseElement.insertAdjacentText("beforeend", ` ${verse.text}`);
            verseElement.style.marginBottom = "1.5rem";

            versesContainer.appendChild(verseElement);
          });

          readingTime();
        }

        const nextChapterNumber = data.chapter.number + 1;
        if (!nextChapterNumber) {
          nextButton.style.visibility = "hidden";
        }

        if (data.chapter.number <= 1) {
          previousButton.style.visibility = "hidden";
        }
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  } else {
    console.error("Parâmetros livro e capitulo não foram fornecidos na URL");
  }
});
