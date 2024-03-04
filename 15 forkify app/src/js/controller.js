import "core-js/stable";
import "regenerator-runtime/runtime";
import icons from "url:../img/icons.svg";
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

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

    // loading recipe
    await model.loadRecipe(id);
    console.log(model.state);
    const { recipe } = model.state;

    // rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(`${err} ☢☢☢☢☢`);
    recipeView.renderError();
    // alert(err);
  }
};

const showSearchResults = async function () {
  try {
    await model.loadSearchResults("pizza");
    console.log(model.state);
  } catch (err) {
    console.log(err);
  }
};
showSearchResults();

const init = function () {
  recipeView.addHandlerRender(showRecipe);
};
init();
