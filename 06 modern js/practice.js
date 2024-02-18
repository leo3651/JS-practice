"use strict";

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const ratingStars = [63405, 1808];

///////////////////////////////////
/////// DESTRUCTURING ARRAYS
///////////////////////////////////
const [firstBook, secondBook] = books;
const [, , thirdBook] = books;
console.log(firstBook, secondBook);
console.log(thirdBook);

///
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

///
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

///////////////////////////////////
/////// DESTRUCTURING OBJECTS
///////////////////////////////////
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

///
const { keywords: tags } = books[0];
console.log(tags);

///
const { language, programmingLanguage = "unknown" } = books[6];
console.log(language, programmingLanguage);

///
let bookTitle = "unknown";
let bookAuthor = "unknown";

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

///
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

///
const printBookInfo = function ({ title, year = "year unknown", author }) {
  return console.log(`${title} by ${author}, ${year}`);
};

printBookInfo({
  title: "Algorithms",
  author: "Robert Sedgewick",
  year: "2011",
});

printBookInfo({
  title: "Algorithms",
  author: "Robert Sedgewick",
});

///////////////////////////////////
/////// SPREAD OPERATOR
///////////////////////////////////
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

///
const spellWord = function (string) {
  console.log(...string);
};

spellWord("JavaScript");

///////////////////////////////////
/////// REST PATTERN AND PARAMETERS
///////////////////////////////////
const [mainWord, ...allOthers] = books[0].keywords;
console.log(mainWord);
console.log(allOthers);

///
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher);
console.log(restOfTheBook);

///
const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors`);
};

printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");
printBookAuthorsCount("Leo's book");

///////////////////////////////////
/////// SHORT CIRCUITING
///////////////////////////////////
const hasExamplesInJava = function (book) {
  return book.programmingLanguage === "Java" || "No data available";
};

console.log(hasExamplesInJava(books[0]));
console.log(hasExamplesInJava(books[1]));

for (let i = 0, n = books.length; i < n; i++) {
  books[i].onlineContent &&
    console.log(`${books[i].title} privides online content`);
}

///////////////////////////////////
/////// THE NULLISH COALESCING OPERATOR
///////////////////////////////////
for (let i = 0, n = books.length; i < n; i++) {
  books[i].onlineContent ??
    console.log(`${books[i].title} provides no data about online content`);
}

///////////////////////////////////
/////// LOGICAL ASSIGNMENTS OPERATORS
///////////////////////////////////
for (let i = 0, n = books.length; i < n; i++) {
  books[i].edition ||= 1;
  console.log(books[i].edition);
}

for (let i = 0, n = books.length; i < n; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
  console.log(books[i].highlighted);
}

///////////////////////////////////
/////// FOR OF LOOP
///////////////////////////////////
let sum = 0;
for (const [index, book] of books.entries()) {
  sum += book.pages;
}
console.log(sum);

const allAuthors = [];

for (const [index, book] of books.entries()) {
  if (typeof book.author === "object") {
    allAuthors.push(...book.author);
  } else {
    allAuthors.push(book.author);
  }
}

console.log(allAuthors);

for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}: ${author}`);
}

///////////////////////////////////
/////// ENHANCED OBJECT LITERALS
///////////////////////////////////
const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

console.log(newBook);

const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};

console.log(newBook2);

///////////////////////////////////
/////// OPTIONAL CHAINING
///////////////////////////////////
const getFirstKeyword = function (book) {
  return book.keywords?.[0] ?? "Does not exists";
};

console.log(getFirstKeyword(books[0]));

///////////////////////////////////
/////// LOOPING OBJECTS: KEYS, VALUES, ENTRIES
///////////////////////////////////
const entries2 = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  console.log(key);
  entries2.push([key]);
}
console.log(entries2);

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  console.log(index, value);
  entries2[index].push(value);
}
console.log(entries2);

///
const entries3 = [];
for (const key of Object.entries(books[0].thirdParty.goodreads)) {
  console.log(key);
  entries3.push(key);
}
console.log(entries3);

///
const entries4 = Object.entries(books[0].thirdParty.goodreads);

console.log(entries2);
console.log(entries3);
console.log(entries4);

///////////////////////////////////
/////// SETS
///////////////////////////////////
const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);

const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

uniqueKeywords.add("coding");
uniqueKeywords.add("science");
console.log(uniqueKeywords);

uniqueKeywords.delete("business");
console.log(uniqueKeywords);

const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

uniqueKeywords.clear();
console.log(uniqueKeywords);
console.log(uniqueKeywordsArr);

///////////////////////////////////
/////// MAPS
///////////////////////////////////
const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);
console.log(bookMap);
bookMap.set("pages", 464);
console.log(bookMap);

console.log(`${bookMap.get("title")} by ${bookMap.get("author")}`);

console.log(bookMap.size);

bookMap.has("author") && console.log("The author of book is known");

///////////////////////////////////
/////// MAPS ITERATION
///////////////////////////////////
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

for (const [key, value] of firstBookMap) {
  if (typeof value === "number") console.log(key);
}

