// $('.main img').eq(0).css('top','0');
// $('.main img').eq(1).css('top','-630px');
// $('.main img').eq(2).css('top','-630px');
// $('.main img').eq(3).css('top','-630px');
// $('.main img').eq(4).css('top','-630px');
// $('.main img').eq(5).css('top','-630px');

// var start =0;
// setInterval(function(){
//     if(start == 6){
//         start = 0;
//     }else{
//         start++;
//     }
//     $('.main img').eq(start-1).css('top','-630px');
//     $('.main img').eq(start).css('top','0');
// },3000)

$('.main .wrap').eq(0).show();
$('.main .wrap').eq(1).hide();
$('.main .wrap').eq(2).hide();
$('.main .wrap').eq(3).hide();
$('.main .wrap').eq(4).hide();
$('.main .wrap').eq(5).hide();

setInterval(function(){
    $('.main .wrap:first ').eq(0).fadeOut(1500).next(0).fadeIn(1500).end().appendTo('.main .slide');
},4000);

$('.section .item').eq(0).css('top','0');
$('.section .item').eq(1).css('top','-50px');
$('.section .item').eq(2).css('top','-50px');
$('.section .item').eq(3).css('top','-50px');
$('.section .item').eq(4).css('top','-50px');

var start = 0;
setInterval(function(){
    if(start == 4){
        start = 0;
    }else{
        start++;
    }
    $('.section .item').eq(start -1).css('top','-50px');
    $('.section .item').eq(start).css('top','0');
},4000)
