//2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var personMesasge:string="Muhammad Usman";
console.log(`\"Hello ${personMesasge},would you like to learn some Python today?\"`);

//3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var personName:string="Muhammad Usman";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName);

//4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

var authorName:string="Albert Einstein";
var quote:string="A person who never made a mistake never tried anything new.";
console.log(`${authorName} once said,\"${quote}\"`);

//5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

var famousPerson:string="Bill Gates";
var message:string="Life is not fair, get used to it! It's fine to celebrate success but it is more important to heed the lessons of failure. As we look ahead into the next century, leaders will be those who empower others. I believe that if you show people the problems and you show them the solutions they will be moved to act."

console.log(`${famousPerson} said:\n \"${message} \"`);

// 6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var personName:string="Muhammad Usman";
console.log("\t",personName,"\t\n");
console.log(personName);

// 7,8 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

/*  Q no 10 Requirement
   Muhammad Usman
   Date 9/5/2023
   In this program we only want to print 8 by using differenet Arithmetic Operations
*/

console.log(5+3);
console.log(11-3);
console.log(4*2);
console.log(16/2);
console.log("\n");

// 9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

/*  Q no 10 Requirement
   Muhammad Usman
   Date 9/5/2023
   In this program we ask user his favorite number and than Print the statement 
*/

var favoriteNumber:number=7;
console.log(`Your Favorite Number is ${favoriteNumber}`,"\n");

// 11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

