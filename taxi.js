"use strict"

$(document).ready(function () {
    $('.coming').fadeIn(5000);
  soonAnimation();
   
});


function soonAnimation(){
    $('#intro').animate({"left" : "-70%"}, 25000, "linear",
    function(){
        $(this).css({"left": "100%"});
    });
    soonAnimation();
}