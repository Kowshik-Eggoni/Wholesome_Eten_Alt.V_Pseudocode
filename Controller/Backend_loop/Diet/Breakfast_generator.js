Require Recipes (all the list of foods from Recipes database)
//Recipes database is accessed for various reasons in this feature
Require UserData (all the user data)
//To access the user data (Allergies) 
Require Ingredients (from Ingredient database) 
//To access "nuts" from the Ingredient database

Get Allergies;
//Get from user data. Used to filter recipes against ingredients allergic to the user
Get dietPreferences;
//Get from user data. Used to filter diet for vegans, vegetarians, Eggetarians, and Non-vegetarians
Get targetCalories;
//Get from targetCalories calculator or DB

let breakfastMainCourse; 
let breakfastCondiment;
let breakfastCondiment2;
let breakfastAddOn;
// let lunchMainCourse;
// let lunchCondiment;
// let snacks;
// let supperMainCourse;
// let supperCondiment;
//Here we declare all the main course and condiments that are used to choose the daily diet

let mealCalories = 0.2*targetCalories;
//Here we allocate a portion of daily calories for the breakfast

let mainCourseQty;
let breakfastCondimentQty;
let breakfastCondiment2Qty;
let breakfastAddOnQty;
let ratioMainCourse;
let mainCourseLimit;
let breakfastMainCourseType;
let breakfastCondiment2Type;
//These parameters are used to calculate all the breakfast quantities

let pick_breakfastCondiment2 = (mainCourseQty,ratioMainCourse = 1,mainCourseLimit, breakfastCondiment2, breakfastCondiment2Type) => {
  if (mainCourseQty = mainCourseLimit) {
    breakfastCondiment2 = Randomly pick an ingredient from type: breakfastCondiment2Type (fetch from Ingredient DB);
    }
    breakfastCondiment2Qty = ratioMainCourse*mealCalories - mainCourseLimit*(calories of breakfastCondiment);
}

let pick_mainCourseQty = (mainCourseQty,mainCourseLimit) => {
  if (mainCourseQty <= mainCourseLimit) {
    mainCourseQty is equal to the calculated quantity;
  } else {
    mainCourseQty = mainCourseLimit;
  }
}

let pick_Breakfast = () => {
  if (Recipes[Breakfast Maincourse] == true) {
    breakfastMainCourse = Randomly pick a recipe matching the query
    return breakfastMainCourse
}
//Access recipe database and randomly pick a breakfast main course  
}

let generate_Breakfast = (breakfastMainCourse, breakfastCondiment = "", breakfastCondiment2 = "", breakfastMainCourseType) => {
//This function is to generate breakfast meal for the user. We will use the same function again in Dinner

     breakfastMainCourseType = Recipes.find({
      name: breakfastMainCourse;
      From the document, find "type" for the breakfastMainCourse;
    }) 
    return breakfastMainCourseType;   
//For the randomly chosen or user selected breakfast, find the breakfast type

       switch (breakfastMainCourseType) {
        case "Idlis" || "Dosas" :
          mainCourseQty = 0.5*mealCalories/calories per serving of breakfastMainCourse;
          //fetch calories of the breakfastMainCourse from the recipes Database
          //Half of the breakfast calories are allocated for the main course
          pick_mainCourseQty (mainCourseQty, 4);
          Round quantities
          breakfastCondiment = Randomly pick a recipe from type: "Breakfast Chutneys" (Recipe DB);
          breakfastCondimentQty = 0.5*mealCalories/calories per serving of breakfastCondiment;
          Round quantity to the nearest tablespoons/cups
          //fetch calories of the breakfastCondiment from the recipes Database
          //Half of the breakfast calories are allocated for the condiments
          pick_breakfastCondiment2 (mainCourseQty, 0.5, 4, breakfastCondiment2, "nuts");
            break;
        case "Salads" || "Soups" || "Upmas" :
          mainCourseQty = mealCalories/calories per serving of breakfastMainCourse;
          pick_mainCourseQty (mainCourseQty, 3);
          pick_breakfastCondiment2 (mainCourseQty, 1, 3, breakfastCondiment2, "nuts");
          Round quantity to the nearest half cups/units
            break;
        case "Wholemeals" || "Omelettes" :
          mainCourseQty = mealCalories/calories per serving of breakfastMainCourse;
          pick_mainCourseQty (mainCourseQty, 2);
          pick_breakfastCondiment2 (mainCourseQty, 1, 2, breakfastCondiment2, "fruits");
          Round quantity to the nearest half cups/units
            break;
        case "Cereals":
          mainCourseQty = mealCalories/calories per serving of breakfastMainCourse;
          pick_mainCourseQty (mainCourseQty, 1);
          Round quantity to the nearest quarter cups 
          break;
      }
}

let addon_Breakfast = (breakfastMainCourseType, breakfastAddOn, breakfastAddOnQty) => {
//This function is for the user to pick an addon condiment for specific breakfasts
  switch (breakfastMainCourseType) {
    case "Dosas" || "Idlis":
      breakfastAddOn = Let the user pick anything from "Breakfast Chutneys", "Spice Chutneys", "Liquids";
      Make sure Breakfast === true;
      breakfastAddOnQty = 0.1*mealCalories;
      breakfastCondiment = 0.8*breakfastCondiment; (Reduce the breakfast main course quantity to 80% of its previous value)
      break;
    case "Upmas":
      breakfastAddOn = Let the user pick anything from "Breakfast Chutneys", "Spice Chutneys", "Liquids";
      Make sure Breakfast === true;
      breakfastAddOnQty = 0.2*mealCalories;
      mainCourseQty = 0.8*mainCourseQty; (Reduce the breakfast main course quantity to 80% of its previous value)
      break;
  }
}







