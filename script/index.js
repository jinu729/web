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


$('.main_sec .swiper_slide').eq(0).css('left','0');
$('.main_sec .swiper_slide').eq(1).css('left','250px');
$('.main_sec .swiper_slide').eq(2).css('left','500px');
$('.main_sec .swiper_slide').eq(3).css('left','750px');
$('.main_sec .swiper_slide').eq(4).css('left','1000px');
$('.main_sec .swiper_slide').eq(5).css('left','1250px');
$('.main_sec .swiper_slide').eq(6).css('left','1500px');

var str= 0;
setInterval(function(){
    if(str == 1){
        str = 0;
    }else{
        str++;
    }
    
    
    // $('.main_sec .swiper_slide').eq(str-5).css('left','-1250px');
    // $('.main_sec .swiper_slide').eq(str-4).css('left','-1000px');
    // $('.main_sec .swiper_slide').eq(str-3).css('left','-750px');
    // $('.main_sec .swiper_slide').eq(str-2).css('left','-500px');
    $('.main_sec .swiper_slide').eq(str-1).css('left','-250px');
    $('.main_sec .swiper_slide').eq(str).css('left','0');
    $('.main_sec .swiper_slide').eq(str+1).css('left','250px');
    $('.main_sec .swiper_slide').eq(str+2).css('left','500px');
    $('.main_sec .swiper_slide').eq(str+3).css('left','750px');
    $('.main_sec .swiper_slide').eq(str+4).css('left','1000px');
    $('.main_sec .swiper_slide').eq(str+5).css('left','1250px');    
},5000)



