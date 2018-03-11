// When the user clicks the menu it displays down
// clicks again nav closes up

 //user clicks on grey bar, after it turns yellow  hrs are displayed drop down
     // user clicks on grey bar, after it turns yellow phone #s are displayed drop down
    // user clicks on the button to show only yellow and all cirlces are dislplayed Yellow
    // and hides the other colors
    // user clicks on the button to show only yellow and all circles are dislplayed green
      // and hides the other colors.

$('#openDropdown').on('click', function () {
  $('#dropdownMenu').slideToggle(300);
});

$('#question2').on('click', function () {
  $('#question1').removeClass('active');
  $('#question2').addClass('active');
  $('#answer1').slideUp(350);
  $('#answer2').show();

});

$('#question1').on('click', function() {
  $('#question2').removeClass('active');
  $('#question1').addClass('active');
  $('#answer1').slideDown(350);
  $('#answer2').hide();
});

$('#showYellowCircles').on('click', function () {
  $('div .blue').hide();
  $('div .yellow').show();
});

$('#showBlueCircles').on('click', function () {
  $('div .yellow').hide();
  $('div .blue').show();

});






//
