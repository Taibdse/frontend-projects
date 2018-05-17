function _(x) {
	'use strict';
	return document.getElementById(x);
}

var nav = document.querySelector('nav');
var top_element = _('top');
var chat_chung_toi = _("chat_chung_toi");
var chat_area = _('chat_area');
var hide_chat_area_icon_1 = document.querySelector('#chat_area > #header_chat  span:nth-of-type(1)');
var hide_chat_area_icon_3 = document.querySelector('#chat_area > #header_chat  span:nth-of-type(3)');
var show_sub_menu_element = document.getElementsByClassName("show_sub_menu_element");
var sub_menu = document.querySelector(".sub_menu");
var show_hidden_menu = document.getElementsByClassName("show_hidden_menu");
var show_sub_hidden_menu = document.getElementsByClassName("show_sub_hidden_menu");
var interval;
var count = 0;

window.onscroll = function () {

	var img_nav = document.querySelector('nav > div > a:nth-of-type(1) > img');
	if (window.pageYOffset != 0) {
		top_element.style.opacity = 1;

		if (document.body.offsetWidth >= 900) {
			nav.style.position = 'fixed';
			nav.style.top = 0;
			nav.style.left = 0;
			img_nav.style.transform = 'translateY(-50%) scale(0.8)';
		}
	}
	else {
		nav.style.position = 'relative';
		img_nav.style.transform = 'translateY(-50%) scale(1)';
		top_element.style.opacity = 0;
	}
}

top_element.addEventListener('click', function () {
	interval = setInterval(move_top, 20);
})

var move_top = function () {
	var distance = window.pageYOffset;

	if (distance == 0) clearInterval(interval);
	else window.scrollTo(0, distance - 100);

}

chat_chung_toi.addEventListener('click', function () {
	chat_area.style.display = 'block';
	chat_chung_toi.style.display = 'none';
});

function hide_chat_area() {
	chat_area.style.display = 'none';
	chat_chung_toi.style.display = 'block';
};

hide_chat_area_icon_1.addEventListener('click', hide_chat_area);
hide_chat_area_icon_3.addEventListener('click', hide_chat_area);
//sub_menu[i] undefined do display: none
//		function show_sub_menu() {
//			for (var i = 0; i < show_sub_menu_element.length; i++) {
//
//				show_sub_menu_element[i].addEventListener('mouseover', function() {
//					sub_menu[i].style.display = 'block';
//					sub_menu[i].style.opacity = 0;
//					setTimeout(function() {
//						sub_menu[i].style.opacity = 1;
//					}, 100);
//				})
//
//			}
//		}



//		function hover_sub_menu() {
//			for (var i = 0; i < show_sub_menu_element.length; i++) {
//				sub_menu[i].addEventListener('mouseover', function() {
//					this.style.display = 'block';
//				})
//			}
//		}


//		function mouseout_menu_element() {
//			for (var i = 0; i < show_sub_menu_element.length; i++) {
//				show_sub_menu_element[i].addEventListener('mouseout', function() {
//					setTimeout(function() {
//						sub_menu[i].style.display = 'none';
//					}, 400)
//				})
//			}
//
//		}

//		document.body.onload = function() {
//			setTimeout(function() {
//				show_sub_menu();
//				mouseout_menu_element();
//			}, 5000);
//		};

//		function show_hidden_nav() {
//			for (var i = 0; i < show_hidden_menu.length; i++) {
//				show_hidden_menu[i].addEventListener('click', function(e) {
//					e.preventDefault();
//					if (this.parentNode.parentNode.nextElementSibling.style.display == 'none') {
//						this.parentNode.parentNode.nextElementSibling.style.display = 'block';
//
//						this.style.color = 'blue';
//					} else {
//						this.style.color = 'white';
//						this.parentNode.parentNode.nextElementSibling.style.display = 'none';
//					}
//
//				})
//			}
//		}



