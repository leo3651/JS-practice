// variables
let scrollPosition, hotel, min, max;
let totalPrice = 0;
// DOM elements
let showMore,
  showLess,
  amanities,
  btnContainer,
  checkPriceBtn,
  startDateCheckPrice,
  endDateCheckPrice,
  price,
  reserveBtn;

const initDOMElements = function () {
  showMore = document.querySelector(".show-more");
  showLess = document.querySelector(".show-less");
  amanities = document.querySelector(".amanities");
  btnContainer = document.querySelector(".btn-container");
  checkPriceBtn = document.querySelector(".check-price");
  startDateCheckPrice = document.querySelector(".start-date-check-price");
  endDateCheckPrice = document.querySelector(".end-date-check-price");
  price = document.querySelector(".price");
  reserveBtn = document.querySelector(".reserve");
};

const getData = async function () {
  try {
    const response = await fetch("https://api.adriatic.hr/test/accommodation");
    console.log(response);
    const results = await response.json();
    console.log(results);

    if (!response.ok) throw new Error("Couldn't get data");
    return results;
  } catch (err) {
    alert(err);
  }
};

const findMinMaxPrice = function () {
  let min = hotel.pricelistInEuros[0].pricePerNight;
  let max = hotel.pricelistInEuros[0].pricePerNight;
  for (let i = 1, n = hotel.pricelistInEuros.length; i < n; i++) {
    const temp = hotel.pricelistInEuros[i].pricePerNight;
    if (temp > max) max = temp;
    if (temp < min) min = temp;
  }
  return [min, max];
};

const findHotel = (hotel) => hotel.id === Number(window.location.hash.slice(1));

const showBtnsToggle = function () {
  showLess.classList.toggle("hidden");
  showMore.classList.toggle("hidden");
};

const renderPrice = function () {
  price.style.opacity = 1;
  price.textContent = `Price: ${min}-${max} (min-max)`;
};

const scrollAndShowAmanities = function () {
  scrollPosition = window.scrollY;

  amanities.classList.remove("hidden");
  amanities.scrollIntoView({ behavior: "smooth" });
  amanities.classList.add("animation");

  showBtnsToggle();
};

const scrollAndHideAmanities = function () {
  setTimeout(() => {
    amanities.classList.add("hidden");
  }, 400);

  window.scrollTo({
    top: scrollPosition,
    left: 0,
    behavior: "smooth",
  });

  amanities.classList.remove("animation");
  showBtnsToggle();
};

const checkIfAvailableDate = function (start, end) {
  for (let i = 0, n = hotel.availableDates.length; i < n; i++) {
    const availableStart = new Date(
      hotel.availableDates[i].intervalStart
    ).getTime();
    const availableEnd = new Date(
      hotel.availableDates[i].intervalEnd
    ).getTime();
    console.log(availableStart, availableEnd);

    if (start >= availableStart && end <= availableEnd) return true;
  }
  return false;
};

const checkIfValidDates = function (chosenStartingDate, chosenEndingDate) {
  if (
    !chosenStartingDate ||
    !chosenEndingDate ||
    chosenEndingDate < chosenStartingDate
  ) {
    alert("Invalid dates");
    startDateCheckPrice.value = "";
    endDateCheckPrice.value = "";
    return false;
  }

  if (!checkIfAvailableDate(chosenStartingDate, chosenEndingDate)) {
    alert("Not available dates");
    startDateCheckPrice.value = "";
    endDateCheckPrice.value = "";
    return false;
  }

  return true;
};

const calculateDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 24 * 60 * 60));

