// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage

//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(function() {

	$('.j-about').hide().fadeIn(3000);

});

$(function() {

	$('#theTarget').skippr({
		transition : 'slide',
		speed : 1000,
		easing : 'easeOutQuart',
		navType : 'block',
		childrenElementType : 'div',
		arrows : false,
		autoPlay : true,
		autoPlayDuration : 3000,
		keyboardOnAlways: true,
		hidePrevious : false
	});
});

$(function() {

	$('.nav-text1').mouseover(function() {
		$('.nav-text1').css({'color' : '#808080'});
	});

	$('.nav-text1').mouseout(function() {
		$('.nav-text1').css({'color' : '#FFFFFF'});
	});
});

$(function() {

	$('.nav-text2').mouseover(function() {
		$('.nav-text2').css({'color' : '#808080'});
	});

	$('.nav-text2').mouseout(function() {
		$('.nav-text2').css({'color' : '#FFFFFF'});
	});
});

$(function() {

	$('.nav-text3').mouseover(function() {
		$('.nav-text3').css({'color' : '#808080'});
	});

	$('.nav-text3').mouseout(function() {
		$('.nav-text3').css({'color' : '#FFFFFF'});
	});
});

$(function() {

	$('.nav-text4').mouseover(function() {
		$('.nav-text4').css({'color' : '#808080'});
	});

	$('.nav-text4').mouseout(function() {
		$('.nav-text4').css({'color' : '#FFFFFF'});
	});
});

$(function() {

	$('.nav-text5').mouseover(function() {
		$('.nav-text5').css({'color' : '#808080'});
	});

	$('.nav-text5').mouseout(function() {
		$('.nav-text5').css({'color' : '#FFFFFF'});
	});
});

$(function() {

	$('.nav-text6').mouseover(function() {
		$('.nav-text6').css({'color' : '#808080'});
	});

	$('.nav-text6').mouseout(function() {
		$('.nav-text6').css({'color' : '#FFFFFF'});
	});
});

$(function() {

	$('.nav-text7').mouseover(function() {
		$('.nav-text7').css({'color' : '#808080'});
	});

	$('.nav-text7').mouseout(function() {
		$('.nav-text7').css({'color' : '#FFFFFF'});
	});
});

$(function() {

	$('.nav-text8').mouseover(function() {
		$('.nav-text8').css({'color' : '#808080'});
	});

	$('.nav-text8').mouseout(function() {
		$('.nav-text8').css({'color' : '#FFFFFF'});
	});
});

$(function() {

	$('.nav-text9').mouseover(function() {
		$('.nav-text9').css({'color' : '#808080'});
	});

	$('.nav-text9').mouseout(function() {
		$('.nav-text9').css({'color' : '#FFFFFF'});
	});
});