var vh = window.innerHeight ;
var vw =window.innerWidth ;


$("#productviewer").css({"height" : 4*vh/5});

$("#viewerclose").click(function(){
    $("#productviewer").fadeOut(100);
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