//		function show_sub_hidden_nav() {
//
//			for (var i = 0; i < show_sub_hidden_menu.length; i++) {
//				show_sub_hidden_menu[i].addEventListener('click', function(e) {
//					e.preventDefault();
//					if (this.parentNode.parentNode.nextElementSibling.style.display == 'none') {
//						this.parentNode.parentNode.nextElementSibling.style.display = 'block';
//						this.style.color = 'blue';
//					} else {
//						this.style.color = 'white';
//						this.parentNode.parentNode.nextElementSibling.style.display = 'none';
//					}
//				});
//
//
//			}
//		}


$('.show_sub_menu_element').hover(function () {
	$(this).children('.sub_menu').fadeIn(200);
});

$('.show_sub_menu_element').mouseleave(function () {
	$(this).children('.sub_menu').fadeOut(200);
});


$('.show_hidden_menu').click(function (e) {
	e.preventDefault();
	$(this).toggleClass('set_color');
	$(this).parent().parent().next().slideToggle(400);
});

$('.show_sub_hidden_menu').click(function (e) {
	e.preventDefault();
	$(this).toggleClass('set_color');
	$(this).parent().parent().next().slideToggle(400);
});


$('#bar').click(function () {
	$('#hidden_nav').slideToggle(400);
});

//		window.onload = show_hidden_nav();
//		window.onload = show_sub_hidden_nav();


var $input_name = $('#input_name');
var $input_mail = $('#input_mail');
var $input_info = $('#input_info');
var $conversation = $('#conversation');
var $customer_type = $('#customer_type');


function check_validate_form() {


	var name_reg = /^([a-zA-Z])+([ ][a-zA-Z]+)*$/;
	var mail_reg = /^(.){1,}[@]([a-zA-Z]){1,}[.][c][o][m]$/;
	//			var info_reg = /^(.){10,}$/;

	var flag = true;
	var warning = "";

	if (name_reg.test($input_name.val()) == false) {
		warning += "Name is not valid\n";
		flag = false
	}

	if (mail_reg.test($input_mail.val()) == false) {
		warning += "Mail is not valid";
		flag = false
	}

	//			if (info_reg.test($input_info.val()) == false) {
	//				warning += "Info is not valid\n";
	//				flag = false
	//			}

	if (flag == true) {
		alert("We will contact you soon, check your email sometimes");
	} else {
		alert(warning);
	}
	return flag;
}

function change_content_chat() {
	var content_conversation = '<span id="tu_van">Tư vấn trực tuyến</span> <div class = "talks"> Chào bạn,nếu bạn cần tư vấn hãy nhắn tin lại cho chúng tôi hoặc gọi điện thoại vào số 0986706839. Chúng tôi sẽ hỗ trợ bạn ngay lập tức </div>';

	$conversation.html(content_conversation);

	var customer_content = '<input type="text" placeholder="Go noi dung can tu van vao day">';
	$customer_type.html(customer_content);

	$('#chat_area').append('<div id = "emoji_area"><span><i class="fa fa-volume-off" aria-hidden="true"></i></span><span><i class="fa fa-envelope" aria-hidden="true"></i></span><span><i class="fa fa-file-code-o" aria-hidden="true"></i></span></div>');
}

$input_name.keypress(function (e) {
	if (e.keyCode == 13) {
		if (check_validate_form() == true) {
			change_content_chat();
		}
	}
});
$input_mail.keypress(function (e) {
	if (e.keyCode == 13) {
		if (check_validate_form() == true) {
			change_content_chat();
		}
	}
});
$input_info.keypress(function (e) {
	if (e.keyCode == 13) {
		if (check_validate_form() == true) {
			change_content_chat();
		}
	}
});


var $customer_type_input = $('#chat_area #customer_type > input');
$(function () {
	$customer_type.on('keypress', $customer_type_input, function (e) {
		if (e.keyCode == 13 && $(this).children('input').val().trim() != "") {
			var $talks = $('<div class = "talks"></div>');
			$talks.text($(this).children('input').val());
			$conversation.append($talks);
			//					alert($(this).children('input').val());
			$customer_type.children('input').val("");
			//					var h = $(this).get(0).offset().top;
			//					console.log($(this))
			//					console.log(h)
			//					$(this).get(0).scrollTop = h; 
			$conversation.get(0).scrollTop = $conversation.get(0).scrollHeight;
		}
	});
})
