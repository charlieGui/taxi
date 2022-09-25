$(document).ready(function () {
    $('.coming').fadeIn(5000); 
    soonAnimation();
    hautPage();
});

//Animation de la phrase d'annonce selon la largeur d'ecran détecter
function soonAnimation(){
    if($(window).width() > 680){
       $('#intro').animate({"left" : "-100%"}, 25000, "linear",
       function(){
           $(this).css({"left": "100%"});
       });
    }else if($(window).width() < 680){  
        $('#intro').animate({"left" : "-200%"}, 15000, "linear",
        function(){
            $(this).css({"left": "100%"});
        });
    }
    setTimeout(soonAnimation);
}


function hautPage(){
    //Creation du scrollTop
    let fleche = $('<i>');
    fleche.attr('class', 'fa-solid fa-circle-arrow-up');        
    $('body').append(fleche);
    fleche.css({
        'position': 'fixed',
        'right': '20px',
        'display':'none',                               
        'bottom':'20px',
        'font-size':'2em',
        'color' : 'white',
        'opacity':'0.2',
        'z-index':'200'
        })

        //Affiche au dessus de 10px de défilement
        $(window).scroll(function(){
            if($(document).scrollTop() >= 10){
                fleche.show();                         
                }
            else{                                       
                fleche.hide();
            }
        })
        //Au clic, scrolle haut de page
         fleche.click(function(){
            window.scrollTo({                           
                top:0,
                left:0,
                behavior:'smooth'});
         })
         //Si screen < 1023px = scrollTop opacity faible constante, sinon effet au survol.
        if($(window).width() > 1023){ 
            fleche.hover(function(){
                fleche.css("opacity", "0.9");    
                },function(){
                fleche.css("opacity", "0.2");
            });
        }else{
            fleche.css("opacity", "0.2");
        }
    
    
    }