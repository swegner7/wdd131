const books = [
  {
    releaseDate: "July 5, 2022",
    ages: "10-14",
    genre: "Fantasy",
    rating: "⭐⭐⭐⭐",
    title: "Septimus Heap Book One: Magyk",
    cover: "septimusbookone.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro incidunt ab culpa.",
  },
  {
    releaseDate: "December 12, 2021",
    ages: "10-14",
    genre: "Fantasy",
    rating: "⭐⭐⭐⭐",
    title: "Magnus Chase Book One: The Sword of Summer",
    cover: "magnuschase.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro incidunt ab culpa.",
  },
  {
    releaseDate: "February 12, 2022",
    ages: "12-16",
    genre: "Fantasy",
    rating: "⭐⭐⭐⭐",
    title: "Belgaraid Book One: Pawn of Prophecy",
    cover: "belgaraid.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro incidunt ab culpa.",
  },
];
let mainElement = document.querySelector("main");

books.forEach((book) => {
  let newArticle = document.createElement("article");
  newArticle.classList.add("book");

  let bookHTML = `
  <section class="bookEntry">
    <div class="entryPart1">
      <p class="releaseDate">${book.releaseDate}</p>
      <p class="ages">${book.ages}</p>
      <p class="genre">${book.genre}</p>
      <p class="rating">${book.rating}</p>
    </div>
   <div class="entryPart2">
      <h2 class="title">${book.title}</h2>
      <img class="cover" src="${book.cover}" alt="Book Cover" />
      <p class="description">
        ${book.description}<a href="">Read More...</a>
      </p>
    </div>
  </section>`;

  newArticle.innerHTML = bookHTML;

  mainElement.appendChild(newArticle);
});
