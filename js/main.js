/* global $, jQuery, alert */
$(function () {
    'use strict';
    // Nice Scroll
    $('html').niceScroll();
    //trigger nice scroll
    $('.carousel').carousel({
        interval:5000
    });
    // Show Color Option Div When Click The Gear
    $('.check-gear').click(function () {
        $('.color-option').fadeToggle();
    });
    // Change Theme Color On Click
    var colorLi=$('.color-option ul li');
    colorLi
    .eq(0).css('backgroundColor', '#873dc4').end() /*default*/
    .eq(1).css('backgroundColor', '#ebc82b').end() /*orange*/
    .eq(2).css('backgroundColor', '#2b77eb').end() /*blue*/
    .eq(3).css('backgroundColor', '#c43d3d').end() /*red*/
    .eq(4).css('backgroundColor','#c8eb2b');      /*yellow*/
    colorLi.click(function () {
        // console.log($(this).attr('data-value'));
        $("link[href*='theme'").attr('href',$(this).attr('data-value'));
        // console.log($('link[href*="theme"'));
    });
    // Caching The Scroll Top Elements
    var scrollButton= $('#scroll-top');
    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        if($(this).scrollTop() >=1400) {
            scrollButton.show();
        }
        else{
            scrollButton.hide();
        }
    });
    scrollButton.click(function () {
        $('html,body').animate({scrollTop:0},1500)
    });
});
// Loading Screen
$( window ).on("load",function () {
    'use strict';
    $('.loading .spinner').fadeOut(1000,function() {
        $("body").css('overflow', 'auto');
        $(this).parent().fadeOut(1000,function() {
            $(this).remove();
        });
    });
});
