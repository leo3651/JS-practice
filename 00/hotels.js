const inputStartDate = document.querySelector(".input-start-date");
const inputEndDate = document.querySelector(".input-end-date");
const capacity = document.getElementById("capacity");
const airConditioning = document.getElementById("air-conditioning");
const parkingSpace = document.getElementById("parking-space");
const pets = document.getElementById("pets");
const pool = document.getElementById("pool");
const wifi = document.getElementById("wifi");
const tv = document.getElementById("TV");
const filterBtn = document.querySelector(".filter-btn");
let cardNumber;

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

const filterDates = function (startDate, endDate, data) {
  return data.filter((hotel) => {
    for (let i = 0, n = hotel.availableDates.length; i < n; i++) {
      if (
        new Date(hotel.availableDates[i].intervalStart).getTime() <=
          new Date(startDate).getTime() &&
        new Date(hotel.availableDates[i].intervalEnd).getTime() >=
          new Date(endDate).getTime()
      ) {
        return hotel;
      }
    }
  });
};

const filterCapacity = function (capacity, data) {
  return data.filter((hotel) => {
    if (hotel.capacity === Number(capacity)) {
      return hotel;
    }
  });
};

const filterAmenity = function (amenity, data) {
  return data.filter((hotel) => {
    if (hotel.amenities[amenity]) return hotel;
  });
};

const renderData = async function (
  startDate = "",
  endDate = "",
  capacity = "",
  airConditioning = false,
  parkingSpace = false,
  pets = false,
  pool = false,
  wifi = false,
  tv = false
) {
  let data = await getData();
  console.log(data);
  data.forEach((hotel) => console.log(hotel));

  if (startDate || endDate) {
    if (!new Date(startDate).getTime() || !new Date(endDate).getTime()) {
      alert("Invalid dates");
      return;
    }
    data = filterDates(startDate, endDate, data);
  }

  if (capacity) {
    if (Number(capacity)) {
      data = filterCapacity(capacity, data);
    }
  }

  if (airConditioning) data = filterAmenity("airConditioning", data);

  if (parkingSpace) data = filterAmenity("parkingSpace", data);

  if (pets) data = filterAmenity("pets", data);

  if (pool) data = filterAmenity("pool", data);

  if (wifi) data = filterAmenity("wifi", data);

  if (tv) data = filterAmenity("tv", data);

  let html = "";
  data.forEach((element) => {
    html += `
    <div class="card grid" data-id="${element.id}">
      <figure class="img-box">
        <img src="${element.image}" alt="Photo" />
      </figure>
      <div class="content">
        <h2>${element.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          cupiditate eaque sequi doloremque nemo esse, facere eveniet quae
          aspernatur cum, enim odio consectetur fugiat sed obcaecati. Odio
          recusandae sed voluptates.
        </p>
        <a class="check-hotel-btn" href="./hotel.html#${element.id}">Check hotel</a>
      </div>
    </div>
    `;
  });

  document.querySelector(".card-container").innerHTML = "";
  document
    .querySelector(".card-container")
    .insertAdjacentHTML("afterbegin", html);

  const btns = document.querySelectorAll(".check-hotel-btn");
  btns.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      const cardEl = e.target.closest(".card");
      cardNumber = cardEl.dataset.id;
    })
  );
};

renderData();

filterBtn.addEventListener("click", function () {
  renderData(
    inputStartDate.value,
    inputEndDate.value,
    capacity.value,
    airConditioning.checked,
    parkingSpace.checked,
    pets.checked,
    pool.checked,
    wifi.checked,
    tv.checked
  );
});

export default cardNumber;
