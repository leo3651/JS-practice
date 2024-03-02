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

const renderData = async function () {
  const data = await getData();
  console.log(data);

  const [hotel] = data.filter(
    (hotel) => hotel.id === Number(window.location.hash.slice(1))
  );
  console.log(hotel);

  const html = `
  <div>
    <h1>${hotel.title}</h1>
    <img src="${hotel.image}" alt="img" />
    <div>
      <p>capacity: ${hotel.capacity}</p>
      ${
        hotel.beachDistanceInMeters
          ? `<p>distance from the beach: ${hotel.beachDistanceInMeters} meters</p>`
          : ""
      }
      <input type="text" />
      <input type="text" />
      <button>Check price</button>
      <p>Price: (min-max)</p>
      <div> 
        <button>Show more &#x2193;</button>
        <button>Show less &#x2191;</button>
      </div>
    </div>
    <div>
      <p>Air conditioning: true</p>
      <p>Parking space: true</p>
      <p>Pets: false</p>
      <p>Pool: true</p>
      <p>Wi-fi: false</p>
      <p>Tv: true</p>
    </div>
  </div>
  `;

  document.querySelector("body").insertAdjacentHTML("afterbegin", html);
};

// renderData();