///////////////////////////////////
/////// WORKING WITH STRINGS - PART 1
///////////////////////////////////
console.log("--- dot ---");
console.log(books[0].ISBN["6"]);
console.log(books[0].ISBN["4"]);
console.log(books[0].ISBN["9"]);
console.log(books[0].ISBN["8"]);
console.log("--- bracket ---");
console.log(books[0]["ISBN"][6]);
console.log(books[0]["ISBN"][4]);
console.log(books[0]["ISBN"][9]);
console.log(books[0]["ISBN"][8]);

const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";
console.log(quote.indexOf("chess"));
console.log(quote[27]);
console.log(quote.slice(quote.lastIndexOf("b")));
console.log(quote.lastIndexOf("boxing"));

///
const isContributor = function (string) {
  if (string.toLowerCase().endsWith("(contributor)")) return true;
  else return false;
};

console.log(isContributor("Julie Sussman (Contributor)"));
console.log(isContributor("Robert Sedgewick"));

///////////////////////////////////
/////// WORKING WITH STRINGS - PART 2
///////////////////////////////////
const normalizeAuthorName = function (author) {
  let authorTrimmed = author.toLowerCase();
  if (authorTrimmed.includes("(contributor)")) {
    authorTrimmed = authorTrimmed.slice(
      0,
      authorTrimmed.indexOf("(contributor)") - 1
    );
  }
  authorTrimmed = authorTrimmed.trim();
  const firstName =
    authorTrimmed[0].toUpperCase() +
    authorTrimmed.slice(1, authorTrimmed.indexOf(" "));
  const lastName =
    authorTrimmed[authorTrimmed.lastIndexOf(" ") + 1].toUpperCase() +
    authorTrimmed.slice(authorTrimmed.lastIndexOf(" ") + 2);

  return firstName + " " + lastName;
};

console.log(
  normalizeAuthorName("   JuliE sussMan          (Contributor)     ")
);
console.log(normalizeAuthorName("  JuliE suSSsMan (Contributor)   "));
console.log(normalizeAuthorName("  JuliE    suSSsMan     (Contributor)   "));

///
const newBookTitle = books[1].title.replace(books[1].title, "Software");
console.log(newBookTitle);

///
const logBookTheme = function (title) {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.startsWith("computer")) {
    console.log("This book is about computers");
  } else if (
    lowerTitle.includes("algorithms") &&
    lowerTitle.includes("structures")
  ) {
    console.log("This book is about algorithms and data structures");
  } else if (
    (lowerTitle.includes("system") || lowerTitle.includes("systems")) &&
    !lowerTitle.includes("operating")
  ) {
    console.log(
      "This book is about some systems, but definitely not about operating systems"
    );
  }
};

for (const book of books) {
  console.log(book.title);
  logBookTheme(book.title);
}

///////////////////////////////////
/////// WORKING WITH STRINGS - PART 3
///////////////////////////////////
const bookCategories =
  "science;computing;computer science;algorithms;business;operating systems;networking;electronics";

const logBookCategories = function (string) {
  const categories = string.split(";");
  console.log(categories);
  for (const category of categories) {
    console.log(category);
  }
};
logBookCategories(bookCategories);

///
const getKeywordAsString = function (books) {
  const keywords = [];
  for (const book of books) {
    keywords.push(...book.keywords);
  }
  const uniqueKeywords = [...new Set(keywords)];
  console.log(uniqueKeywords);
  return uniqueKeywords.join(";");
};

console.log(getKeywordAsString(books));

///
const bookChapters = [
  ["The Basics", 14],
  ["Sorting", 254],
  ["Searching", 372],
  ["Graphs", 526],
  ["Strings", 706],
];

const logBookChapters = function (array) {
  for (const [chapter, pages] of array) {
    console.log(`${chapter.padEnd(20, "_")} ${pages}`);
  }
};
logBookChapters(bookChapters);

///
// for testing
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const btn = document.querySelector("button");
const textarea = document.querySelector("textarea");
console.log("--- ABOUT ELEMENTS ---");
console.log(btn);
console.log(textarea);
console.log(typeof btn);
console.log(typeof btn);

btn.addEventListener("click", function () {
  console.log("--- EVENT HANDLER ---");
  const textAreaValue = textarea.value;
  console.log(textAreaValue);
  const textareaArray = textAreaValue.split("\n");
  console.log(textareaArray);
  for (const [wordIndex, word] of textareaArray.entries()) {
    // console.log(wordIndex, word);
    const variables = word.split("_");
    let cammelCased = [];
    for (let [index, variable] of variables.entries()) {
      // console.log(index, variable);
      variable = variable.trim().toLowerCase();
      if (index !== 0) {
        variable = variable.replace(variable[0], variable[0].toUpperCase());
        // console.log("variable: ", variable);
      }
      cammelCased.push(variable);
    }
    console.log(
      `${cammelCased.join("").padEnd(18, " ")} ${"✔".repeat(wordIndex + 1)}`
    );
  }
});

///////////////////////////////////
/////// MORE STRINGS
///////////////////////////////////
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getName = (str) => str.slice(0, 3).toUpperCase();
console.log(flights.split("+"));
for (const flight of flights.split("+")) {
  // console.log(flight);
  const [type, from, to, time] = flight.split(";");
  // console.log(type, from, to, time);
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getName(from)} to ${getName(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(50, " ");
  console.log(output);
}
