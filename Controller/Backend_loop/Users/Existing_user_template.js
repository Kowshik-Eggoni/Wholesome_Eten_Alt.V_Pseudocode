Require (user_payment_details)
Require (user_diet)
Require (user_forms)

//Here we generate everyday diet for existing users
cron.job @ 12:01 AM 
if (isPaid = true && today < expiryDay-14) {
    pick_Diet();
    Delete previous day;
//To generate diet for a premium user    
} else if (isPaid = true && today >= expiryDay-7) {
    pick_NonPremiumDiet();
    Delete previous day;
//Generate non-premium diet for user whose premium is expiring in less than 7 days
} else if (ifPaid = false) {
    pick_NonPremiumDiet();
    Delete previous day;
//Generate diet for a free (no-premium) user
}
//Do not generate diet for the users during the last 7 - 14 days of premium expiry