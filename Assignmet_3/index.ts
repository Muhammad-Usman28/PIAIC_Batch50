// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
var array:number[]=[34,56,23]
function insertArray(array:number[],index:number,num:number)
{
    array.splice(index,0,num);
    return array;
}
var modifiedArray:number[]=insertArray(array,1,45);
console.log(array);



// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

var shoppingArray:string[]=["Apple","Banana","Pizza","Shawarma","Steak"]
function addItems()
{
    shoppingArray.splice(1,0,"Burger");
    console.log(shoppingArray);
}

function removeItems()
{
    shoppingArray.splice(3,1)
    console.log(shoppingArray);
}

function updateItems()
{
    shoppingArray.splice(4,1,"Chicken Steak")
    console.log(shoppingArray);
}
console.log("The Items which are availabe in cart are: \n",shoppingArray);
console.log("After Add one new Item in Shopping Cart :");
addItems();
console.log("After Remove one new Item from Shopping Cart :");
removeItems();
console.log("After Modify one item in Shopping Cart : ");
updateItems();




//  Write a program that uses a while loop to print the first 25 integers.


var i:number=1;
while(i<=25)
{
    console.log(i,"\t");
    i++;
}

// - Write a program that uses a while loop to print the first 10 even numbers.

var j:number=1;
console.log("The first 10 Even integers:")
while(j<=20)
{
    if(j%2==0)
    {
        console.log(j);
    }
    j++;
}

//  - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.


function factorial(num:number)
{
    var fact:number=1;
    if(num<0)
    {
        console.log("Factorial of Negative Number ",num," is not Possible.Please Enter Positive Number");
    }
    else
    {
        while(num!=0)
        {
            fact=fact*num;
            num--;
        }
    }
    return fact;
}
var result:number=factorial(5);
console.log("Factorial is :",result);

//  - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
var array:number[]=[1,2,3,-4,5,6,-1];
var k:number=0;
console.log("Orignal Array :",array);
while(k <= array.length)
{
    if(array[k]<0)
    {
        array.splice(k,1);
    }
    k++;
}
console.log("After Deleteing Negative number from array :");
console.log(array);

//- Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

function addArray(array:number[])
{
    var sum:number=0;
    var i:number=0;
    while(i<addArray.length)
    {
        sum=sum+array[i];
        i++;
    }
    return sum;
}
var result:number=addArray([2,4,6]);
console.log("The sum of Arary is :",result);

//  - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

var array1:number[]=[23,45,37,13]
var list:number[]=[];
var iteration:number=0;
while(iteration<array1.length)
{
    var fahrenheit:number;
    fahrenheit=(array1[iteration]* 9/5)+32;
    list.push(fahrenheit);
    iteration++;
}
console.log("List of Converted Temperature is:",list);
