
$(document).ready(function(){

$("h2").hover(
  function(){
  $(this).css("background-color", "#000000");
  $(this).css("color", "tomato");
},
function(){
  $(this).css("background-color", "#ffffff");
  $(this).css("color", "black");
}
);

});
