let apiKey = "8e2a60c29294417784cc205b64ef0d09";

// first apikey = 8e2a60c29294417784cc205b64ef0d09
// second apikey = 8d326c4fedb746d8894c679ad9dee7da
// random function 
function getRandom() {
  let url = "https://api.spoonacular.com/recipes/random?apiKey=" + apiKey + "&number=10";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let title = document.getElementById('output');
      let title2 = document.getElementById('output2');

      console.log(data)
      for (let i = 0; i < 5; i++) {
        title.innerHTML += "<h4>" + data.recipes[i].title + "</h4>";
        title.innerHTML += "<img src=\"" + data.recipes[i].image + "\" width=\"400\" height=\"325\">";
        title.innerHTML += "<div><a href=\"" + data.recipes[i].sourceUrl + "\" target=\"_blank\">Link to the recipe</a></div>";
        title.innerHTML += "<p>Ready in " + data.recipes[i].readyInMinutes + " minutes</p>";
      
      }

      for (let i = 5; i < 10; i++) {
        title2.innerHTML += "<h4>" + data.recipes[i].title + "</h4>";
        title2.innerHTML += "<img src=\"" + data.recipes[i].image + "\" width=\"400\" height=\"325\">";
        title2.innerHTML += "<div><a href=\"" + data.recipes[i].sourceUrl + "\" target=\"_blank\">Link to the recipe</a></div>";
        title2.innerHTML += "<p>Ready in " + data.recipes[i].readyInMinutes + " minutes</p>";
        
      }

    });
}

// Keyword function 
function getRecipe(recipe) {
  
  //let api = "https://api.spoonacular.com/recipes/" + recipe + "/information?apiKey="
  let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + apiKey + "&query=" + recipe + "&number=10";
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      
      let title = document.getElementById('output');
      let title2 = document.getElementById('output2');
      
      if (data.totalResults == 0) {
        title.innerHTML = "Sorry, we could not find any recipes";
      }
      for (let i = 0; i < 5; i++) {
        fetch("https://api.spoonacular.com/recipes/" + data.results[i].id + "/information?apiKey=" + apiKey)
          .then(response => response.json())
          .then(data => {
            console.log(data.readyInMinutes);

            title.innerHTML += "<h5>" + data.title + "</h5>";
            title.innerHTML += "<img src=\"" + data.image + "\" width=\"400\" height=\"325\">";
            title.innerHTML += "<div><a href=\"" + data.sourceUrl + "\" target=\"_blank\">Link to the recipe</a></div>";
            title.innerHTML += "<p>Ready in " + data.readyInMinutes + " minutes</p>";
          });
      }

      for (let i = 5; i < 10; i++) {
        fetch("https://api.spoonacular.com/recipes/" + data.results[i].id + "/information?apiKey=" + apiKey)
          .then(response => response.json())
          .then(data => {
            console.log(data.readyInMinutes);
    
            title2.innerHTML += "<h5>" + data.title + "</h5>";
            title2.innerHTML += "<img src=\"" + data.image + "\" width=\"400\" height=\"325\">";
            title2.innerHTML += "<div><a href=\"" + data.sourceUrl + "\" target=\"_blank\">Link to the recipe</a></div>";
            title2.innerHTML += "<p>Ready in " + data.readyInMinutes + " minutes</p>";
          });
    
        }

        console.log(data);
        
    });
}

// ingredients function 
function getRecipe2(recipe) {
  let url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + apiKey + "&ingredients=" + recipe + "&number=10&ranking=2";
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let title = document.getElementById('output');      
      let title2 = document.getElementById('output2');

      console.log(data);
      if (data.length == 0) {
        title.innerHTML = "Sorry, we could not find any recipes";
      }

      /*
      for (let i = 0; i < 10; i++) {
        fetch("https://api.spoonacular.com/recipes/" + data[i].id + "/information?apiKey=" + apiKey)
          .then(response => response.json())
          .then(data => {
            ingredients_links.innerHTML += "<a href=\"" + data.sourceUrl + "\" target=\"_blank\">Link to: \"" + data.title + "\" recipe</a>";
          })
      }
      */
      
      for (let i = 0; i < 5; i++) {
        title.innerHTML += "<h5>" + data[i].title + "</h5>";
        title.innerHTML += "<img src=\"" + data[i].image + "\" width=\"400\" height=\"325\">";
        title.innerHTML += "<p>" + data[i].missedIngredientCount + " missing ingredient(s): </p>";
        for (let j = 0; j < data[i].missedIngredients.length; j++) {
          title.innerHTML += "<p>- " + data[i].missedIngredients[j].name + "</p>";
        }
      }
      for (let i = 5; i < 10; i++) {
        title2.innerHTML += "<h5>" + data[i].title + "</h5>";
        title2.innerHTML += "<img src=\"" + data[i].image + "\" width=\"400\" height=\"325\">";
        title2.innerHTML += "<p>" + data[i].missedIngredientCount + " missing ingredient(s): </p>";
        for (let j = 0; j < data[i].missedIngredients.length; j++) {
          title2.innerHTML += "<p>- " + data[i].missedIngredients[j].name + "</p>";
        }
      }
      
      
    });
    
}

// diets function 
function getValue() {
  let diet = document.getElementById("mySelect").value;
  return diet;
}

function getRecipe3(recipe) {
  let diet = getValue();
  console.log(diet);
  let title = document.getElementById('output');
  let title2 = document.getElementById('output2');

  let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + apiKey + "&query=" + recipe + "&number=10&diet="+ diet;
  

  fetch(url)
    .then(response => response.json())
    .then(data =>{
      if (data.results.length == 0) {
        title.innerHTML = "Sorry, we could not find any recipes";
      }

      for (let i = 0; i < 5; i++) {
        fetch("https://api.spoonacular.com/recipes/" + data.results[i].id + "/information?apiKey=" + apiKey)
          .then(response => response.json())
          .then(data => {

            title.innerHTML += "<h5>" + data.title + "</h5>";
            title.innerHTML += "<img src=\"" + data.image + "\" width=\"400\" height=\"325\">";
            title.innerHTML += "<div><a href=\"" + data.sourceUrl + "\" target=\"_blank\">Link to the recipe</a></div>";
            title.innerHTML += "<p>Ready in " + data.readyInMinutes + " minutes</p>";
          });
      console.log(data);
        }

      for (let i = 5; i < 10; i++) {
          fetch("https://api.spoonacular.com/recipes/" + data.results[i].id + "/information?apiKey=" + apiKey)
          .then(response => response.json())
          .then(data => {
  
            title2.innerHTML += "<h5>" + data.title + "</h5>";
            title2.innerHTML += "<img src=\"" + data.image + "\" width=\"400\" height=\"325\">";
            title2.innerHTML += "<div><a href=\"" + data.sourceUrl + "\" target=\"_blank\">Link to the recipe</a></div>";
            title2.innerHTML += "<p>Ready in " + data.readyInMinutes + " minutes</p>";
          });
      console.log(data);
        }
    });
}



// clear button function 
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}  