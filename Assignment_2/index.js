"use strict";
// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
var temperatureInCelcius = 39;
var temperatureInFahrenheit = 67;
var Fahrenheit;
Fahrenheit = (temperatureInCelcius * 9 / 5) + 32;
console.log("Temperature after converting from Celcius to Fahreheit is :", Fahrenheit);
var Celcius;
Celcius = (temperatureInFahrenheit - 32) * 5 / 9;
console.log("Temperature after converting from Fahrenheit to Celcius is :", Celcius);
console.log("\n\n");
// Write a program that calculates the percentage.
var totalMarks = 1100;
var obtainedMarks = 1051;
var Percentage;
Percentage = (obtainedMarks / totalMarks) * 100;
console.log("Obtained Percentage is ", Percentage);
console.log("\n\n");
//  Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var numberOfDays = 17;
var numberOfWeeks;
var remainingDays;
remainingDays = numberOfDays % 7;
numberOfWeeks = Math.floor(numberOfDays / 7);
console.log("Number of weeks in ", numberOfDays, "days are :", numberOfWeeks, " and Remaining days are :", remainingDays);
console.log("\n\n");
// - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var priceOfProduct = 120;
var Discount_10 = (priceOfProduct * 10) / 100;
var result_10 = priceOfProduct - Discount_10;
var Discount_5 = (priceOfProduct * 5) / 100;
var result_5 = priceOfProduct - Discount_10;
if (priceOfProduct > 100) {
    console.log("Your actual price of product is :", priceOfProduct, " but after 10% Discount price is: ", result_10);
}
else {
    console.log("Your actual price of product is :", priceOfProduct, " but after 5% Discount price is: ", result_5);
}
console.log("\n\n");
// - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var userAge = 20;
if (userAge > 0 && userAge <= 12) {
    console.log("Child");
}
else if (userAge > 13 && userAge <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
console.log("\n\n");
//  - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperature = 10;
if (temperature <= 10) {
    console.log("The Current Temperature is :", temperature, " Please wear Warm cloth");
}
else {
    console.log("Don't Need to wear warm cloth ");
}
console.log("\n\n");
//  - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var givenNumber = 25;
if (givenNumber % 3 == 0) {
    console.log("Given number ", givenNumber, " is Divisible by 3 ");
}
else if (givenNumber % 5 == 0) {
    console.log("Given number ", givenNumber, " is Divisible by 5 ");
}
else if (givenNumber % 3 == 0 && givenNumber % 5 == 0) {
    console.log("Given number ", givenNumber, " is Divisible by both numbers 3 and 5");
}
else {
    console.log("Given number ", givenNumber, " is not Divisible by both numbers 3 and 5");
}
console.log("\n\n");
//  - Write a program that checks if the given year is leap year or not.
var year = 2019;
if (year % 4 == 0) {
    console.log(year, " Is a leap year ");
}
else {
    console.log(year, " Is a not leap year ");
}
console.log("\n\n");
//  Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name
var dayNumber = 7;
if (dayNumber >= 1 && dayNumber <= 7) {
    if (dayNumber == 1) {
        console.log("Today is Saturday");
    }
    else if (dayNumber == 2) {
        console.log("Today is Sunday");
    }
    else if (dayNumber == 3) {
        console.log("Today is Monday");
    }
    else if (dayNumber == 4) {
        console.log("Today is Tuesday");
    }
    else if (dayNumber == 5) {
        console.log("Today is Wednesday");
    }
    else if (dayNumber == 6) {
        console.log("Today is Thursday");
    }
    else if (dayNumber == 7) {
        console.log("Today is Friday");
    }
    else {
        console.log("Please Enter Number between 1 and 7");
    }
}
console.log("\n\n");
// - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
var consumedUnits = 150;
var consume100 = consumedUnits + (consumedUnits * 10) / 100;
var consume200 = consumedUnits + (consumedUnits * 15) / 100;
var consume500 = consumedUnits + (consumedUnits * 25) / 100;
if (consumedUnits >= 100 && consumedUnits < 200) {
    console.log("Your Actual Consumed Units are: ", consumedUnits);
    console.log("Your 10% tax after adding on Consumed unites are: ", consume100);
}
else if (consumedUnits >= 200 && consumedUnits < 500) {
    console.log("Your Actual Consumed Units are: ", consumedUnits);
    console.log("Your 15% tax after adding on Consumed unites are: ", consume100);
}
else {
    console.log("Your Actual Consumed Units are: ", consumedUnits);
    console.log("Your 25% tax after adding on Consumed unites are: ", consume100);
}
