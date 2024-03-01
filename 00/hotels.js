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
console.log(
  inputStartDate,
  inputEndDate,
  capacity,
  airConditioning,
  parkingSpace,
  pets,
  pool,
  wifi,
  tv,
  filterBtn
);

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
  if (startDate || endDate) {
    if (!new Date(startDate).getTime() || !new Date(endDate).getTime()) {
      console.log(startDate, endDate);
      alert("Invalid dates");
      console.log(new Date(startDate).getTime());
      return;
    }
    data = data.filter((hotel) => {
      for (let i = 0, n = hotel.availableDates.length; i < n; i++) {
        if (
          new Date(hotel.availableDates[i].intervalStart).getTime() <
            new Date(startDate).getTime() &&
          new Date(hotel.availableDates[i].intervalEnd).getTime() >
            new Date(endDate).getTime()
        ) {
          console.log("in");
          return hotel;
        }
      }
    });
  }
  console.log("Leo");

  let html = "";
  data.forEach((element) => {
    html += `
    <div class="card grid">
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
        <a class="check-hotel-btn" href="#">Check hotel</a>
      </div>
    </div>
    `;
  });

  document.querySelector(".card-container").innerHTML = "";
  document
    .querySelector(".card-container")
    .insertAdjacentHTML("afterbegin", html);

  const btns = document.querySelectorAll(".check-hotel-btn");
  console.log(btns);
  btns.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      e.preventDefault();
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
