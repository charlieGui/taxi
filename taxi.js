$(document).ready(function () {
    $('.coming').fadeIn(5000); 
    soonAnimation();
});


function soonAnimation(){
   if($(window).width() > 680){
       // Animation lorsque l'ecran au dessus de 1024px
       $('#intro').animate({"left" : "-100%"}, 25000, "linear",
       function(){
           $(this).css({"left": "100%"});
       });
    }else if($(window).width() < 680){  //Animation lorsque l'écran est au-dessous de 5à00px
        $('#intro').animate({"left" : "-200%"}, 15000, "linear",
        function(){
            $(this).css({"left": "100%"});
        });
    }
    $stop=setTimeout(soonAnimation);
}
