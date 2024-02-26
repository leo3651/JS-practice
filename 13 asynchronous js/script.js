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
  countriesContainer.style.opacity = 1;
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

const getJson = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`${errorMsg} ${res.status}`);
    }

    return res.json();
  });
};

//  const getNeighbourCountry2 = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((result) => {
//       console.log("Result: ", result);

//       if (!result.ok) {
//         throw new Error(`Country not found ${result.status}`);
//       }

//       return result.json();
//     })
//     .then((data) => {
//       renderData(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((result) => {
//       if (!result.ok) {
//         throw new Error(`Something went wrong ${result.status}`);
//       }

//       return result.json();
//     })
//     .then((data) => renderData(data[0], "neighbour"))
//     .catch((err) => {
//       console.error(`Error : ${err}`);
//       renderError(`Something went wrong ${err.message}. `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// clean code of previous function
const getNeighbourCountry = function (country) {
  getJson(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderData(data[0]);

      const neighbour = data[0].borders?.[0];

      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Neighbour not found"
      );
    })

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

// getNeighbourCountry("australia");

///////////////////////////////////
/////// PRACTICE
///////////////////////////////////
const whereIAm = function (lat, lng) {
  fetch(
    `https://www.mapquestapi.com/geocoding/v1/reverse?key=NnoWy1r9RTOPCit9PL4qcbFArdfRlI7i&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`
  )
    .then((results) => {
      console.log("Results: ", results);
      return results.json();
    })

    .then((data) => {
      if (data.info.statuscode === 400) {
        throw new Error(`${data.info.messages[0]}`);
      }
      console.log(
        `You are in ${data.results[0]?.locations[0]?.adminArea5}, ${data.results[0]?.locations[0]?.adminArea1}`
      );
      console.log("Data: ", data);
    })

    .catch((err) => {
      countriesContainer.insertAdjacentText(
        "afterend",
        `Something went wrong. ${err.message}`
      );
      console.log(`Something went wrong. ${err.message}`);
    });
};

whereIAm(52.508, 13.381);
whereIAm(19.037, 72.873);
whereIAm(-33.933, 18.474);
whereIAm("df,ldf,", "weq");

///////////////////////////////////
/////// THE EVENT LOOP
///////////////////////////////////
console.log("Start");
setTimeout(() => console.log("0 second timer"), 0);
Promise.resolve("Resolved promise 1").then((res) => console.log(res));
// microtasks queue has priority over callback queue -> timer gets later executed than it should
Promise.resolve("Resolved promise 2").then((res) => {
  console.log(res);
  for (let i = 0; i < 1000; i++) {}
});
console.log("Finish test");

///////////////////////////////////
/////// BUILDING A PROMISE
///////////////////////////////////
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery is happening");

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You win the money 💰");
    } else {
      reject(new Error("You lost the money"));
    }
  }, 2000);
});

console.log("after lottery is happening in code");

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`Waited ${seconds} ${seconds > 1 ? "seconds" : "second"}`);
    }, seconds * 1000);
  });
};

wait(1)
  .then((res) => {
    console.log(res);
    return wait(2);
  })
  .then((res) => {
    console.log(res);
    return wait(3);
  })
  .then((res) => {
    console.log(res);
    return wait(4);
  })
  .then((res) => console.log(res));

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject("abc").catch((x) => console.log(x));

///////////////////////////////////
/////// PROMISIFYING THE GEOLOCATION API
///////////////////////////////////
navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.log(err)
);
console.log("Getting position");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );

    // ⬆ or ⬇

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((position) => console.log(position));

const whereIAm2 = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://www.mapquestapi.com/geocoding/v1/reverse?key=NnoWy1r9RTOPCit9PL4qcbFArdfRlI7i&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`
      );
    })
    .then((results) => {
      console.log("Results: ", results);
      return results.json();
    })

    .then((data) => {
      if (data.info.statuscode === 400) {
        throw new Error(`${data.info.messages[0]}`);
      }
      console.log(
        `You are in ${data.results[0]?.locations[0]?.adminArea5}, ${data.results[0]?.locations[0]?.adminArea1}`
      );
      console.log("Data: ", data);
    })

    .catch((err) => {
      countriesContainer.insertAdjacentText(
        "afterend",
        `Something went wrong. ${err.message}`
      );
      console.log(`Something went wrong. ${err.message}`);
    });
};

btn.addEventListener("click", whereIAm2);

///////////////////////////////////
/////// PRACTICE
///////////////////////////////////
const wait2 = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`Waited ${seconds} ${seconds > 1 ? "seconds" : "second"}`);
    }, seconds * 1000);
  });
};

const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    console.log("In promise");

    const imgEl = document.createElement("img");
    imgEl.src = imgPath;

    imgEl.addEventListener("load", function () {
      console.log("fulfilled");
      document.querySelector(".images").append(imgEl);
      console.log(imgEl);
      resolve(imgEl);
    });

    imgEl.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });

    console.log("In promise end");
  });
};

console.log("middle");

let currentImage;
createImg("./img/img-1.jpg")
  .then((img) => {
    currentImage = img;
    console.log("first then: Image 1 loaded");
    return wait2(2);
  })
  .then((res) => {
    console.log("second then: ", res);
    currentImage.style.display = "none";
    return wait2(2);
  })
  .then((res) => {
    console.log("third then: ", res);
    return createImg("./img/img-2.jpg");
  })
  .then((img) => {
    console.log("fourth then: Image 2 loaded");
    currentImage = img;
    return wait2(2);
  })
  .then((res) => {
    console.log("fifth then: ", res);
    currentImage.style.display = "none";
  })
  .catch((err) => console.error(err));

