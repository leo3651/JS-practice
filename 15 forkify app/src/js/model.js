import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  recipe: {},
  search: {},
  bookmarks: {},
};

export const loadRecipe = async function (id) {
  try {
    const results = await getJSON(`${API_URL}/${id}`);

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
    throw err;
  }
};