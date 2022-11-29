Require (user_payment_details)
Require (user_diet)
Require (user_forms)

let premium_UserOnboarding = () => {
    for (let i = 0; i < 14; i++) {
        pick_Diet();  
    //Pick diet for 14 days    
    }
    for (let i = 0; i < 3; i++) {
        freshProduceFinder();
    //Generate veggie & fruit list for the next 3 days
    }
    for (let i = 0; i < 7 - (this.day); i++) {
        meatEggsFinder();
    //Generate meat & eggs list for the rest of the week until saturday end of the day
    }
}
//This function is used to onboard a user who is signing up as a premium user

let premium_Extension = () => {
    for (let i = 0; i < 14-(last.premium.date - get.date); i++) {
        pick_Diet();
    //Pick diet for non-premium days (14 - premium days)     
    }
}
//This is for a user who is extending their premium membership

let free_UserOnboarding = () => {
    for (let i = 0; i < 7; i++) {
        pick_Diet();   
    //Pick diet for 7 days   
    }
    for (let i = 0; i < 3; i++) {
        freshProduceFinder();
    }
    for (let i = 0; i < 7; i++) {
        meatEggsFinder();
    //Generate meat & eggs list for 7 days
    }
}
//This function is to onboard a free user with 7-day premium

if (user_diet.length = 0 && isPaid = true) {
    premium_UserOnboarding();
//signing up as a premium user
} else if (user_diet.length = 7 && isPaid = true) {
    if (user has at least one premium day) {
        Delete existing non-premium diet;
        premium_Extension();
    } else if (user has no premium days) {
        Delete existing diet;
        premium_UserOnboarding();
    }
//users with more than 1 non-premium days and just signed for or extended premium 
} else if (user_diet.length > 7 && user_diet.length <=14 && isPaid = true) {
        premium_Extension(); 
//users with more than 7 premium days and extending premium membership
} else if (user_diet.length = 0 && isPaid = false) {
        free_UserOnboarding(); 
//users onboarding for free
}