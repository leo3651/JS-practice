import { API_URL, KEY } from "./config.js";
// import { getJSON, sendJSON } from "./helpers.js";
import { AJAX } from "./helpers.js";
import { RES_PER_PAGE } from "./config.js";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;

  return {
    id: recipe.id,
    cookingTime: recipe.cooking_time,
    imageUrl: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    title: recipe.title,
    bookmarked: false,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const results = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(results);

    if (state.bookmarks.some((bookmark) => bookmark.id === state.recipe.id))
      state.recipe.bookmarked = true;

    console.log(state.recipe);
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    console.log(data);

    state.search.results = data.data.recipes.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      imageUrl: recipe.image_url,
      publisher: recipe.publisher,
      ...(recipe.key && { key: recipe.key }),
    }));
    console.log(state);
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
// loadSearchResults("pizza");

export const getSearchResultsPerPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach((ingredient) => {
    ingredient.quantity =
      (ingredient.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // add bookmark
  state.bookmarks.push(recipe);

  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

export const removeBookmark = function (id) {
  // remove bookmark
  const index = state.bookmarks.findIndex((bookmark) => bookmark.id === id);
  state.bookmarks.splice(index, 1);

  state.recipe.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem("bookmarks");
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();
console.log(state.bookmarks);

export const uploadRecipe = async function (newRecipe) {
  try {
    const newRecipeArray = Object.entries(newRecipe);

    const ingredients = newRecipeArray
      .filter(
        ([entryName, entryValue]) =>
          entryName.startsWith("ingredient") && entryValue !== ""
      )
      .map(([_, entryValue]) => {
        console.log(entryValue);

        const ingredientsArr = entryValue.split(",").map((el) => el.trim());

        if (ingredientsArr.length !== 3)
          throw new Error("Please choose the correct format");

        const [quantity, unit, description] = ingredientsArr;
        return { quantity: +quantity || null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      cooking_time: +newRecipe.cookingTime,
      image_url: newRecipe.image,
      source_url: newRecipe.sourceUrl,
      servings: +newRecipe.servings,
      publisher: newRecipe.publisher,
      ingredients,
    };

    console.log(recipe);

    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    console.log(data);

    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
    console.log(state.recipe);
  } catch (err) {
    throw err;
  }
};
