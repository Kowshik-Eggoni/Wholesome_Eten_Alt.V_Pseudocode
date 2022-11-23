//Diet recommendation logic
//Receive the following inputs from front-end. These inputs are required to calculate the number of calories a user should target to achieve their weight loss, weight gain, or fitness goals
Get Height (num in feet & inches, ft & in || centimetres, cm)
Get Weight (num in Kilograms, Kg || Pounds, lb)
Get Sex (Male || Female)
Get Age (num in years)
Get physicalActivityAtWork (Very light : "Sitting at the computer or a desk most of the day" ||
                                Light : "Light industrial, sales, or office work with light activities" ||
                                Moderate : "Cooking & cleaning all day, mail delivery by foot or bicycle" ||
                                Heavy : "Heavy industrial work, construction work or farming, athletics")
Get physicalActivityAtLeisure (Very light : "Almost no activity at all" ||
                                Light : "Walking, non-strenuous cycling or gardening approximately once a week" ||
                                Moderate : "Regular activity at least once a week, e.g., walking, bicycling to work or gardening" ||
                                Active : "Regular activities more than once a week, e.g., intense walking, bicycling or sports" ||
                                Very Active : "Strenuous activities several times a week")

Get goalWeight  (num in Kilograms, Kg || Pounds, lb)
Get targetDays  (num in days)

//Backend code for this part is taken from NIDDK Body Weight Planner. This code calculates the target calories

Return targetCalories (num in Calories)
//Store the target calories somewhere in the User data (DB)