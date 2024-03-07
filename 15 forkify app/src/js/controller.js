import "core-js/stable";
import "regenerator-runtime/runtime";
import icons from "url:../img/icons.svg";
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView.js";
import addRecipeView from "./views/addRecipeView.js";

const recipeContainer = document.querySelector(".recipe");

console.log(icons);

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    recipeView.renderSpinner();

    // update results view to mark selected search result
    resultsView.update(model.getSearchResultsPerPage());
    bookmarksView.update(model.state.bookmarks);

    // loading recipe
    await model.loadRecipe(id);
    console.log(model.state);
    const { recipe } = model.state;

    // rendering recipe
    recipeView.render(model.state.recipe);

    // controlServings(); // testing update servings
  } catch (err) {
    console.error(`${err} ☢☢☢☢☢`);
    recipeView.renderError();
    // alert(err);
  }
};

const showSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // get search query
    const query = searchView.getQuery();
    if (!query) return;

    //load search results
    await model.loadSearchResults(query);

    // render results
    console.log(model.state);
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPerPage(1));

    // render pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // render NEW results
  resultsView.render(model.getSearchResultsPerPage(goToPage));

  // render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // update the recipe servings (in state)
  model.updateServings(newServings);
  // update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // add / remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);

  // update recipe view
  recipeView.update(model.state.recipe);

  // render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmark = function () {
  // render bookmarks
  bookmarksView.render(model.state.bookmarks);
  console.log(model.state.bookmarks);
};

const controlAddNewRecipe = function (newRecipe) {
  console.log(newRecipe);
};

const controlUploadRecipe = async function () {};

const init = function () {
  bookmarksView.addHandlerBookmark(controlBookmark);
  recipeView.addHandlerRender(showRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(showSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUploadNewRecipe(controlAddNewRecipe);
};
init();
