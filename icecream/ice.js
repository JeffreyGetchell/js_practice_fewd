// 1. Declare a variable flavor and assign it the value to "chocolate".

var flavor = "chocolate" ;

// 2. Declare a variable numberScoops and assign it the value 3.

var numberScoops = 3;
// 3. Declare a variable outsideTemperature and assign it the value 75.

var outsideTemperature = 82;
// 4. Declare a variable price and assign it the value 3.5.

var price = 5.5 ;
// 5. Log each variable to the console and hit "Run" in the "Console"
// panel to make sure everything is set up correctly.
// Example: console.log(flavor); (then hit run)
console.log(flavor);
console.log(numberScoops);
console.log(outsideTemperature);
console.log(price);

// 6. Write an if/else statement that covers the following:

// If the price is less than or equal to 3.5 OR
   // outsideTemperature is greater than 90
    // log "Buy that ice cream cone!!" to the console

if (price <= 3.5 || outsideTemperature > 90) { console.log ("Buy that ice cream cone!!"); }
else if (price <= 4.5 && outsideTemperature >= 70 && flavor === "chocolate" && numberScoops > 1 )
{ console.log  ("Ice cream does sound nice right now."); } else {console.log("No icecream today."); }

// Else if the price is less than or equal to 4.5 AND
// outsideTemperature is greater than or equal to 70 AND
// flavor is equal to "chocolate" AND
// numberScoops is greater than 1
    // log "Ice cream does sound nice right now." to the console

// Else
    // log "No ice cream today." to the console.


// 7. Hit the run button in the console to check the results.

// 8. Try updating the values of the variables above so that you can
// get each condition to run.
