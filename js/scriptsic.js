$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#vanilla-showing").toggle();
    $("#vanilla-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#chocolate-showing").toggle();
    $("#chocolate-hidden").toggle();
  });
  $(".clickable3").click(function() {
    $("#strawberry-showing").toggle();
    $("#strawberry-hidden").toggle();
  });
});
