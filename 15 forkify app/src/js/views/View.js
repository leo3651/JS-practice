import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  /**
   * Render the recived object to the DOM
   * @param {Object | Object[]} state The data to be rendered (e.g. recipe)
   * @param {boolean} [render = true] if false create markup string instead rendering to the DOM
   * @returns {undefined | string} A markup is returned if render = false
   * @this {Object} View instance
   * @author Leo KOvačević
   * @todo Finish implementation
   */

  render(state, render = true) {
    if (!state || (Array.isArray(state) && state.length === 0))
      return this.renderError();

    this._data = state;
    const html = this._generateMarkup();
    if (!render) return html;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  update(state) {
    this._data = state;

    // creates new markup
    const newMarkup = this._generateMarkup();

    // creates new DOM of new markup
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    console.log(newDOM);

    // creates array of nodes of new markup
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    console.log(newElements);

    // creates array of nodes of current markup on the page
    const currentDOM = Array.from(this._parentElement.querySelectorAll("*"));
    console.log(currentDOM);

    newElements.forEach((newElement, i) => {
      const currentElement = currentDOM[i];

      // updates changed text
      if (
        !newElement.isEqualNode(currentElement) &&
        newElement.firstChild?.nodeValue.trim() !== ""
      )
        currentElement.textContent = newElement.textContent;

      // updates changed attributes
      if (!newElement.isEqualNode(currentElement)) {
        console.log(newElement.attributes);
        Array.from(newElement.attributes).forEach((attribute, i, arr) => {
          // console.log(arr);
          // console.log(attribute);
          // console.log(typeof attribute);
          // console.log(attribute.name);
          currentElement.setAttribute(attribute.name, attribute.value);
        });
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