var names:string[]=["Siam","Nouman","Haseeb","Sultan","Abdullah"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log("\n");

// 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

console.log("How are you doing?", names[0]);
console.log("How are you doing?", names[1]);
console.log("How are you doing?", names[2]);
console.log("How are you doing?", names[3]);
console.log("How are you doing?", names[4]);
console.log("\n");

// 13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var list:string[]=["Sonata","Civic","KIA Sportage","V8"];
console.log("I would like to own a",list[0], "Car.");
console.log("I would like to own a",list[1], "Car.");
console.log("I would like to own a",list[2], "Car.");
console.log("I would like to own a",list[3], "Car.");
console.log("\n");

// 14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var inviteList:string[]=["Saim","Nouman","Haseeb"];
console.log("Hi ",inviteList[0],"! Today's is my Birthday So I like to invite You to Dinner Tonight ");
console.log("Hi ",inviteList[1],"! Today's is my Birthday So I like to invite You to Dinner Tonight ");
console.log("Hi ",inviteList[2],"! Today's is my Birthday So I like to invite You to Dinner Tonight ");
console.log("\n");

/* 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

inviteList.splice(2,1,"Sultan");
console.log("The name of the guest who can't make it with the name of the new person you are inviting is",inviteList[2])
console.log("The Person which are Coming is ",inviteList[0]);
console.log("The Person which are Coming is ",inviteList[1]);
console.log("The Person who can't make it is Haseeb.");
console.log("\n");

/* 16
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
 */

// Insert At Begging

inviteList.unshift("Abdullah");

// Insert at Middle

if(inviteList.length%2==0)
{
var medianForEven:number=(inviteList.length+1)/2;
inviteList.splice(medianForEven,0,"Faizan");
}
else 
{
   var medianForOdd:number=(inviteList.length-1)/2;
   inviteList.splice(medianForOdd,0,"Hammad");
}

// Insert at End

inviteList.push("Ali");

// Print a new set of invitation messages, one for each person in your list.

for(var i:number=0;i!=inviteList.length;i++)
{
   console.log(inviteList[i],"You are Invite To Dinner ");
}
console.log("Hey My Friends I found a Bigger Dinnet Table ","\n");

/* 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
 */

console.log("Sorry i can invite Only two People for Dinner due to unavailability of new Dinner Table \n");

// Remove Guest Untill two two Guest Remain

for (var i:number=inviteList.length-1; i!=1;i--)
{
   console.log(inviteList.pop(),"You're sorry I can't invite You to dinner.");
}

// Print Message for Who are still in Guest List

console.log("\n");
for (var i:number=0;i!=inviteList.length;i++)
{
   console.log(inviteList[i]," You are Still Invited");
}
console.log("\n");

// Remove two Remaining Guest to make List clear

for(var i:number=0;i<2;i++)
{
    inviteList.splice(i,1);
}
console.log(inviteList);

/* 18
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
 */

//• Store the locations in a array. Make sure the array is not in alphabetical order.

var countryName:string[]=["Germany","Italy","Canada","America","Maldives"];

//• Print your array in its original order.

console.log("Orignal Order","\n");
console.log(countryName,"\n")

// • Print your array in alphabetical order without modifying the actual list.

console.log("Sorted array without Changing Orignal Order","\n");
console.log([...countryName].sort(),"\n");

//  Show that your array is still in its original order by printing it.

console.log("Orignal Order","\n");
console.log(countryName,"\n");

// • Print your array in reverse alphabetical order without changing the order of the original list.

console.log("Reverse Alphabetical Order without Changing Orignal Order","\n");
console.log([...countryName].reverse(),"\n");

// • Show that your array is still in its original order by printing it again.

console.log("Orignal Order","\n");
console.log(countryName,"\n");

// • Reverse the order of your list. Print the array to show that its order has changed.

console.log("Reverse Order ","\n");
console.log(countryName.reverse(),"\n");

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("Again Reverse and Array becomes abck to its orignal position","\n");
console.log(countryName.reverse(),"\n");

// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("Sorted Array ","\n");
console.log(countryName.sort(),"\n");

// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("After again sorting Array Converted into Reverse Alphabetical ","\n");
console.log(countryName.reverse(),"\n");

// Q 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log("The number of People Which I invited to Dinner are: 6","\n");

// Q 20  Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

var lsitOfRivers:string[]=["Ravi","Sutluj","Sindh","Jehlum","Chanab"];
console.log("Names of Rivers are",lsitOfRivers);

//  Q 21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

console.log("\n","Car Properties");
type carTypes={color:string,company:string,Year:number,price:number}
var favoriteCar={
   color:"Red",
   company:"Sonata",
   Year:2023,
   price:1000000
}
console.log(favoriteCar);

// Q 22 Make error of Array index Array Intentionally 

var array:number[]=[1,2,3,4,5];
console.log("\n This makes error because we have nothing at index 8",array[8]);


 //Q 23  Make 10 statement make 5 statements true and 5 statements  false


var car="Subaru";
console.log(car=="Subaru");

var sunSets="West";
console.log(sunSets=="West");

var capitalOfPakistan="Islamabad";
console.log(capitalOfPakistan=="Islamabad");

console.log(2+2==4);

var riversInPakistan=5;
console.log(riversInPakistan==5);

console.log("Now Making 5 Statements False","\n");

var car="Subaru";
console.log(car=="Sonata");

var sunSets="West";
console.log(sunSets=="East");

var capitalOfPakistan="Islamabad";
console.log(capitalOfPakistan=="Karachi");

console.log(2+2==6);

var riversInPakistan=5;
console.log(riversInPakistan==4);

// 24 One true and false for equality and inequality string
// for Equality
console.log("\n");
 var provincesInPakistan="Five";
 console.log(provincesInPakistan=="Five");
 console.log(provincesInPakistan=="Four");

//  For Inequality
console.log("\n");
var computerUnderstand="Machine Language";
console.log(computerUnderstand!="High Language");
console.log(computerUnderstand!="Machine Language");

// Tests using the lower case function
console.log("\n","Test For Lower Case");
var myName="Muhammad Usman";
console.log(myName=="Muhammad Usman");
console.log(myName.toLowerCase()=="Muhammad Usman");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//  Numerical testing including equality and Inequality
console.log("\n","Numerical Testing For Equality")
console.log(5-2==3);
console.log(5*2==2);

console.log("\n","Numerical Testing For Inequality")
console.log(5*2!=2);
console.log(5-2!=3);

// Numerical testing for less than and Greater Than
console.log("\n","Numerical Testing For Less than")
console.log(5*2<12);
console.log(5-2<3);

console.log("\n","Numerical Testing For Greater than")
console.log(5*2 > 2);
console.log(5-1 > 6);

// Numerical testing for less than or equal to and Greater Than or Equal to
console.log("\n","Numerical Testing For Less than or Equal to")
console.log(5-2 <= 3);
console.log(5*2 <= 8);

console.log("\n","Numerical Testing For Greater than or Equal to")
console.log(5*2 >= 2);
console.log(5-1 >= 6);

//  Tests using "and" and "or" operators

console.log("\n","Test Using And Operator ");
console.log(2+3==5 && 10-5==5);
console.log(2+3==5 && 10-4==5);

console.log("\n","Test Using OR Operator ");
console.log(2+3==5 || 10-4==5);
console.log(2+3==6 || 10-5==8);

// Test whether an item is in a array

console.log("\n","Test Whether item Present in Array");
var array:number[]=[2,4,6,8,10];
console.log(array.includes(8));

// Test whether an item is not in a array

console.log("\n","Test Whether item not Present in Array");
var array:number[]=[2,4,6,8,10];
console.log(array.includes(3));


/* Q 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
*/ 

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

var alienColor:"green"|"Yellow"|"red"="green";
if(alienColor=="green")
{
   console.log("The player just earn 5 Points");
}

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

var alien_color:string="Yellow";

if (alien_color == 'red') {
   console.log("Nothing")
}

/* Q 26 
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/
console.log("\n");
var alien_color:string="Red";
if(alien_color=="green")
{
   console.log("The Player just earnrd 5 Points");
}
else 
{
   console.log("The Player just earnrd 10 Points");
}

/* Q27
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
 */
console.log("\n");
var alien_color:string="Red";
if(alien_color=="green")
{
   console.log("The Player earned 5 Points");
}
else if(alien_color=="Red")
{
   console.log("The Player earned 10 Points ");
}
else
{
   console.log("The Player earned 15 Points ");
}

/* Q28
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/
console.log("\n");
var personAge:number=20;
if(personAge < 2)
{
   console.log(`As Person age is ${personAge} So the Person is baby`);
}
else if(personAge ==2 && personAge < 4)
{
   console.log(`As Person age is ${personAge} So the Person is Toddler`);
}
else if(personAge ==4 && personAge < 13)
{
   console.log(`As Person age is ${personAge} So the Person is Kid`);
}
else if(personAge ==13 && personAge < 20)
{
   console.log(`As Person age is ${personAge} So the Person is Teen Ager`);
}
else if(personAge ==20 && personAge < 65)
{
   console.log(`As Person age is ${personAge} So the Person is Adult`);
}
else
{
   console.log(`As Person age is ${personAge} So the Person is Elder`);
}

/* Q 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! 
 */
console.log("\n");
var favorite_fruits:string[]=["Mango","Strawbery","Oranges"]

if(favorite_fruits.includes("Mango"))
{
   console.log("You Really like Mangoes");
}

if(favorite_fruits.includes("Strawbery"))
{
   console.log("You Really like Strawbery");
}

if(favorite_fruits.includes("Oranges"))
{
   console.log("You Really like Oranges");
}

if(favorite_fruits.indexOf("Oranges")==2)
{
   console.log("Yes the Index of friuts is 2");
}

if(favorite_fruits.length-1==2)
{
   console.log("True");
}

/* Q 30
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
 */
var adminOrPersonArray:string[]=["admin","admin","Usman","Sultan","admin"]
for(var i=0 ;i<adminOrPersonArray.length;i++)
{
   if(adminOrPersonArray[i]=="admin")
   {
      console.log("Hello admin, would you like to see a status report?")
   }
   else
   {
      console.log("Hello",adminOrPersonArray[i])
   }
}

/* Q31  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
 */
console.log("\n");
var listOfUsers:string[]=["Usman","Usama","Haider","Ali","Saim"];
listOfUsers.splice(0,5);
if(listOfUsers.length==0)
{
   console.log("We need to find Some Users");
}

/* Q32  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 */
console.log("\n")
function checkUsernames(current_users: string[], new_users: string[]): void {
   for (let i = 0; i < new_users.length; i++) {
       const new_username = new_users[i];
       if (current_users.includes(new_username)) {
           console.log(`The username '${new_users[i]}' is already taken. Please choose a different username.`);
       } else {
           console.log(`The username '${new_users[i]}' is available.`);
       }
   }
}

const current_users: string[] = ['John', 'Jane', 'Bob', 'Alice', 'Charlie'];
const new_users: string[] = ['Jane', 'Charlie', 'Mike', 'Sara', 'John'];

checkUsernames(current_users, new_users);


 /* Q33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
 */
console.log("\n");
var array:number[]=[1,2,3,4,5,6,7,8,9];
for(var i:number=0; i<array.length; i++)
{
   if(array[i] == array[0])
   {
      console.log(array[i],"st");
   }
   else if(array[i]==array[1])
   {
      console.log(array[i],"nd")
   }
   else if(array[i]==array[2])
   {
      console.log(array[i],"rd")
   }
   else 
   {
      console.log(array[i],"th")
   }
}

 /* Q34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

 • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/
console.log("\n");
var favoritePizza:string[]=["Behari Kebab","Chicken Supreme","Royal Crust"];
for (var i:number=0;i<favoritePizza.length;i++)
{
   console.log("I like ",array[i],"Pizza!")
}
console.log("I like Behari Kebab Pizza because it is\n very tasty and yummy because of the sauces.\nI really Love Pizza!");


/* Q 35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
 */
console.log("\n");
var animals:string[]=["Dog","Cat","Rabbit"];
for(var i:number=0;i<animals.length;i++)
{
   console.log(animals[i]);
}
// Modify
for(var i:number=0;i<animals.length;i++)
{
   switch(animals[i])
   {
      case "Dog":
         console.log("A dog would make a great pet.")
         break;
         case "Cat":
            console.log("A cat is a wonderful companion.");
            break;
            case "Rabbit":
               console.log("Rabbits are cute and low-maintenance pets.")
               break;
               default:
                  console.log("Invalid Input");
   }
}
console.log("Any of these Animals make a great Pet!");


 /* Q 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function
  */
console.log("\n");
function makeShirt(size:string,message:string):void
{
   console.log("Size of Shirt is ",size,"And the message which to be printed is ",message);
}
makeShirt("Small","Coding Is Hard!");

/* Q 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
  */
console.log("\n");
function modifyMakeShirt(size:string,message:string)
{
   if(size=="Large" || size=="Medium")
   {
      console.log(`Size of Shirt is ${size} and the message which to be Printed is ${message}`);
   }
   else
   {
      console.log(`Size of Shirt is ${size} and the message which to be is ${message}`);
   }
}
modifyMakeShirt("Large","I love TypeScript");
modifyMakeShirt("Small","Cooding is Hard")
modifyMakeShirt("Medium","I love TypeScript");

/* Q 38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
 */
console.log("\n")
function describe_city(city:string,country:string="Pakistan")
{
   console.log(`${city} in ${country}`);
}
describe_city("Karachi");
describe_city("California");
describe_city("Islamabad");

/*Q 39
 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
 "Lahore, Pakistan"
 Call your function with at least three city-country pairs, and print the value that’s returned.
 */
console.log("\n");
function city_country(city:string,country:string):string
{
   return `\"${city},${country}\"`;
}
var location1=city_country("Karachi","Pakistan");
var location2=city_country("Lahore","Pakistan");
var location3=city_country("Manchester","England");
console.log(location1);
console.log(location2);
console.log(location3);

 /* Q 40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.  */
console.log("\n");
type albumType={artistName:string,albumTitle:string,tracks?:number}
function make_album(artistName:string,albumTitle:string,tracks?:number):albumType
{
    var music:albumType={
      artistName,
      albumTitle,
    };
    if (tracks !== undefined) {
      music.tracks = tracks;
    }
    return music;
}
const firstDictionary=make_album("Shania Twain","Come on Over");
const secondDictonary=make_album("Metallicia","Metallicia",12);;
const thirdDictionary=make_album("Elton Jhon","Greatest Hits")
console.log(firstDictionary);
console.log(secondDictonary);
console.log(thirdDictionary);


 /* Q 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */
console.log("\n");
var magicianNames:string[]=["Usman","Saim","Sultan"];
function show_magicians(magicianNames:string[])
{
   for(var i:number=0;i<magicianNames.length;i++)
   {
      console.log("Name of Magician is :",magicianNames[i]);
   }
}
show_magicians(magicianNames);

  /* Q 42 Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 */
console.log("\n");
function makeGreat(magicianNames:string[])
{
   for(var i:number=0;i<magicianNames.length;i++)
   {
      console.log(`Great ${magicianNames[i]}`);
   }
}
console.log("After Add Great to each Magician Name");
makeGreat(magicianNames);
console.log("\n To Show Magician List hans Been Modified")
show_magicians(magicianNames);


 /* Q 43 Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
  */
console.log("\n");
function make_great(magicianNames:string[]):string[]
{
var greatMagician:string[]=magicianNames.map((magician)=> `The Great ${magician}`)
return greatMagician;
}
const greatMagicianName=make_great(magicianNames);
// call the function to show orignal magician name
console.log("Orignal Magician Name");
show_magicians(magicianNames);
// Call the Function after Modify
console.log("\n Great magician Name");
show_magicians(greatMagicianName);


 /* Q 44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
 */
console.log("\n");
function sandwich(...items:string[]):void
{
   console.log("Sandwich Summary");
   items.forEach((item,i)=>
   {
      console.log(`  ${i+1}. ${item}`)
   })
}
sandwich("Peanut Butter","Honey","Strawbery")
sandwich("Bar B Q Sauce","Chicken Steak");
sandwich("Chicken Chunks","Cheese")

 /* Q 45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly
 */

function carInformation(manufacturer:string,model:string,...properties:[string, any][]):any
{
   const car:any=
   {
      manufacturer,
      model,
   };
   for(const [key,value] of properties){
      car[key]=value;
   }
   return car;
}
const myCar=carInformation("Toyata","Camry",["Color","Blue"],["hasSunroof",true])
console.log(myCar);