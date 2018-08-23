$(document).ready(function(){

$(".visibleNav button").click(function(){
  $(".navLinks").toggle(1000);
  $("i", this).toggleClass("fa-times fa-bars");
  
});


$(".navLinks li a").click(function(){
  
  $(".navLinks").toggle(1000);


  
});
});

function reverticon(){
  $("#icon").toggleClass("fa-times fa-bars");

}
