"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class Workout {
  id = (new Date().getTime() + "").slice(-10);
  date = new Date();
  constructor(distance, duration, coords) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }
}

class Running extends Workout {
  type = "running";
  constructor(distance, duration, coords, cadence) {
    super(distance, duration, coords);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    this.pace = this.duration / this.distance; // min/km
    return this.pace;
  }
}

class Cycling extends Workout {
  type = "cycling";
  constructor(distance, duration, coords, elevationGain) {
    super(distance, duration, coords);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60); // km/h
    return this.speed;
  }
}

const run = new Running(123, 333, [37, 25], 15);
const cycle = new Cycling(123, 333, [37, 25], 15);

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this.#getPosition();
    form.addEventListener("submit", this.#newWorkout.bind(this));
    inputType.addEventListener("change", this.#toggleElevationField);
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
    this.#map = L.map("map").setView(coords, 13);
    console.log(this.#map);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(coords)
      .addTo(this.#map)
      .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      .openPopup();

    this.#map.on("click", this.#showForm.bind(this));
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
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;

    // if running workout
    if (type === "running") {
      const cadence = +inputCadence.value;

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
      const elevation = +inputElevation.value;
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

    this.renderWorkoutMarker(workout);
  }
  renderWorkoutMarker(workout) {
    console.log(this);
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
      .setPopupContent(`${workout.distance}`)
      .openPopup();
  }
}

const app = new App();
