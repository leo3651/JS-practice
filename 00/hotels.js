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
  let html;
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
};

renderData();
