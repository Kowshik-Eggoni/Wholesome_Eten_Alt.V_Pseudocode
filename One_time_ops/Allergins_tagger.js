//Using this code snippet, we will build an allergin list (array) for each recipe
//When we generate diet for a person, we will use this list to screen recipes against their allergies 
Require Recipes database
//Write routes to fetch the Recipes collection from Wholesome Eten DB 
//Here, we compare all the recipes against the cases in the loop below and generate the Allergins list for each recipe
//We will do this for all the recipes and store it in the DB.
//Every time we add a new recipe, we will go through the same process. 
//Also, we will do this once every month or so, just as a precautionary maintenance until the data standardises

for (let i=1; i<db.Recipes.length; i++) {
// runs the loop through the entire recipe collection
    for (let j=1; j<db.Recipes.Ingredients.length; j++) {
// runs the loop through the entire ingredient list of a recipe
        let arr = 0;
        switch (Ingredient_name) {
            case ("Butter" || "Cheese" || "Buffalo milk" || "Cow milk" || "Paneer" || "Khoa"):
              arr = "Milk";
              break;
            case ("Egg" || "Egg white" || "Egg yolk" || "Boiled egg" || "Boiled egg white" || "Boiled egg yolk" || "Duck egg" || "Quail egg"):
              arr = "Egg"; 
              break;
            case ("Almond" || "Cashew nut" || "Pistachio nuts" || "Walnut" || "Pine nuts"):
              arr = "Tree nuts";
              break;
            case ("Ground nut"||"Peanut Powder"):
              arr = "Peanut";
              break;
            case ("Flax seeds"||"Niger seeds"||"Pine nuts"||"Pistachio nuts"||"Safflower seeds"||"Sunflower seeds"||"Watermelon seeds"||"Chia seeds"):
              arr = "Seeds";
              break;
            case ("Barley" || "Refined wheat flour" || "Wheat flour" || "Wheat" || "Bulgur" || "Wheat rava" || "Wheat vermicelli" || "Roasted vermicelli"):
              arr = "Gluten";
             break;
            case ("Anchovy"||"Bombay duck"||"Hilsa"||"Milk fish"||"White Pomfret"||"Red snapper"||"Salmon"||"Sardine"||"Shark"||"Tilapia"||"Tuna"||"Vanjaram"||"Cat fish"||"Catla"||"Freshwater Eel"||"Pangas"||"Rohu"):
              arr = "Fish";
             break;
            case ("Sea crab"||"Lobster"||"Mud crab"||"Oyster"||"Tiger Prawns"||"Clam"||"Octopus"||"Squid"||"Crab"||"Big prawns"||"Small prawns"||"Tiger prawns"):
              arr = "Shellfish";
             break;
          } 
          return arr+=;
//For all the true cases, the allergin category is added into arr (list of allergins) for each recipe 
    }
    console.log(Recipe_name, arr);
//Once completed, the Recipe_name and arr are printed. The loop then moves on to the next recipe
}

Allergens
//Once this code runs through the entire Recipe collection and generates the allergins for each recipe, we wil use DB query methods to append or update Allergins for each recipe