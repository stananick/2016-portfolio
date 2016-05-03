$(document).ready(function() {
  //Controlling the hover states for the overlays under "Work"
    $('#portfolio .col-one-third').mouseenter(function() {
      $(this).children('.overlay').fadeIn('fast');
    }).mouseleave(function() {
      $(this).children('.overlay').fadeOut('fast');
    });
});
