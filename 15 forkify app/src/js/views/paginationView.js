import View from "./View.js";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  _generateMarkup() {
    console.log(this._data);

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const page = this._data.page;

    // page 1 and there are other pages
    if (page === 1 && numPages > 1) {
      console.log("page 1 and other pages");
      return `
        <button class="btn--inline pagination__btn--next">
          <span>Page ${page + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>`;
    }

    // last page
    if (page === numPages && numPages > 1) {
      console.log("last page");
      return `
        <button class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${page - 1}</span>
        </button>`;
    }

    // some other page
    if (page < numPages) {
      console.log("some other page");
      return `
      <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${page - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next">
        <span>Page ${page + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }

    // page 1 and there are NO other pages
    return ``;
  }
}

export default new PaginationView();
