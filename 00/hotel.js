const showMore = document.querySelector(".show-more");
const showLess = document.querySelector(".show-less");
const amanities = document.querySelector(".amanities");
const btnContainer = document.querySelector(".btn-container");
const checkPriceBtn = document.querySelector(".check-price");
const startDateCheckPrice = document.querySelector(".start-date-check-price");
const endDateCheckPrice = document.querySelector(".end-date-check-price");
const price = document.querySelector(".price");

let scrollPosition, hotel, min, max;

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
      <input
        type="text"
        class="staet-date-check-price"
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

      <div class="btn-container">
        <button class="btn show-more">Show more &#x2193;</button>
        <button class="btn show-less hidden">Show less &#x2191;</button>
      </div>
    </div>
    <div class="amanities hidden">
      <p>Air conditioning: ❌</p>
      <p>Parking space: ✅</p>
      <p>Pets: ✅</p>
      <p>Pool: ✅</p>
      <p>Wi-fi: ❌</p>
      <p>Tv: ❌</p>
    </div>
  </div>
  `;

  document.querySelector("body").insertAdjacentHTML("afterbegin", html);
};

renderData();

const showBtnsToggle = function () {
  showLess.classList.toggle("hidden");
  showMore.classList.toggle("hidden");
};

showLess.addEventListener("click", function () {
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
});

showMore.addEventListener("click", function () {
  scrollPosition = window.scrollY;

  amanities.classList.remove("hidden");
  amanities.scrollIntoView({ behavior: "smooth" });
  amanities.classList.add("animation");

  showBtnsToggle();
});

const renderPrice = function () {
  price.style.opacity = 1;
  price.innerHTML = `<p class="price">Price: ${min}-${max} (min-max)</p>`;
};

window.addEventListener("input", function (e) {
  if (!startDateCheckPrice.value && !endDateCheckPrice.value) renderPrice();
  else {
    price.style.opacity = 0;
  }
});
