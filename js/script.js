/**
 * Smooth scrolling
 */
$(function() {
	$('div#navbar ul a').bind('click',function(event){
		var $anchor = $(this);

		/*
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');
		
		if you don't want to use the easing effects:
		*/

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 500);
		
		event.preventDefault();
	});
	$('#arrow a').bind('click',function(event){
		var $anchor = $(this);

		/*
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');
		
		if you don't want to use the easing effects:
		*/

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		
		event.preventDefault();
	});
});

/**
 * Scrolling navbar
 */
$(document).ready(function() {
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop());
    if ($(this).scrollTop() == 0) {
        $('body').css({ 'overflow': 'hidden'});
    } else {
        $('body').css({ 'overflow': 'visible'});
    }
    if ($(this).scrollTop() >= 1000) {
        $('#menu').css({ 'position': 'fixed', 'top': '0px'});
    }
    if ($(this).scrollTop() < 1000) {
        $('#menu').css({ 'position': 'absolute', 'top': '1000px' });
    }
  });
});