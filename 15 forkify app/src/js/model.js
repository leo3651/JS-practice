import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";
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

export const loadRecipe = async function (id) {
  try {
    const results = await getJSON(`${API_URL}${id}`);

    const { recipe } = results.data;
    console.log(recipe);

    state.recipe = {
      id: recipe.id,
      cookingTime: recipe.cooking_time,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
      bookmarked: false,
    };

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
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image_url,
      publisher: recipe.publisher,
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

export const addBookmark = function (recipe) {
  // add bookmark
  state.bookmarks.push(recipe);
  state.recipe.bookmarked = true;
};

export const removeBookmark = function (id) {
  // remove bookmark
  const index = state.bookmarks.findIndex((bookmark) => bookmark.id === id);
  state.bookmarks.splice(index, 1);

  state.recipe.bookmarked = false;
};
