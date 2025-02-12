$(document).ready(function(){
    $(".valentines").mouseenter(function(){
        $(".card").stop().animate({
            top: "-60px"
        }, "slow");
    }).mouseleave(function(){
        $(".card").stop().animate({
            top: "0px"
        }, "slow");
    });
});
