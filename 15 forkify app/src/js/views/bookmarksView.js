import View from "./View.js";
import PreviewView from "./previewView.js";
import icons from "url:../../img/icons.svg";

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No bookmarks yet! Find a recipe and bookmark it!";
  _message = "";

  addHandlerBookmark(callback) {
    window.addEventListener("load", callback);
  }

  _generateMarkup() {
    return this._data
      .map((bookmark) => PreviewView.render(bookmark, false))
      .join("");
  }
}

export default new BookmarksView();
