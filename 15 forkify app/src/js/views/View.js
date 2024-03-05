import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  render(state) {
    if (!state || (Array.isArray(state) && state.length === 0))
      return this.renderError();

    this._data = state;
    const html = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  update(state) {
    if (!state || (Array.isArray(state) && state.length === 0))
      return this.renderError();

    this._data = state;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    console.log(newDOM);

    const newElements = Array.from(newDOM.querySelectorAll("*"));
    console.log(newElements);

    const currentDOM = Array.from(this._parentElement.querySelectorAll("*"));
    console.log(currentDOM);

    newElements.forEach((newElement, i) => {
      const currentElement = currentDOM[i];

      // console.log(newElement);
      // console.log(currentElement);
      // console.log(currentElement, newElement.isEqualNode(currentElement));
      // console.log(
      //   "CHILD NODE: ",
      //   newElement.firstChild,
      //   "VALUE: ",
      //   newElement.firstChild?.nodeValue
      // );
      // console.log(newElement.firstChild?.nodeValue.trim() === "");
      console.log(typeof newElement.nodeValue?.trim());
      console.log(newElement.nodeValue?.trim() == null);

      if (
        !newElement.isEqualNode(currentElement) &&
        newElement.firstChild?.nodeValue.trim() !== ""
      ) {
        currentElement.textContent = newElement.textContent;
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner = function () {
    const html = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  };

  renderError(message = this._errorMessage) {
    const html = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  renderMessage(message = this._message) {
    const html = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }
}
