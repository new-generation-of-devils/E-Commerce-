

/*$(window).ready(function(){
    $(".loading").fadeOut(2000,function(){
        $("body").css("overflow","auto");
    })
})*/





var vh = window.innerHeight ;
var vw =window.innerWidth ;


$("#homesec1").css({"height" : vh});

var w = 1920;
var h = 952;

var p = 24 ;
var hone = 100 ;
var htwo = 38 ;
var hfour = 18 ;



$("#productviewer").css({"height" : 4*vh/5});

$("#viewerclose").click(function(){
    $("#productviewer").css({"opacity":"0"});
})

$(".b1").click(function(){
    $(".sub1").css({"opacity" : "1"});
    $(".sub2").css({"opacity" : "0"});
    $(".sub3").css({"opacity" : "0"});
    $(".sub4").css({"opacity" : "0"});
})
$(".b2").click(function(){
    $(".sub1").css({"opacity" : "0"});
    $(".sub2").css({"opacity" : "1"});
    $(".sub3").css({"opacity" : "0"});
    $(".sub4").css({"opacity" : "0"});
})
$(".b3").click(function(){
    $(".sub1").css({"opacity" : "0"});
    $(".sub3").css({"opacity" : "1"});
    $(".sub2").css({"opacity" : "0"});
    $(".sub4").css({"opacity" : "0"});
})
$(".b4").click(function(){
    $(".sub1").css({"opacity" : "0"});
    $(".sub4").css({"opacity" : "1"});
    $(".sub3").css({"opacity" : "0"});
    $(".sub2").css({"opacity" : "0"});
})
var flag = 0 ;
$("img").click(function(){
    if (flag==0){
    $(this).css({"transform":"scale(1.5,1.5)"});
        $(this).css({"cursor":"zoom-out"});
    flag=1;}
    else{
        $(this).css({"transform":"scale(1,1)"});
        $(this).css({"cursor":"zoom-in"});
        flag=0;
    }
})


$(".get").click(function(){
  $("#productviewer").css({"opacity" : "1"});
})







/*var typed = new Typed("#ty", {
  // Waits 1000ms after typing "First"
  strings: ["Devil's Hospital ^2000", "Private Hospital ^2000" ,"Have A Tour ^2000"],

    loop: true,
  loopCount: Infinity,

    typeSpeed: 50
});

var typed = new Typed("#ty1", {
  // Waits 1000ms after typing "First"
  strings: ["Devil's Hospital ^2000", "Private Hospital ^2000" ,"Have A Tour ^2000"],

    loop: true,
  loopCount: Infinity,

    typeSpeed: 50
});


var typed = new Typed("#ty2", {
  // Waits 1000ms after typing "First"
  strings: [" medicens ^2000", " treatments ^2000" ," medical devices ^2000"],

    loop: true,
  loopCount: Infinity,

    typeSpeed: 50
});



var typed = new Typed("#ty3" ,{
  // Waits 1000ms after typing "First"
  strings: [" Our Staff ^2000", " Our Members ^2000" ," Our Doctors ^2000"],

    loop: true,
  loopCount: Infinity,

    typeSpeed: 50
});


var typed = new Typed("#ty4" ,{
  // Waits 1000ms after typing "First"
  strings: [" Our Staff ^2000", " Our Members ^2000" ," Our Doctors ^2000"],

    loop: true,
  loopCount: Infinity,

    typeSpeed: 50
});


var typed = new Typed("#ty5" ,{
  // Waits 1000ms after typing "First"
  strings: [" Our Staff ^2000", " Our Members ^2000" ," Our Doctors ^2000"],

    loop: true,
  loopCount: Infinity,

    typeSpeed: 50
});*/
