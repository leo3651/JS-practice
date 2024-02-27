export const state = {
  recipe: {},
  search: {},
  bookmarks: {},
};

export const loadRecipe = async function (id) {
  try {
    const response = await fetch(
      // "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"

      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const results = await response.json();
    console.log(response);
    console.log(results);

    if (!response.ok)
      throw new Error(`${results.message} (${response.status})`);

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
    alert(err);
  }
};
