class SearchView {
  _parentElement = document.querySelector(".search");

  getQuery() {
    const query = this._parentElement.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }

  addHandlerSearch(callback) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      callback();
    });
  }

  _clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }
}

export default new SearchView();
