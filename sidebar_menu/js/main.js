// Write your pseudo code here! HAPPY CODING! :)
// When the user clicks the hamburger nav:
// the nav menu will slide out right and the hamburger nav will be
// replaced by an x.

// when the user clicks the x the nav will slide left.

$('div.hamburger').on('click', function(){
  $('.sidebar').toggleClass('active');
  $('div.hamburger').fadeTo("slow", 0.15);
});
