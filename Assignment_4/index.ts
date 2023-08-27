//  - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

var i:number;
var sum:number=0;
var input:number=2;
var count:number=0;
for(i=1;i<=30;i++)
{
    if(i%2==0)
    {
        sum=sum+i;
        count++;
    }
    if(input==count)
    {
        break;
    }
}
console.log("Sum of first",input,"number are :",sum);

// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
var arrayOfNumbers:number[]=[0,1,2,3,4,5,6,7,8,9,10];
var i:number;
for(i=0;i<arrayOfNumbers.length;i++)
{
    if(arrayOfNumbers[i]%2==0)
    {
        console.log(i);
    }
}

// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd oness

var arrayOfPrintOdd:number[]=[0,1,2,3,4,5,6,7,8,9,10];
console.log("Array Before Deleting Even Numbers :",arrayOfPrintOdd);
var i:number;
for(i=0;i<arrayOfPrintOdd.length;i++)
{
    if(arrayOfPrintOdd[i]%2==0)
    {
        arrayOfPrintOdd.splice(i,1);
    }
}
console.log("Array After Deleting Even Numbers:",arrayOfPrintOdd);

// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

function calculateArea(radius:number):number
{
    var areaOfCircle:number;
    areaOfCircle=Math.PI*radius*radius;
    return areaOfCircle;
}
var finalResult:number=calculateArea(5);
console.log("Area of Circle is :",finalResult);

// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

var grades:number[]=[90,56,78,98,49,50,12,75];
console.log("Array Before Deleting Students marks which are less than 50 :",grades);
var i:number;
for(i=0;i<grades.length;i++)
{
    if(grades[i]<50)
    {
        grades.splice(i,1);
    }
}
console.log("Array After Deleting Students marks which are less than 50 :",grades);

// - Write a program that uses a function to find the largest element in an array of numbers.

var findLargest:number[]=[90,56,78,98,49,50,12,75];
var i:number;
var max:number=findLargest[0];
for(i=0;i<findLargest.length;i++)
{
    if(findLargest[i]>max)
    {
        max=findLargest[i];
    }
}
console.log("The Largest Number in Given Array is :",max)