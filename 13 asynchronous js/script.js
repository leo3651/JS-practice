"use strict";

///////////////////////////////////
/////// AJAX CALl: XML_HTTP_REQUEST
///////////////////////////////////
console.log("--- AJAX ---");
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// render data from country
const renderData = function (data, className = "") {
  console.log(data.name.nativeName);
  const [nativeName] = Object.keys(data.name.nativeName);
  const html = `    
  <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row">
          <span>👫</span>${(+data.population / 1000000).toFixed(1)} people
        </p>
        <p class="country__row">
          <span>🗣️</span>${data.languages?.[nativeName]}
        </p>
        <p class="country__row">
          <span>💰</span>${data.currencies.EUR?.name}
        </p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML("afterbegin", html);
  // countriesContainer.style.opacity = 1;
};

// get data from country
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);

    // render country
    console.log(data);
    renderData(data);
  });
};

// getCountryData("croatia");
// getCountryData("portugal");

///////////////////////////////////
/////// SEQUENCE AJAX CALLS
///////////////////////////////////
console.log("--- SEQUENCE AJAX ---");
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render country 1
    renderData(data);

    // get neighbour country
    const neighbour = data.borders?.[0];
    console.log(neighbour);
    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    console.log(request2);
    request2.addEventListener("load", function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      renderData(data, "neighbour");
    });
  });
};

getCountryAndNeighbour("germany");

// callback hell
setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 seconds passed");
    setTimeout(() => {
      console.log("3 seconds passed");
      setTimeout(() => {
        console.log("4 seconds passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

///////////////////////////////////
/////// PROMISES AND THE FETCH API
///////////////////////////////////
console.log("--- PROMISES ---");
// AJAX call
const requestAJAX = new XMLHttpRequest();
requestAJAX.open("GET", `https://restcountries.com/v3.1/name/croatia`);
requestAJAX.send();

// promises
const request = fetch(`https://restcountries.com/v3.1/name/croatia`);
console.log(request);

const getCountry = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (result) {
      console.log(result);
      return result.json();
    })
    .then(function (data) {
      console.log(data);
      renderData(data[0]);
    });
};

// getCountry("croatia");

// clean code of preveious func
const getCountry2 = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((result) => result.json())
    .then((data) => renderData(data[0]));
};

// getCountry2("croatia");

///////////////////////////////////
/////// CHAINING PROMISES AND HANDLING ERROR
///////////////////////////////////
const renderError = function (message) {
  countriesContainer.insertAdjacentText("beforeend", message);
  countriesContainer.style.opacity = 1;
};

const getNeighbourCountry = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((result) => result.json())
    .then((data) => {
      renderData(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((result) => result.json())
    .then((data) => renderData(data[0], "neighbour"))
    .catch((err) => {
      console.error(`Error : ${err}`);
      renderError(`Something went wrong ${err.message}. `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getNeighbourCountry("croatia");
  getNeighbourCountry("portugal");
});

getNeighbourCountry("fdfsfdsf");
