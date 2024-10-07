const recipes = [{ name: 'Pizza', ingredients: ['harina', 'queso'] }];
document.getElementById('search').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => recipe.ingredients.includes(searchTerm));
  document.getElementById('recipeList').innerHTML = filteredRecipes.map(r => `<li>${r.name}</li>`).join('');
});
