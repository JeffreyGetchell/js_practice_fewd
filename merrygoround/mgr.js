// ----------------------------------------
// PART 1
// ----------------------------------------

// Imagine you work the information booth at a theme park
// and help recommend rides to guests.

// 1. Declare a variable age. Assign it the value 25.

var age = 7;

// 2. Declare a variable height. Assign it the value 5.

var height = 3;

// 3. Log each variable to the console and hit the "Run" button in the console panel.
// Example: console.log(age);

console.log(age);
console.log(height);

// ----------------------------------------
// PART 2
// ----------------------------------------

// Write out an if / else if / else statement for the following conditions:

// If a person is less than 8 years old, recommend the merry-go-round.
	// console.log("Check out the Merry-Go-Round. You'll love it!");
 
if (age < 8) {
  console.log ("Check out the Merry-Go-Round.You'll love it!");
 } else if (age > 8 && age < 65 && height > 4.5 ){
  console.log("Check out the Roller Coaster. It's awesome!")
}

// Otherwise if a person is more than 8 years old AND less than
// 65 years old AND more than 4.5 feet tall, recommend the roller coaster.
	// console.log("Check out the Roller Coaster. It's awesome!");
if (age > 8 &&  age < 65 && height > 4.5) {
  console.log ("Check out the Roller Coaster. It's awesome!");
} else {
  console.log('Why not enjoy a float down the Lazy River?');
}

// Otherwise recommend the lazy river
	// console.log('Why not enjoy a float down the Lazy River?');


// Hit the run button in the console.
