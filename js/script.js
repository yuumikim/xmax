$(document).ready(function(){
    $('.english').mouseenter(function(){
        $(this).stop().animate({width:'70vw',height:'25vw'},500);
        $('.math').stop().animate({width:0},500);
        $(this).children('.visuable').animate({opacity:0},500);
        $(this).children('.hidden').delay(200).animate({opacity:1},500);
        
    })
    $('.english').mouseleave(function(){
        $(this).stop().animate({width:'25vw',height:'25vw'},500);
        $('.math').stop().animate({width:'25vw'},500);
        $(this).children('.visuable').animate({opacity:1},500);
        $(this).children('.hidden').animate({opacity:0});
        
    })
    $('.math').mouseenter(function(){
        $(this).stop().animate({width:'70vw',height:'25vw'},500);
        $('.english').stop().animate({width:0},500);
        $(this).children('.visuable').animate({opacity:0},500);
        $(this).children('.hidden').delay(200).animate({opacity:1},500);
        
    })
    $('.math').mouseleave(function(){
        $(this).stop().animate({width:'25vw',height:'25vw'},500);
        $('.english').stop().animate({width:'25vw'},500);
        $(this).children('.visuable').animate({opacity:1},500);
        $(this).children('.hidden').animate({opacity:0});
        
    })
    let ulleft = 0;
    $('nav > img').click(function(){
        if(ulleft > 0){
            $('nav > ul').stop().animate({left:0},500,function(){
                ulleft = $('nav > ul').position().left;
            });
            console.log(ulleft);
        } else {
            $('nav > ul').stop().animate({left:'500px'},500,function(){
                ulleft = $('nav > ul').position().left;
            });
            console.log(ulleft);
        }
    })
})