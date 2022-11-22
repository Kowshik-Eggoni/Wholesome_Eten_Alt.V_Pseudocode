Require Recipes (all the list of foods from Recipes database)
//Recipes database is accessed for various reasons in this feature
Require Ingredients (from Ingredient database) 
//To access "nuts" from the Ingredient database
Require Breakfast_generator 
Require Lunch_generator

Get dietPreferences;
//Get from user data. Used to filter diet for vegans, vegetarians, Eggetarians, and Non-vegetarians
Get targetCalories;
//Get from targetCalories calculator or DB

let mealCalories = 0.25*targetCalories;
//Here we allocate a portion of daily calories for the breakfast
let mainCourse;

let pick_Supper = () => {
    mainCourse = Randomly select one of the two (pick_Breakfast || pick_Lunch)
    if (mainCourse = breakfastMainCourse) {
        generate_Breakfast();
    } else {
        generate_Lunch();
    }
}

let addon_Supper = () => {
    //This function is for the user to pick an addon condiment
    if (mainCourse = breakfastMainCourse) {
        addon_Breakfast();
    } else {
        addon_Lunch();
    }
}