import View from "./View.js";
import PreviewView from "./previewView.js";
import icons from "url:../../img/icons.svg";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found! Try another one!";
  _message = "";

  _generateMarkup() {
    return this._data
      .map((result) => PreviewView.render(result, false))
      .join("");
  }
}

export default new ResultsView();
