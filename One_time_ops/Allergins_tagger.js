//Using this code snippet, we will build an allergin list (array) for each recipe
//When we generate diet for a person, we will use this list to screen recipes against their allergies 
Require Recipes database
//Write routes to fetch the Recipes collection from Wholesome Eten DB 
Const Array = [{"Peanuts": "Groundnuts"},
                {"Tree nuts": ["Almonds", "Cashews", "Pine nuts"]}
                {"Allergin x": "Ingredient y"}]

//This Array contains all the allergins in their respective categories. 
//We compare all the recipes against this Array and generate the Allergins list for each recipe
//We will do this for all the recipes and store it in the DB.
//Every time we add a new recipe, we will go through the same process. 
//Also, we will do this once every month or so, just as a precautionary maintenance until the data standardises

for (let i=1; i<db.Recipes.length; i++) {
// runs the loop through the entire recipe collection
    for (let j=1; j<db.Recipes.Ingredients.length; j++) {
// runs the loop through the entire ingredient list of a recipe
        let arr = 0;
        switch (Ingredient_name) {
            case "Groundnuts":
              arr = "Peanuts";
              break;
            case ("Almonds" || "Cashews" || "Pine nuts"):
              arr = "Tree nuts";
              break;
            case "Ingredient y":
               day = "Allergin x";
              break;
          } 
          return arr+=;
//For all the true cases, the allergin category is added into arr (list of allergins) for each recipe 
    }
    console.log(Recipe_name, arr);
//Once completed, the Recipe_name and arr are printed. The loop then moves on to the next recipe
}
//Once this code runs through the entire Recipe collection and generates the allergins for each recipe, we wil use DB query methods to append or update Allergins for each recipe