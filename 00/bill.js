class Bill {
  #totalPrice;
  constructor(
    billNumber = 123,
    serviceName = 123,
    startDate = "08.06.2022",
    endDate = "11.06.2022",
    people = 1,
    price = 100,
    creditCard = "Visa",
    latest1 = "08.06.2022, 11:00",
    latest2 = "08.06.2022, 15:00"
  ) {
    this.billNumber = billNumber;
    this.serviceName = serviceName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.people = people;
    this.price = price;
    this.creditCard = creditCard;
    (this.latest1 = latest1), (this.latest2 = latest2);

    this.calcQuantity();
    this.#generateFirstTable();
    this.#generateSecondTable();
  }

  #generateFirstTable() {
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
            <td>${this.people} ${this.people > 1 ? "people" : "preson"}</td>
            <td>${this.price} EUR</td>
            <td>${this.quantity} ${this.quantity > 1 ? "nights" : "night"}</td>
            <td style="font-weight: normal">${this.#totalPrice} EUR</td>
          </tr>
          <tr>
            <td colspan="6" style="color: transparent">Empty</td>
          </tr>
          <tr style="background-color: lightblue">
            <td colspan="5">Total</td>

            <td>${this.#totalPrice} EUR</td>
          </tr>
        </tbody>
      </table>
    `;

    this.renderHtml(html, ".table-1");
  }

  #generateSecondTable() {
    const html = `
    <table>
        <thead>
          <tr>
            <th>Payment</th>
            <th>Payment method</th>
            <th>Time of payment</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Advence payment</td>
            <td>Credit card (${this.creditCard})</td>
            <td>Latest till ${this.latest1}</td>
            <td>${this.#totalPrice / 2} EUR</td>
          </tr>
          <tr>
            <td>Advence payment</td>
            <td>Credit card (${this.creditCard})</td>
            <td>Latest till ${this.latest2}</td>
            <td>${this.#totalPrice / 2} EUR</td>
          </tr>
        </tbody>
      </table>`;
    this.renderHtml(html, ".table-2");
  }

  calcQuantity() {
    const differenceInMs =
      new Date(this.formatDate(this.endDate)).getTime() -
      new Date(this.formatDate(this.startDate)).getTime();
    this.quantity = differenceInMs / (1000 * 3600 * 24);
    this.#totalPrice = this.quantity * this.price;
  }

  renderHtml(html, element) {
    document.querySelector(element).insertAdjacentHTML("afterbegin", html);
  }

  formatDate(date) {
    return new Intl.DateTimeFormat("HR-hr", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }).format(new Date(date));
  }
}

// const bill = new Bill(12345, "AS-12345", "06.08.2022", "06.09.2022", 5, 103);

const bill2 = new Bill(12345, "AS-12345", "08.06.2022", "10.6.2022", 5, 103);
