"use strict";

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

/////////////////////////////
//// WORKOUT CLASS
class Workout {
  id = (new Date().getTime() + "").slice(-10);
  date = new Date();
  clicks = 0;

  constructor(distance, duration, coords) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase() + this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  setClicks() {
    this.clicks++;
  }
}

/////////////////////////////
//// RUNNING CLASS
class Running extends Workout {
  type = "running";

  constructor(distance, duration, coords, cadence) {
    super(distance, duration, coords);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance; // min/km
    return this.pace;
  }
}

/////////////////////////////
//// CYCLING CLASS
class Cycling extends Workout {
  type = "cycling";

  constructor(distance, duration, coords, elevationGain) {
    super(distance, duration, coords);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60); // km/h
    return this.speed;
  }
}

// const run = new Running(123, 333, [37, 25], 15);
// const cycle = new Cycling(123, 333, [37, 25], 15);

/////////////////////////////
//// APP CLASS
class App {
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoomLevel = 13;

  constructor() {
    // get user's position
    this.#getPosition();

    // get data from locale storage
    this.#getLocaleStorage();

    // event listeners
    form.addEventListener("submit", this.#newWorkout.bind(this));
    inputType.addEventListener("change", this.#toggleElevationField);
    containerWorkouts.addEventListener("click", this.#moveToPopup.bind(this));
  }

  #getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.#loadMap.bind(this),
        function () {
          alert("Couldn't get the position");
        }
      );
    }
  }

  #loadMap(position) {
    console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},13.8z?entry=ttu`
    );

    const coords = [latitude, longitude];
    this.#map = L.map("map").setView(coords, this.#mapZoomLevel);
    console.log(this.#map);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // L.marker(coords)
    //   .addTo(this.#map)
    //   .bindPopup("A pretty CSS popup.<br> Easily customizable.")
    //   .openPopup();

    this.#map.on("click", this.#showForm.bind(this));

    this.#workouts.forEach((workout) => this.#renderWorkoutMarker(workout));
  }

  #showForm(mapE) {
    form.classList.remove("hidden");
    inputDistance.focus();
    this.#mapEvent = mapE;
  }

  #toggleElevationField() {
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  }

  #newWorkout(e) {
    e.preventDefault();

    const checkIfNumber = (...inputs) =>
      inputs.every((input) => Number.isFinite(input));

    const positiveNumber = (...numbers) =>
      numbers.every((number) => number >= 0);

    console.log(this.#mapEvent);
    const { lat: latitude, lng: longitude } = this.#mapEvent.latlng;
    console.log(latitude, longitude);
    const coords = [latitude, longitude];

    // data from form
    const type = inputType.value;
    const distance = Number.parseFloat(inputDistance.value);
    const duration = Number.parseFloat(inputDuration.value);
    let workout;

    // if running workout
    if (type === "running") {
      const cadence = Number.parseFloat(inputCadence.value);

      // if (
      //   !Number.isFinite(distance) ||
      //   !Number.isFinite(duration) ||
      //   !Number.isFinite(cadence)
      // ) {
      //   return alert("Positive number");
      // }

      if (
        !checkIfNumber(distance, duration, cadence) ||
        !positiveNumber(distance, duration, cadence)
      ) {
        return alert("Positive number");
      }

      workout = new Running(distance, duration, coords, cadence);
    }

    // if cycling workout
    if (type === "cycling") {
      const elevation = Number.parseFloat(inputElevation.value);
      if (
        !checkIfNumber(distance, duration, elevation) ||
        !positiveNumber(distance, duration)
      ) {
        return alert("Positive number");
      }

      workout = new Cycling(distance, duration, coords, elevation);
    }

    this.#workouts.push(workout);
    console.log(workout);
    console.log(this.#workouts);
    console.log("sumbited");

    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";

    this.#renderWorkoutMarker(workout);
    this.#renderWorkout(workout);
    this.#hideForm();
    this.#setLocaleStorage();
  }

  #renderWorkoutMarker(workout) {
    console.log(this);
    console.log(workout);
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${workout.description}`
      )
      .openPopup();
  }

  #renderWorkout(workout) {
    let html = `    
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>`;

    if (workout.type === "running") {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>`;
    }

    if (workout.type === "cycling") {
      html += `          
        <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>`;
    }

    form.insertAdjacentHTML("afterend", html);
  }

  #hideForm() {
    form.style.display = "none";
    form.classList.add("hidden");
    setTimeout(() => (form.style.display = "grid"), 1000);
  }

  #moveToPopup(e) {
    console.log(e.target);
    console.log(this);
    const workoutEl = e.target.closest(".workout");
    console.log(workoutEl);
    if (!workoutEl) return;
    console.log(workoutEl.dataset.id);
    console.log(this.#workouts);
    const workout = this.#workouts.find(
      (workout) => workout.id === workoutEl.dataset.id
    );
    console.log(workout, workout.coords);

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });

    // workout.setClicks();
    console.log(workout);
  }

  #setLocaleStorage() {
    localStorage.setItem("workout", JSON.stringify(this.#workouts));
  }

  #getLocaleStorage() {
    const data = JSON.parse(localStorage.getItem("workout"));
    if (!data) return;
    console.log(data);
    this.#workouts = data;
    this.#workouts.forEach((workout) => {
      console.log(workout);
      this.#renderWorkout(workout);
    });
  }

  reset() {
    localStorage.clear("workout");
    location.reload();
  }
}

const app = new App();
