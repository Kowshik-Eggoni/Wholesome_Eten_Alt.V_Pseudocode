Require Recipes (all the list of foods from Recipes database)
//Recipes database is accessed for various reasons in this feature
Require Ingredients (from Ingredient database) 
//To access "nuts" from the Ingredient database

Get targetCalories;
//Get from targetCalories calculator or DB

let snack;
let snackQty;
//Here we declare snack to be used in the daily diet

let mealCalories = 0.15*targetCalories;
//Here we allocate a portion of daily calories for the snack

let generate_Snack = () => {
    snack = Pick randomly from snacks || breakfast fruits;
    if (snack = "snacks") {
        snackQty = mealCalories/energyPerServing;
        //fetch the units from recipe
    } else {
        if (unitWeight != 0) {
            snackQty = mealCalories/unitWeight;
            round to the nearest half;
        } else {
            snackQty = mealCalories/gramsPerCup;
            round to the nearest half;
        }
    }  
}
