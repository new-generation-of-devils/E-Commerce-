var vh = window.innerHeight ;
var vw =window.innerWidth ;


$("#productviewer").css({"height" : 3*vh/5});

$("#viewerclose").click(function(){
    $("#productviewer").fadeOut(500);
})

$(".b1").click(function(){
    $(".sub1").css({"display" : "block"});
    $(".sub2").css({"display" : "none"});
    $(".sub3").css({"display" : "none"});
    $(".sub4").css({"display" : "none"});
})
$(".b2").click(function(){
    $(".sub1").css({"display" : "none"});
    $(".sub2").css({"display" : "block"});
    $(".sub3").css({"display" : "none"});
    $(".sub4").css({"display" : "none"});
})
$(".b3").click(function(){
    $(".sub3").css({"display" : "block"});
    $(".sub1").css({"display" : "none"});
    $(".sub2").css({"display" : "none"});
    $(".sub4").css({"display" : "none"});
})
$(".b4").click(function(){
    $(".sub4").css({"display" : "block"});
    $(".sub1").css({"display" : "none"});
    $(".sub2").css({"display" : "none"});
    $(".sub3").css({"display" : "none"});
})