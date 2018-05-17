var submenu_shop = document.getElementById("submenu_shop");
var shop_list = document.getElementById("shop_list");
var wheel = document.getElementById("wheel");
var fixed_menu = document.getElementById("fixed_menu");
var icon_wheel = wheel.getElementsByTagName("i");
var i = 0;


shop_list.addEventListener("mouseover", show_submenu_shop);
submenu_shop.addEventListener("mouseover", show_submenu_shop);
shop_list.addEventListener("mouseout", hide_submenu_shop);
submenu_shop.addEventListener("mouseout", hide_submenu_shop);
wheel.addEventListener("click", show_fixed_menu);
wheel.addEventListener("mouseover", rotate_wheel1);
wheel.addEventListener("mouseout", rotate_wheel2);


function show_submenu_shop() {
	'use strict';
	submenu_shop.style.display = 'block';
}

function hide_submenu_shop() {
	submenu_shop.style.display = 'none';
}

function show_fixed_menu() {
	if (i != 0) {
		fixed_menu.style.right = "-25%";
		i--;
	} else {
		fixed_menu.style.right = 0;
		i++;
	}
}

function rotate_wheel1() {
	icon_wheel[0].setAttribute("style", "transition: all 0.3s");
	icon_wheel[0].style.transform = "rotate(720deg)";
}

function rotate_wheel2() {
	icon_wheel[0].setAttribute("style", "transition: all 0.3s");
	icon_wheel[0].style.transform = "rotate(0deg)";
}


