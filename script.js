/*
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();

const book = getBook(3);
book;

// const {
//   publicationDate,
//   translations,
//   genres,
//   pages,
//   hasMovieAdaptation,
//   author,
// } = book;

/*




console.log(publicationDate, translations);

const sid = genres;
console.log(sid);
const vishen = [...genres, "elephant"];
console.log(vishen);

const updatedbook = { ...book, updatedDate: "12/02/2023" };

console.log(updatedbook);
const pagedetails = pages > 1000 ? "over a thousand" : "less than a thousand";

pagedetails;

console.log(
  `The ${author} and this is ${
    hasMovieAdaptation ? "" : "not"
  } having movie adaption`
);
console.log(hasMovieAdaptation && "This movie does not have movie adaptation");
console.log(hasMovieAdaptation || "This movie does not have movie adaptation");


const sid = (birthyear) => 2037 - 2023;
console.log(sid(2001));

const addsid = (a, b) => a + b;

console.log(addsid(2, 5));

const sidd = (number) => number * number;
console.log(sidd(4));

const rajat = books
  .filter((book) => book.id > 3)
  .filter((book) => book.hasMovieAdaptation);
console.log(rajat);

const adventuereBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .filter((book) => book.hasMovieAdaptation)
  .filter((book) => book.reviews.goodreads.reviewsCount > 50000)
  .map((book) => book.title);

adventuereBooks;

const mapfilterLearning = books
  .filter((books) => books.id > 2)
  .map((book) => book.author);

mapfilterLearning;

const siddharth = books
  .filter((books) => books.id > 2)
  .map((book) => book.author);

siddharth;

const xyz = books
  .filter((book) => book.pages > 100)
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

xyz;

const allPages = books.reduce((acc, book) => acc + book.pages, 0);

allPages;

const allReviewCount = books.reduce(
  (acc, book) => acc + book.reviews.goodreads.reviewsCount,
  0
);

allReviewCount;

const cbv = [, 200, 3345, 40, 532, 62, 712, 822, 921, 1220];
cbv.sort((a, b) => a - b);

cbv;

const pageSorted = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((book) => book.title);

pageSorted;
*/

fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => console.log(data.slip.advice));

console.log("Siddharth");

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();

const book = getBook(4);
book;

const mapSid = books.map((book) => book.id + 10);

mapSid;

const filterSid = books
  .filter((book) => book.pages > 500)
  .map((book) => book.title);

const reduceSid = books.reduce((acc, book) => acc + book.pages, 0);

reduceSid;

filterSid;

const siddObj = {
  name: "siddharth",
  profesion: "Web Developer",
  City: "Ahmedabad",
};

const sidArvind = {
  EmployeeCode: 3214,
  Project: "Arvind Upland",
  Designation: "App Developer",
};

sidArvind;
siddObj;

const sidCombine = { ...sidArvind, siddObj };

console.log(siddObj["name"]);
const side = `Half a number 100 is ${100 / 2}`;

side;
console.log(typeof side);
console.log("sid" > "Rahul");
