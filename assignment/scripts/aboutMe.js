// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = "Chris";
console.log(firstName);
console.log("First name is",firstName);

// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = "Maki";
console.log("lastName");
console.log("Last name is " + lastName);

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName = firstName + " " + lastName;
console.log(fullName);
console.log("My full name is",fullName)

// 4 - Console log the value of `fullName`
console.log(fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 5;
console.log(luckyNumber);
console.log("I don't have a lucky number, but I chose",luckyNumber);
console.log("Here is my 'lucky number' but with concatenation: " + luckyNumber);

// 6 - Console log this sentence, adding in the variables you created above: 
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
console.log('My name is',fullName, 'and I think',luckyNumber, 'is a winner!');

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;
console.log(adventurous);
console.log("Variable adventurous is set to:",adventurous);

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = "Tapeworms";
console.log(food);
console.log(food,"is my favorite food item");

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 3;
console.log(pets);
console.log("I currently live with",pets,"pet");

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 5;
console.log(friendsPets);
console.log("My friends own",friendsPets,"pets");

// 11 - Add two pets to your `pets` variable
pets+=2;
console.log(pets);
console.log("I currently live with",pets,"pets");

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 8;
console.log(allowedPets);
console.log("Permissible number of pets allowe:",allowedPets);

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?"
if(adventurous) {
    console.log("Adventures are great!");
} else {
    console.log("How about we stay home?");
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if(luckyNumber == 2 && adventurous == true) {
    console.log("Roll the dice!");
} else {
    console.log("Statement was not true")// My OCD made me add the "else" to it. 
} 

// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if(pets < allowedPets) {
    console.log("I can have more pets!");
} else if( pets == allowedPets) {
    console.log("I have enough pets");
} else {
    console.log("Oh no, I have too many pets!");
}

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.
let mostPets;

if(pets > friendsPets) {
    mostPets = "I have " + pets + " pets, more than my friends who have " + friendsPets + " pets.";
} else if (pets == friendsPets) {
    mostPets = "I have " + pets + " pets, equal to my friends who also have " + friendsPets + " pets.";
} else { 
    mostPets = "I have " + pets + " pets, less than my friends who have " + friendsPets + " pets.";
}
console.log(mostPets); //end of example 1

let mostPets1;
let  H = Math.max(pets,friendsPets);
let  L = Math.min(pets,friendsPets);
if(pets > friendsPets) {
    mostPets1 = "I have " + H + " pets, more than my friends who have " + L + " pets.";
} else if (pets == friendsPets) {
    mostPets1 = "I have " + H + " pets, equal to my friends who also have " + L + " pets.";
} else { 
    mostPets1 = "I have " + L + " pets, less than my friends who have " + H + " pets.";
}  
console.log(mostPets1)
//2nd example is basically the same thing. I'm close to figuring out a more efficient way but I've
//spent a lot of time on this. I'm happy with the variation even though It's not as perfect or
//as efficient as it could be. 
//end of example 2
let mostPets3;
if(pets > friendsPets) {
    mostPets3 = console.log(pets,"(pets)");
} else if (pets == friendsPets) {
    mostPets3 = console.log(pets,friendsPets,"(Equal Values)");
} else {
    mostPets3 = console.log(friendsPets,"(Friends Pets)");
}
 // example 3 here is just a simple implementation, not very comprehensive as 
//the others, but does push to console log differently to accentuate they are numbers not strings.
//end of example 3
 

// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!

switch(luckyNumber) {
    case 1:
        console.log("First is the worst");
        break;
    case 2:
        console.log("Second is the best");
        break;
    case 3:
        console.log("Third is the one with the polka dot dress");
        break;
    default:
        console.log("Luck is what happens when preparation meets opportunity");
}
// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

 
let condition = (adventurous == true) ? 
console.log("Ye do be adventurous"):console.log("Not so adventurous");
