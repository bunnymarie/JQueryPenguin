$(document).ready(function() {
  $(".clickable").click(function() {
    $("#penguin-showing").slideToggle();
    $("#penguin-hidden").fadeToggle();
  });
});
