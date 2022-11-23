let pick_Diet = () => {
    pick_Breakfast();
        generate_Breakfast();
        For each day, Add breakfastMainCourse, mainCourseQty + units, mainCourseCals, 
                          breakfastCondiment, breakfastCondimentQty + units, CondimentCals,
                          breakfastCondiment2, breakfastCondiment2Qty + units, Condiment2Cals to the DB; 
        pick_lunch();
        generate_lunch();
        For each day, Add lunchMainCourse, mainCourseQty + units, mainCourseCals, 
                          lunchCondiment, lunchCondimentQty + units, CondimentCals,
                          lunchCondiment2, lunchCondiment2Qty + units, Condiment2Cals to the DB;  
        pick_Supper();
        generate_Supper();
        For each day, Add supperMainCourse, mainCourseQty + units, mainCourseCals, 
                          supperCondiment, supperCondimentQty + units, CondimentCals,
                          supperCondiment2, supperCondiment2Qty + units, Condiment2Cals to the DB;
        pick_Snack();
        generate_Snack();
        For each day, Add snack, snackQty, snackCals to the DB; 
}

/*This function is used to generate diet for a typical day. You can call it once a day as a cron.job 
or several times a day when on-boarding a new or returning user*/