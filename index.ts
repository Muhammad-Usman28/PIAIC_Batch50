// Write a program that uses filter to remove all negative numbers from an array of numbers

var array:number[]=[1,2,-3,-4,5,6,-89]
var modifiedArray=array.filter((removeNeg)=>
{
    if(removeNeg>0)
    {
        return removeNeg;
    }
})
console.log("Orignal Array :",array);
console.log("After Removinng Negative Numbers from Array :",modifiedArray);

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

var array:number[]=[1,2,3,4,5];
var result:number=0;
var mulBy2=array.map((multiplication)=>
{
    result=multiplication*2;
    return result;
})
console.log("Orignal Array :",array);
console.log("After Multiply with 2:",mulBy2);

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

var arrayofStrings:string[]=["apple", "banana", "cherry", "date", "grape"];
var fruitArray=arrayofStrings.filter((characters)=>
{
    if(characters.length>5)
    {
        return characters;
    }
})
console.log("Orignal Array :",arrayofStrings);
console.log("Fruits with more than 5 characters are :",fruitArray);

// Given an array of numbers [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], use the map and filter methods together to create a new array containing the squares of even numbers.

var array:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var res:number=0;
var getEven=array.filter((element)=>
{
    if(element%2==0)
    {
        return element;
    }
})
 let squareofEven=getEven.map((mulofEven)=>
    {
        res=mulofEven*mulofEven;
        return res;
    })
console.log("Orignal Array :",array);
console.log("After Getting Even numbers from Filter method:",getEven);
console.log("Square of Even numbers by using Map Method :",squareofEven);

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

var array:number[]=[0, 10, 20, 30, 40];
var fahrenheit:number;
var convertedTemperature=array.map((getTemp)=>
{
    fahrenheit=(getTemp*9/5)+32;
    return fahrenheit;
})
console.log("Temperature in Celcius :",array);
console.log("Temperature after Converting into Fahrenheit :",convertedTemperature);

// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

var array:number[]=[3, 6, 9, 12, 15, 18];
var res:number=0;
var getOdd=array.filter((element)=>
{
    if(element%2!=0)
    {
        return element;
    }
})
 var squareofOdd=getOdd.map((mulofOdd)=>
    {
        res=mulofOdd*mulofOdd;
        return res;
    })
console.log("Orignal Array :",array);
console.log("After Getting Odd numbers from Filter method:",getOdd);
console.log("Square of Odd numbers by using Map Method :",squareofOdd);


// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

var arrayOfNames:string[]=["Alice", "Bob", "Charlie", "David", "Emily"];
var displayName=arrayOfNames.forEach((getName)=>
{
    console.log(`Name of Person is : ${getName}!`);
})
