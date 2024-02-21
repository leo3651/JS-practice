"use strict";

///////////////////////////////////
/////// AJAX CALl: XML_HTTP_REQUEST
///////////////////////////////////
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// render data from country
const renderData = function (data) {
  const html = `    
  <article class="country">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row">
          <span>👫</span>${(+data.population / 1000000).toFixed(1)} people
        </p>
        <p class="country__row">
          <span>🗣️</span>${data.languages.hrv}
        </p>
        <p class="country__row">
          <span>💰</span>${data.currencies.EUR.name}
        </p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML("afterbegin", html);
  countriesContainer.style.opacity = 1;
};

// get data from country
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);

    // render country
    console.log(data);
    renderData(data);
  });
};

getCountryData("croatia");
getCountryData("portugal");
getCountryData("germany");

///////////////////////////////////
/////// SEQUENCE AJAX CALLS
///////////////////////////////////
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render country 1
    renderData(data);

    // get neighbour country
    const neighbour = data.borders?.[0];
    console.log(neighbour);
  });
};

getCountryAndNeighbour("japan");
