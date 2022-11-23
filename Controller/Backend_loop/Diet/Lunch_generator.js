Require Recipes (all the list of foods from Recipes database)
//Recipes database is accessed for various reasons in this feature
Require Ingredients (from Ingredient database) 
//To access "nuts" from the Ingredient database
Require mainCourseQty (from Breakfast_generator)

Get dietPreferences;
//Get from user data. Used to filter diet for vegans, vegetarians, Eggetarians, and Non-vegetarians
Get targetCalories;
//Get from targetCalories calculator or DB

let lunchMainCourse;
let lunchCondiment;
let lunchCondiment2;
//Here we declare all the main course and condiments that are used to choose the daily diet

let mealCalories = 0.4*targetCalories;
//Here we allocate a portion of daily calories for the breakfast

let lunchMainCourseQty;
let lunchCondimentQty;
let lunchCondiment2Qty;
let mainCourseLimit;
let lunchMainCourseType;
//These parameters are used to calculate all the breakfast quantities

let pick_Lunch = () => {
    lunchMainCourse = "Roti" || "Brown Rice" (Randomly pick one of these two);
    return lunchMainCourse;
}

let generate_Lunch = (lunchMainCourse, lunchCondiment = "", lunchCondiment2 = "", lunchMainCourseType) => {
//This function is to pick lunch for the user. We will use the same function again in Dinner  

    lunchMainCourseType = Recipes.find({
    name: breakfastMainCourse;
    From the document, find "type" for the lunchMainCourse;
    })

    switch (lunchMainCourseType) {
        case "Rotis":
            mainCourseQty = 0.6*mealCalories/calories per serving of lunchMainCourse;
            pick_mainCourseQty (mainCourseQty, 5);

            lunchCondiment = Randomly pick a recipe from types: "Veg dals" || "Leafy dals" || "Legume curries" || "Veg curries" || "Leafy curries" (from Recipe DB);
            lunchCondimentQty = 0.4*mealCalories/calories per serving of lunchCondiment;
            break;
        case "Cooked Grains":
            mainCourseQty = 0.5*mealCalories/calories per serving of lunchMainCourse;
            pick_mainCourseQty (mainCourseQty, 4);

            lunchCondiment = Randomly pick a recipe from types: "Veg dals" || "Leafy dals" || "Legume curries" || "Veg curries" || "Leafy curries" (from Recipe DB);
            lunchCondimentQty = 0.25*mealCalories/calories per serving of lunchCondiment;

            lunchCondiment2 = Randomly pick a recipe from type: "Liquids" (from Recipe DB);
            lunchCondiment2Qty = 0.25*mealCalories/calories per serving of lunchCondiment2;
            break;
        case "Rice meals":
            mainCourseQty = 1*mealCalories/calories per serving of lunchMainCourse;
            pick_mainCourseQty (mainCourseQty, 4);
            break;
    }  
}  

let addon_Lunch = (lunchMainCourseType, lunchAddOn, lunchAddOnQty) => {
    //This function is for the user to pick an addon condiment for specific breakfasts
      switch (lunchMainCourseType) {
        case "Rotis":
          lunchAddOn = Let the user pick anything from "Veg Fries", "Leafy Fries", "Other Fries";
          lunchAddOnQty = 0.1*mealCalories;
          lunchCondimentQty = 0.3*mealCalories/calories per serving of lunchCondiment;
          break;
        case "Cooked Grains":
          lunchAddOn = Let the user pick anything from "Veg Fries", "Leafy Fries", "Other Fries", "Veg Chutneys", "Leafy Chutneys";
          lunchAddOnQty = 0.1*mealCalories;
          lunchCondiment2Qty = 0.15*mealCalories/calories per serving of lunchCondiment;
          break;
        case "Rice meals":
          lunchAddOn = Let the user pick anything from "Veg Fries", "Leafy Fries", "Other Fries", "Veg Chutneys", "Leafy Chutneys", "Veg Curries", "Leafy Curries", "Other Curries";
          lunchAddOnQty = 0.1*mealCalories;
          mainCourseQty = 0.9*mealCalories/calories per serving of lunchCondiment;
          break;
      }
    }






