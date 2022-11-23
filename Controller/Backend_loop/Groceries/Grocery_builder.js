Require User_diet (from the database)
// You need to fetch user meal and quantity recommendations to prep the grocery list

let freshProduceArray;
let meatEggsArray;
let fPQuantityArray;
let mEQuantityArray;

let freshProduceFinder = () => {
    for (let j = 0; j < [recipe.ingredients].length; j++) {
        if (ingredients.category === "GREEN LEAFY VEGETABLES"||"OTHER VEGETABLES"||"ROOTS, TUBERS, AND BULBS"||"FRUITS") {
            push the ingredient to freshProduceArray();

            (recommended quantity of recipe)/(serving size of recipe*total servings of recipe)*(quantity of the ingredient);
            push the quantity to fPQuantityArray(); 
        }
    }
}

let meatEggsFinder = () => {
    for (let j = 0; j < [recipe.ingredients].length; j++) {
        if (ingredients.category === "MEAT"||"EGG AND EGG PRODUCTS") {
            push the ingredient to meatEggsArray();
    
            (recommended quantity of recipe)/(serving size of recipe*total servings of recipe)*(quantity of the ingredient);
            push the quantity to mEQuantityArray(); 
        }
    }
}

//Use this function to run through all the ingredients in a recipe and identify fruits, vegetables, meat, and eggs among them and their quantities.
//Store them somewhere so that we can send them as push notifications and display as a user-specific checklist

if (today = "Mon" || "Wed" ) {
    run cron.job @ 12:01 AM
    for (let i = 0; i < [Tomorrow + Day after tomorrow meals].length; i++) {
        freshProduceFinder();
    }
//We are showing grocery list for two days for fruits and vegetables. Automatically generate these lists at 12:01 AM on Mondays and Wednesdays
} else if (today = "Fri") {
    run cron.job @ 12:01 AM
    for (let i = 0; i < [Tomorrow + next 2 days meals].length; i++) {
        freshProduceFinder(); 
    }
//On Fridays we generate the fruits and vegetables grocery lists for 3 days
}

if (today = "Sat") {
    run cron.job @ 12:01 PM
    for (let i = 0; i < [Tomorrow + 6 days meals].length; i++) {
        meatEggsFinder();    
    }
//On Mondays we generate the fruits and vegetables grocery lists for 3 days
}

// Convert all the quantities to grams;
// Remove duplicates and add up quantities;
// Talk to front-end. I think they are fetching the recommendations dynamically. Display the results as follows;
console.log("Fruits and Vegetables"/n, freshProduceArray[n], " ", fPQuantityArray[n], " grams"/n, meatEggsArray[n], " ", mEQuantityArray[n]);
// n = 0 to n (number of ingredients that are matching the query); 