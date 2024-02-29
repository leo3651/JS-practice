class Bill {
  #totalPrice = this.quantity * this.price;
  constructor(billNumber, serviceName, startDate, endDate, people, price) {
    this.billNumber = billNumber;
    this.serviceName = serviceName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.people = people;
    this.price = price;

    this.calcQuantity();
  }

  #generateMarkup() {
    const html = `
    <h1>Bill num. ${this.billNumber} for accomodation service</h1>
      <table>
        <thead>
          <tr>
            <th colspan="3">Service</th>

            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${this.serviceName}</td>
            <td class="light-borders">${this.startDate} - ${this.endDate}</td>
            <td>${this.people} ${this.people > 1 ? "osobe" : "osoba"}</td>
            <td>${this.price} EUR</td>
            <td>${this.quantity} ${
      this.quantity > 1 ? "noćenja" : "noćenje"
    }</td>
            <td style="font-weight: normal">700 EUR</td>
          </tr>
          <tr>
            <td colspan="6" style="color: transparent">Empty</td>
          </tr>
          <tr style="background-color: lightblue">
            <td colspan="5">Ukupno</td>

            <td>${this.#totalPrice} EUR</td>
          </tr>
        </tbody>
      </table>
    `;
  }

  calcQuantity() {
    const differenceInMs =
      new Date(this.endDate).getTime - new Date(this.startDate).getTime();
    this.quantity = differenceInMs / (1000 * 3600 * 24);
  }

  renderHtml() {
    document.querySelector("main").insertAdjacentHTML("afterbegin", html);
  }
}

const bill = new Bill(12345, "AS-12345", "08.06.2022", "09.06.2022");
