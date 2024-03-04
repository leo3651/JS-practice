import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
  },
  bookmarks: {},
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
    };
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
