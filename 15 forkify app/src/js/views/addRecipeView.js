import View from "./View.js";
import PreviewView from "./previewView.js";
import icons from "url:../../img/icons.svg";

class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");

  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpenModal = document.querySelector(".nav__btn--add-recipe");
  _btnCloseModal = document.querySelector(".btn--close-modal");

  _message = "You successfully uploaded the recipe!";

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

  _generateMarkup() {
    return `
      <form class="upload" action="submit">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST23" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST23" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST23" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="${icons}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>
    </div>`;
  }
}

export default new AddRecipeView();
