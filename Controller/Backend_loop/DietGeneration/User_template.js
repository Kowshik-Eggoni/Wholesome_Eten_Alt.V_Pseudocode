Require (user_payment_details)
Require (user_diet)
Require (user_forms)

let premium_UserOnboarding = () => {
    for (let i = 0; i < 14; i++) {
        pick_Diet();      
    }
    for (let i = 0; i < 3; i++) {
        freshProduceFinder();
    }
    for (let i = 0; i < 7 - (this.day); i++) {
        meatEggsFinder();
    }
}
//This function is used to onboard a user who is signing up as a premium user

let premium_Extension = () => {
    for (let i = 0; i < 14-(last.premium.date - get.date); i++) {
        pick_Diet();     
    }
    for (let i = 0; i < 3; i++) {
        freshProduceFinder();
    }
    for (let i = 0; i < 7 - (this.day); i++) {
        meatEggsFinder();
    }
}

let free_UserOnboarding = () => {
    for (let i = 0; i < 7; i++) {
        pick_Diet();      
    }
    for (let i = 0; i < 3; i++) {
        freshProduceFinder();
    }
    for (let i = 0; i < 7; i++) {
        meatEggsFinder();
    }
}

if (user_diet.length = 0 && isPaid = true) {
    premium_UserOnboarding();
} else if (user_diet.length = 7 && isPaid = true) {
    if (user has at least one premium day) {
        Delete existing non-premium diet;
        premium_Extension();
    } else if (user has no premium days) {
        Delete existing diet;
        premium_UserOnboarding();
    }
} else if (user_diet.length > 7 && user_diet.length <=14 && isPaid = true) {
        premium_Extension(); 
} else if (user_diet.length = 0 && isPaid = false) {
        free_UserOnboarding(); 
}