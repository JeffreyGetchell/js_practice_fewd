

// -------------------------------------------------------------------------------
// Part 1 - Declaring and calling functions
// -------------------------------------------------------------------------------

// ---- A ------

// 1. Write a function catTalk.
// 2. Inside the function, log "Meow" to the console. [Hint: add console.log();]
// 3. Call the catTalk function. [Hint: Make sure you use parentheses.]
// 4. Check your console to make sure "Meow" is displayed.
function catTalk ( ) {
  // code to run
  console.log ("Meow" );
}
catTalk ();


// ---- BONUS ------
// 1. Declare a variable score and give it the value 76
// 2. Write a function passedLevel.
// 3. Inside the function:
  // If score is greater than or equal to 70
    // Log "Level passed" to the console
  // otherwise
    // Log "Try again" to the console.
// 5. Call the passedLevel function.

var score = 76;

function passedLevel () {
if (score >= 70 )
console.log ("Level passed");
else { console.log ("Try again"); }
}

passedLevel ();

// -------------------------------------------------------------------------------
// Part 2 - Arguments and Parameters
// -------------------------------------------------------------------------------

// ---- A ------
// 1. Create a function named disney.
// 2. It should accept two parameters, villain and movie.
// 3. The function should take the parameters and log the result to the console saying "{villain} is the meanest character in {movie}."
// 4. Now call that function, passing in Ursula and The Little Mermaid as the arguments.
// Check the console to make sure the correct sentence is displayed!

function disney (villian, movie) {
  // code to run
  console.log (villian + "is the meanest character in the" + movie);
}

disney ("Ursula", "The Little Mermaid");



// ---- BONUS ------
// Using your knowledge of parameters and arguments, see if you can
// combine these two functions below.
// HINT (only read if needed): What code is repeated? What is different?
// Just the values for the variables?

function makeAPizza () {
  var topping1 = 'jalapenos,peppers';
  var topping2 = 'feta,onions,mushrooms';
  var topping3 = 'pepperoni';

  console.log('Part 2 Bonus: Coming right up! A pizza with ' + topping1 + ', ' + topping2 + ' and ' + topping3 + '.');
}

makeAPizza();


// function makeASecondPizza () {
//   var topping1 = 'peppers';
//   var topping2 = 'onions';
//   var topping3 = 'pepperoni'
//
//   console.log('Part 2 Bonus: Coming right up! A pizza with ' + topping1 + ', ' + topping2 + ' and ' + topping3);
// }
//
// makeASecondPizza();

// -------------------------------------------------------------------------------
// Part 4 - Scope
// -------------------------------------------------------------------------------

// ---- A ------
// Uncomment the code below this step.
// Fix the following function so that we aren't getting an error!
// Hint: move this line: console.log("Hello " + name);

function sayHello () {
    var name = "Marie";
    console.log("Part 3A: Hello " + name);
}

sayHello();



// ---- B ------
// Uncomment the code below this step.
// We'd like total to keep track of the running total. Each time the scorePoint function
// is called, one should be added to total. We were expecting 1, 2, and 3 to be shown in the console.
// but right now we see 1, 1, and 1.
// Fix the following function.
// Hint: Right now the total is resetting every time the function runs.
var total = 0;

function scorePoint () {
   total += 1;
   console.log('Part 3B: The current total is: ' + total);
}
scorePoint();
scorePoint();
scorePoint();


// -------------------------------------------------------------------------------
// Part 5 - Bonus Challenges
// -------------------------------------------------------------------------------

// ---- 1 ------

// Write a JavaScript function called `transmogrifier.`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2, which will evaluate to 225.
//Use your function to find the following answers:

  // transmogrifier(5, 4, 3)
  // transmogrifier(13, 12, 5)
  // transmogrifier(42, 13, 7)




// ---- 2 ------

// Write a function wordReverse that accepts a single argument, a string.
// The method should log a string to the console with the order of the words reversed.
// Don't worry about punctuation.
// You'll have to Google "reverse words in a string JavaScript"
  // Examples:

  // wordReverse("Now I know what a TV dinner feels like")
  // Should log: "like feels dinner TV a what know I Now"
  // wordReverse("Put Hans back on the line")
  // Should log: "line the on back Hans Put"