console.log("end");

///////////////////////////////////
/////// CONSUMING PROMISES WITH ASYNC/AWAIT
///////////////////////////////////
const getCurrentLocation = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (err) => reject(new Error("Couldn't get location" + err))
    );
  });
};

const whereAmI = async function (country) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );

    if (!response.ok) throw new Error(`Wrong country name ${response.status}`);

    console.log(this, response);

    const data = await response.json();
    console.log(this, data[0]);

    renderData(data[0]);

    // // syntactic sugar for:
    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    //   .then((res) => {
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data[0]);
    //     renderData(data[0]);
    //   });

    const location = await getCurrentLocation();
    const { latitude: lat, longitude: lng } = location.coords;
    console.log(this, location, lat, lng);

    const geoRes = await fetch(
      `https://www.mapquestapi.com/geocoding/v1/reverse?key=NnoWy1r9RTOPCit9PL4qcbFArdfRlI7i&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`
    );

    if (!geoRes.ok)
      throw new Error(`Reverse geocoding problem ${response.status}`);

    console.log(this, geoRes);

    const geoResData = await geoRes.json();
    console.log(this, geoResData);

    const iAmAt = `You are in ${geoResData.results[0]?.locations[0]?.adminArea5}, ${geoResData.results[0]?.locations[0]?.adminArea1}`;
    console.log(this, iAmAt);

    return iAmAt;
  } catch (error) {
    console.error(error);
    console.log(error);
    console.log(error.message);

    // reject promise returned from async function
    throw error;
  }
};

console.log("1: Will get location");
whereAmI("croatiawweew");
whereAmI.call("FIrst function", "croatia");

// const city = whereAmI("croatia");
// console.log(city);

// return value from async function
whereAmI("croatia")
  .then((city) => console.log(`3: ${city}`))
  .catch((err) => console.log(`3: ${err.message}`))
  .finally(() => console.log("3:"));

console.log("2: Finished getting location");

(async function () {
  try {
    const city = await whereAmI("croatia");
    console.log("IIFE");
    console.log(city);
  } catch (err) {
    console.log(`3: ${err.message}`);
  }
  console.log("3: ");
})();

///////////////////////////////////
/////// RUNNING PROMISES IN PARALLEL
///////////////////////////////////
const getJSON2 = function (url, err = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${err} ${response.status}`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // one after another
    const [data1] = await getJSON2(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON2(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON2(`https://restcountries.com/v3.1/name/${c3}`);

    const data = [data1.capital[0], data2.capital[0], data3.capital[0]];
    console.log(data);

    // in parallel
    const parallelPromises = await Promise.all([
      getJSON2(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON2(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON2(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(parallelPromises.map((data) => data[0].capital[0]));
  } catch (err) {
    console.error(err);
  }
};

get3Countries("croatia", "portugal", "germany");
// get3Countries("serbia", "sweden", "romania");
// get3Countries("canada", "norway", "montenegro");

///////////////////////////////////
/////// OTHER PROMISE COMBINATORS: RACE, ALL_SETTLED, ANY
///////////////////////////////////
const handleFetch = function (url) {
  return fetch(url)
    .then((result) => {
      if (!result.ok) throw new Error(result.status);
      return result.json();
    })
    .catch((err) => {
      throw err;
    });
};

// Promise.race() -> short circuits the results
(async function () {
  try {
    const fastest = await Promise.race([
      handleFetch(`https://restcountries.com/v3.1/name/italy`),

      handleFetch(`https://restcountries.com/v3.1/name/mexico`),

      handleFetch(`https://restcountries.com/v3.1/name/egypt`),
    ]);
    console.log(fastest[0].capital[0]);
  } catch (err) {
    console.error(`Something went wrong ${err}`);
  }
})();

///
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => reject(new Error("Took too long")), sec * 1000);
  });
};

(async function () {
  try {
    const data = await Promise.race([
      handleFetch(`https://restcountries.com/v3.1/name/egypt`),
      timeout(3),
    ]);
    console.log(data[0].capital[0]);
  } catch (err) {
    console.log(err);
  }
})();

Promise.race([
  handleFetch(`https://restcountries.com/v3.1/name/egypt`),
  timeout(3),
])
  .then((data) => console.log(data[0].capital[0]))
  .catch((err) => console.log(err));

// Promise.allSettled -> returns all the results of all promises
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.all([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Promise.any() -> returns first fulfilled promise
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

///////////////////////////////////
/////// PRACTICE
///////////////////////////////////
document.querySelector(".countries").style.opacity = 1;

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.setAttribute("src", imgPath);

    img.addEventListener("load", function () {
      document.querySelector(".images").append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Error loading the image"));
    });
  });
};

const timerPromise = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

const loadNPause = async function () {
  try {
    const img = await createImage("./img/img-1.jpg");
    console.log("Image 1 loaded");
    await timerPromise(2);
    img.style.display = "none";

    const img2 = await createImage("./img/img-2.jpg");
    console.log("Image 2 loaded");
    await timerPromise(2);
    img2.style.display = "none";
  } catch (err) {
    console.log(err);
  }
};

// loadNPause();

///
const loadAll = function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    console.log(imgs);

    Promise.all(imgs).then((res) => {
      console.log(res);
      res.forEach((img) => img.classList.add("parallel"));
      console.log("Classes added");
    });

    console.log("End ");
  } catch (err) {
    console.log(err);
  }
};

loadAll(["./img/img-1.jpg", "./img/img-2.jpg", "./img/img-3.jpg"]);
