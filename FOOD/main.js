var bar = document.getElementById("bar");
var nav = document.getElementById("nav");
var sub_menu_content = document.getElementsByClassName("sub_menu_content");
var sub_menu = document.getElementsByClassName("sub_menu");
var $auto_scroll = $('#auto_scroll');
var i = 0;

$auto_scroll.click(function () {
	'use strict';
	$('body, html').animate({
		scrollTop: 0
	}, 'slow');
});

function show_nav() {
	var nav_icon = bar.getElementsByTagName("i");
	nav_icon[0].style.transition = "all 0.5s";

	if (i == 0) {
		nav.style.left = 0;
		nav_icon[0].setAttribute("class", "fa fa-arrow-left");
		bar.style.boxShadow = "0 0 3px black";
		i++;
	} else {
		nav.style.left = "-100%";
		nav_icon[0].setAttribute("class", "fa fa-bars");
		bar.style.boxShadow = "none";
		i--;
	}
}

function show_sub_menu(a) {
	var sub_menu_icon = sub_menu[a].getElementsByTagName("i");
	if (sub_menu_content[a].style.display == "none") {
		sub_menu_content[a].style.display = "block";
		sub_menu_icon[0].setAttribute("class", "fa fa-angle-up");

	} else {
		sub_menu_content[a].style.display = "none";
		sub_menu_icon[0].setAttribute("class", "fa fa-angle-down");
	}
}

var next = function () {
	$currentslide = $('.active_slide_header');
	$nextslide = $currentslide.next();
	if ($nextslide.length == 0) $nextslide = $('.header_slide').first();
	$currentslide.fadeOut(500).removeClass('active_slide_header');
	$nextslide.fadeIn(500).addClass('active_slide_header');




	var $currentdot = $('.active_dot');
	var $nextdot = $currentdot.next();
	if ($nextdot.length == 0) $nextdot = $('.dot').first();
	$currentdot.removeClass('active_dot');
	$nextdot.addClass('active_dot');
}

var pre = function () {
	$currentslide = $('.active_slide_header');
	$preslide = $currentslide.prev();
	if ($preslide.length == 0) $preslide = $('.header_slide').last();
	$currentslide.fadeOut(500).removeClass('active_slide_header');
	$preslide.fadeIn(500).addClass('active_slide_header');

	var $currentdot = $('.active_dot');
	var $predot = $currentdot.prev();
	if ($predot.length == 0) $predot = $('.dot').last();
	$currentdot.removeClass('active_dot');
	$predot.addClass('active_dot');
	$('.active_slide_header #content_header_slide > div').css("transform", "scale(0)");
	setTimeout(function () {
		$('.active_slide_header #content_header_slide > div').eq(1).css("transform", "scale(1)");
	}, 500);

}

$(function () {
	setInterval(next, 5000);
	$(window).scroll(function () {
		if (window.pageYOffset >= 100) $auto_scroll.fadeIn();
		else $auto_scroll.fadeOut();
	})

});
var iteration_next = setInterval(next, 5000);

$('.dot').click(function () {
	clearInterval(iteration_next);
	$('.dot').siblings().removeClass('active_dot')
	$(this).addClass('active_dot');

	for (var j = 0; j < $('.dot').length; j++) {
		if ($('.dot').eq(j).attr("class") == "dot active_dot") {
			var temp = j;
			break;
		}
	}

	$('.active_slide_header').fadeOut(400).removeClass("active_slide_header");

	$('.header_slide').eq(temp).fadeIn(400).addClass("active_slide_header");

});

var $menu_list = [".breakfast", ".lunch", ".salads", ".cakes", ".drinks", ".catering"];
var $menu_list_li = $('#our_menu ul li')
$('#our_menu ul li').click(function () {
	$('.selected_menu_li').removeClass('selected_menu_li');
	$(this).addClass('selected_menu_li');
	for (var t = 0; t < $menu_list_li.length; t++)
		if ($menu_list_li.eq(t).attr('class') == "selected_menu_li") {
			var temp = t;
			break;
		}
	var text = $menu_list[temp];
	$('#our_menu .selected_parts_menu').css("transform", "scale(0.6)");
	setTimeout(function () {
		$('#our_menu .selected_parts_menu').removeClass('selected_parts_menu');
	}, 200);

	setTimeout(function () {
		$('#our_menu' + '>' + text).addClass('selected_parts_menu').css("transform", "scale(0.8)");
	}, 200);

	setTimeout(function () {
		$('#our_menu' + '>' + text).css("transform", "scale(1)");
	}, 300);
});
