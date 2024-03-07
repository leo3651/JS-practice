import View from "./View.js";
import PreviewView from "./previewView.js";
import icons from "url:../../img/icons.svg";

class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");

  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpenModal = document.querySelector(".nav__btn--add-recipe");
  _btnCloseModal = document.querySelector(".btn--close-modal");

  constructor() {
    super();
    this.addHandlerShowWindow();
    this.addHandlerHideWindow();
  }

  _toggleWindow() {
    this._window.classList.toggle("hidden");
    this._overlay.classList.toggle("hidden");
  }

  addHandlerShowWindow() {
    this._btnOpenModal.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".nav__btn--add-recipe");
        if (!btn) return;
        this._toggleWindow();
      }.bind(this)
    );
  }

  addHandlerHideWindow() {
    this._btnCloseModal.addEventListener(
      "click",
      this._toggleWindow.bind(this)
    );
    this._overlay.addEventListener("click", this._toggleWindow.bind(this));
  }

  addHandlerUploadNewRecipe(callback) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const inputValues = [...new FormData(this)];
      const dataArr = Object.fromEntries(inputValues);

      console.log(inputValues);
      callback(dataArr);
    });
  }
}

export default new AddRecipeView();
