// STEP 1: When the button is clicked, add the party class to the div.

$('button').on('click' ,function () {
  // $('div').addClass('party');
  $('div').toggleClass('party');

  // $('button').
})
/*BONUS*/
// Toggle the class on and off of the element
// Test it out! Open your console to see errors if it's not working.

// Step 2: When the image is clicked,
  // a: enlarge the image by adding a new class
  // b: add a transition to animate the image when it gets larger
$('img').on('click', function() {
  $('img').addClass('large-img');
  
})