const events = function () {
  showLess.addEventListener("click", scrollAndHideAmanities);

  showMore.addEventListener("click", scrollAndShowAmanities);

  checkPriceBtn.addEventListener("click", function () {
    totalPrice = 0;
    let chosenStartingDate = new Date(startDateCheckPrice.value).getTime();
    let chosenEndingDate = new Date(endDateCheckPrice.value).getTime();

    if (!checkIfValidDates(chosenStartingDate, chosenEndingDate)) return;

    for (let i = 0, n = hotel.pricelistInEuros.length; i < n; i++) {
      const priceInEuros = hotel.pricelistInEuros[i].pricePerNight;
      const priceIntevalStart = new Date(
        hotel.pricelistInEuros[i].intervalStart
      ).getTime();
      const priceIntevalEnd = new Date(
        hotel.pricelistInEuros[i].intervalEnd
      ).getTime();

      console.log(priceInEuros, priceIntevalStart, priceIntevalEnd);

      if (
        chosenStartingDate >= priceIntevalStart &&
        chosenStartingDate <= priceIntevalEnd
      ) {
        if (chosenEndingDate <= priceIntevalEnd) {
          totalPrice +=
            calculateDaysPassed(chosenStartingDate, chosenEndingDate) *
            priceInEuros;
          price.textContent = `Total price: ${totalPrice} Euros`;
          price.style.opacity = 1;
          break;
        }
        if (chosenEndingDate > priceIntevalEnd) {
          totalPrice +=
            calculateDaysPassed(chosenStartingDate, priceIntevalEnd) *
            priceInEuros;
          chosenStartingDate = priceIntevalEnd;
        }
      }
    }
    reserveBtn.classList.remove("reserve-btn");
  });

  window.addEventListener("input", function (e) {
    if (!startDateCheckPrice.value && !endDateCheckPrice.value) renderPrice();
    else {
      price.style.opacity = 0;
      reserveBtn.classList.add("reserve-btn");
    }
  });

  reserveBtn.addEventListener("click", function () {
    const html = `
      <div class="center">
        <p>You have successfully booked:</p>
        <p>${hotel.title}</p>
        <p>from ${startDateCheckPrice.value} to ${endDateCheckPrice.value}</p>
        <p>for total price of ${totalPrice} euros</p>
        <p>with capacity of ${hotel.capacity} people</p>
        <a class="btn back" href="hotels.html">&#x2190; Home page</a>
      </div>
    `;
    document.querySelector("body").innerHTML = "";
    document.querySelector("body").scrollIntoView();
    document.querySelector("body").insertAdjacentHTML("afterbegin", html);
  });
};

const renderData = async function () {
  const data = await getData();

  [hotel] = data.filter(findHotel);

  [min, max] = findMinMaxPrice();

  const html = `
  <div>
    <div class="heading">
      <h1>${hotel.title}</h1>
      <figure class="img-box">
        <img src="${hotel.image}" alt="img" />
      </figure>
    </div>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora minima
      itaque perferendis deleniti quo commodi nobis consequuntur, nemo
      consectetur quidem incidunt iure expedita ab fuga cupiditate omnis.
      Accusamus, suscipit deleniti. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Tempora minima itaque perferendis deleniti quo commodi
      nobis consequuntur, nemo consectetur quidem incidunt iure expedita ab
      fuga cupiditate omnis. Accusamus, suscipit deleniti.
    </p>

    <div class="info">
      <p>Capacity: ${hotel.capacity}</p>
      ${
        hotel.beachDistanceInMeters
          ? `      <p>Distance from the beach: ${hotel.beachDistanceInMeters} meters</p>`
          : ""
      }
      <input
        type="text"
        class="start-date-check-price"
        placeholder="year-month-day"
      />
      <input
        type="text"
        class="end-date-check-price"
        placeholder="year-month-day"
      />
      <div class="check-price-btn-container">
        <button class="btn check-price">Check price</button>
      </div>
      <p class="price">Price: ${min}-${max} (min-max)</p>
      <a class="btn reserve-btn reserve">Reserve</a>

      <div class="btn-container">
        <button class="btn show-more">Show more &#x2193;</button>
        <button class="btn show-less hidden">Show less &#x2191;</button>
      </div>
    </div>
    
    <div class="amanities hidden">
      <p>Air conditioning: ${hotel.amenities.airConditioning ? "✅" : "❌"}</p>
      <p>Parking space: ${hotel.amenities.parkingSpace ? "✅" : "❌"}</p>
      <p>Pets: ${hotel.amenities.pets ? "✅" : "❌"}</p>
      <p>Pool: ${hotel.amenities.pool ? "✅" : "❌"}</p>
      <p>Wi-fi: ${hotel.amenities.wifi ? "✅" : "❌"}</p>
      <p>Tv: ${hotel.amenities.tv ? "✅" : "❌"}</p>
    </div>
  </div>
  `;

  document.querySelector("body").innerHTML = "";
  document.querySelector("body").insertAdjacentHTML("afterbegin", html);

  initDOMElements();
  events();
};

renderData();
