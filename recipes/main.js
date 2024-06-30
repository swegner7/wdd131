import recipes from "./recipes.mjs";

function randomNumber(input) {
  return Math.floor(Math.random() * input); // returns a random integer from 0 to input
}

function getRandomRecipe(entry) {
  const entryLength = entry.length;
  const randomNum = randomNumber(entryLength);
  return entry[randomNum];
}

// for testing
// console.log(getRandomRecipe(recipes));

function recipeTemplate(recipe) {
  return `<section>
        <img class="image" src="${recipe.image}" alt="${recipe.name}" />
        <div>
          <h3 class="foodType">${recipe.tags}</h3>
          <h2 class="name">${recipe.name}</h2>
          <p class="recipe_ratings">
            <span
              class="rating"
              role="img"
              aria-label="Rating: 4 out of 5 stars"
            >
              <span aria-hidden="true" class="icon-star">⭐</span>
              <span aria-hidden="true" class="icon-star">⭐</span>
              <span aria-hidden="true" class="icon-star">⭐</span>
              <span aria-hidden="true" class="icon-star-empty">⭐</span>
              <span aria-hidden="true" class="icon-star-empty">☆</span>
            </span>
          </p>
          <p class="description">
          ${recipe.description}
          </p>
        </div>
      </section>`;
}

function tagsTemplate(tags) {
  let html = "";
  tags.forEach((tag) => {
    html += `<span class="tag">${tag}</span>`;
  });
  return html;
}

function ratingTemplate(rating) {
  let html =
    '<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      html += '<span aria-hidden="true" class="icon-star">⭐</span>';
    } else {
      html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
  }
  html += "</span>";
  return html;
}

// const recipe = getRandomRecipe(recipes);
// console.log(recipeTemplate(recipe));

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", searchHandler);

function filter(query) {
  const filtered = recipes.filter(filterFunction);
  // sort by name
  const sorted = filtered.sort(sortFunction);
  return sorted;
}

function searchHandler(e) {
  e.preventDefault();
  // get the search input
  const searchValue = searchInput.value.toLowerCase();
  // use the filter function to filter our recipes
  const filteredRecipes = filter(searchValue);
  // render the filtered list
  renderRecipes(filteredRecipes);
}

function renderRecipes(recipes) {
  // code to render the filtered recipes
  const recipesContainer = document.querySelector("#recipes");
  recipesContainer.innerHTML = "";
  recipes.forEach((recipe) => {
    recipesContainer.innerHTML += recipeTemplate(recipe);
  });
}
