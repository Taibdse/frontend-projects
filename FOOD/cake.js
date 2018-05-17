// JavaScript Document

var arr = [{
		type: "breakfast",
		name: "Organic Oatmeal",
		img: "breakfast/menu-1-310x260.png",
		description: "This oatmeal makes a delicious, chewy, wholesome hot cereal that will give you lasting energy throughout the morning.",
		big_price: {
			price: 25,
			energy: "510kcal",
			protein: "44g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 12.5,
			energy: "360kcal",
			protein: "24g",
			carbohydrat: "40g",

		}
	}, {
		type: "breakfast",
		name: "Grilled Panini",
		img: "breakfast/menu-2-310x260.png",
		description: "Fresh toppings and perfectly melted cheese makes every bite of our Grilled Panini simply mouthwatering.",
		big_price: {
			price: 30,
			energy: "600kcal",
			protein: "50g",
			carbohydrat: "40g",
		},
		small_price: {
			price: 13.9,
			energy: "400kcal",
			protein: "55g",
			carbohydrat: "42g",
		}
	}, {
		type: "breakfast",
		name: "Eggplant Sandwiches",
		img: "breakfast/menu-3-310x260.png",
		description: "Roasted eggplant in a French roll with feta cheese, basil and garlic mayonnaise. It’s a No. 1 favorite of our clients.",
		big_price: {
			price: 35,
			energy: "550kcal",
			protein: "45g",
			carbohydrat: "34g",
		},
		small_price: {
			price: 10.9,
			energy: "400kcal",
			protein: "30g",
			carbohydrat: "40g",
		},

	}, {
		type: "breakfast",
		name: "Stack of Pancakes",
		img: "breakfast/menu-4-310x260.png",
		description: "Taste this homey goodness of plain golden pancakes served with whipped butter cooked according to our chef’s recipe.",
		big_price: {
			price: 20,
			energy: "600kcal",
			protein: "10g",
			carbohydrat: "60g",
		},
		small_price: {
			price: 9.5,
			energy: "400kcal",
			protein: "10g",
			carbohydrat: "40g",
		},

	}, {
		type: "breakfast",
		name: "Veggie Sandwich",
		img: "breakfast/menu-5-310x260.png",
		description: "Top warm bread with garlicky red-pepper tzatziki and a combo of cucumbers, olives, peperoncini, tomatoes, radishes, and greens.",
		big_price: {
			price: 50,
			energy: "700kcal",
			protein: "40g",
			carbohydrat: "60g",
		},
		small_price: {
			price: 25,
			energy: "500kcal",
			protein: "35g",
			carbohydrat: "50g",
		}
	}, {
		type: "breakfast",
		name: "Strawberry Pancakes",
		img: "breakfast/menu-6-310x260.png",
		description: "Light and fluffy pancakes packed with strawberries. The vanilla makes this breakfast seem like dessert!",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 17.97,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "lunch",
		name: "Medu Wada",
		img: "lunch/menu-7-310x260.jpg",
		description: "Medu Wada is a traditional Indian snack, which is perfect to have during lunchtime, especially dunked in hot sambar.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 17.97,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "lunch",
		name: "Zrazy",
		img: "lunch/menu-8-310x260.jpg",
		description: "Zrazy is a traditional Ukrainian snack, which tastes like small meat or potato pie and has a lot of other fillings.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 17.97,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	},

	{
		type: "lunch",
		name: "Puff Pastry Bun",
		img: "lunch/menu-9-310x260.jpg",
		description: "These tasty puff pastry buns are perfect sides to any hot drink like tea or coffee during lunch. Try them out at our restaurant!",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 10.90,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "lunch",
		name: "Sandwiches with Cheese",
		img: "lunch/menu-10-310x260.jpg",
		description: "Sandwiches have always been perfect snacks during lunch or dinner, but they taste even better with cheese and dried vegetables.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 9.50,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "lunch",
		name: "Veggie Burger",
		img: "lunch/menu-11-310x260.jpg",
		description: "Even if you are not a vegetarian, you will love this amazing veggie burger. It’s packed with flavour and plenty of the good stuff.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 25.00,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "lunch",
		name: "Crepes with Strawberries",
		img: "lunch/menu-12-310x260.jpg",
		description: "These delicate crepes are rolled up with a fluffy cream cheese filling and sliced strawberries. It’s a perfect dessert treat during lunch.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 17.97,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "salads",
		name: "Mozzarella Salad",
		img: "salad/menu-13-310x260.jpg",
		description: "Fresh Mozzarella, roasted pepper, tomatoes, walnut, basil pesto, balsamic sauce and mixed green salad served in one bowl.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 12.50,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "salads",
		name: "Greek Salad",
		img: "salad/menu-14-310x260.jpg",
		description: "Cucumbers, grape tomatoes, red onions, banana peppers, black olives, and feta cheese add this salad a real Greek taste.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 13.90,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	},

	{
		type: "salads",
		name: "Caesar Salad",
		img: "salad/menu-15-310x260.jpg",
		description: "All summer vegetables are packed into one salad, which is mixed with a truly Italian flavor. Enjoy this masterpiece at our restaurant!",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 10.90,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "salads",
		name: "Italian Chopped Salad",
		img: "salad/menu-16-310x260.jpg",
		description: "All summer vegetables are packed into one salad, which is mixed with a truly Italian flavor. Enjoy this masterpiece!",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 10.90,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "salads",
		name: "Vegetable Salad",
		img: "salad/menu-17-310x260.jpg",
		description: "Lots of variety and crunch in this tasty salad. Spanish peanuts, fresh tomatoes, and dried cranberries make its taste unforgettable.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 10.90,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "salads",
		name: "Fruit Salad",
		img: "salad/menu-18-310x260.jpg",
		description: "Wonderful salad for the holiday seasons. Great to serve for dinner or at a family gathering during the holidays.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 10.90,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "cakes",
		name: "Strawberry Cake",
		img: "cake/menu-19-310x260.jpg",
		description: "This cake truly lives up to its name! Three cake layers are filled with strawberry-studded whipped cream, which tastes delicious!",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 12.50,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "cakes",
		name: "Domino Cake",
		img: "cake/menu-20-310x260.jpg",
		description: "Enjoy this classic dessert with cocoa powder, icing sugar, and chocolate filling combined with tasty sponge cakes.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 12.50,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "cakes",
		name: "Coconut Cake",
		img: "cake/menu-21-310x260.jpg",
		description: "With coconut baked into the cake and a generous sprinkle atop a buttery frosting, this decadent white cake is sure to be your No. 1.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 10.90,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "cakes",
		name: "Cake with Lime",
		img: "cake/menu-22-310x260.jpg",
		description: "If you enjoy lime and like tasty and sweet desserts, this one will quickly become your favorite.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 9.50,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "cakes",
		name: "Strawberry Mousse Cake",
		img: "cake/menu-23-310x260.jpg",
		description: "An eggless chocolate mousse is poured into a cookie crumb crust and decorated with fresh strawberries and cream in this elegant cake.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 25,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "cakes",
		name: "Raspberry Cake",
		img: "cake/menu-24-310x260.jpg",
		description: "This raspberry cake makes a pretty dessert for any special occasion and is especially tasty with hot green tea.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 17.97,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "drinks",
		name: "Lime Cocktail",
		img: "drink/menu-25-310x260.jpg",
		description: "This amazing lime cocktail is our favorite as it is healthy and energizing drink, which is also refreshing in summer.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 12.50,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "drinks",
		name: "Strawberry Cocktail",
		img: "drink/menu-26-310x260.jpg",
		description: "When it comes to cocktails, strawberries get short shrift. This strawberry drink is our summer favorite.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 13.90,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "drinks",
		name: "Orange Juice",
		img: "drink/menu-27-310x260.jpg",
		description: "This quick, fresh, and delicious juice is loaded with carrots and oranges, and is a great way to start off your day!",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 10.90,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "drinks",
		name: "Iced Water",
		img: "drink/menu-28-310x260.jpg",
		description: "This drink is an old classic enjoyed by many, kids and adults. This will be sure to please especially on a hot day.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 9.50,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "drinks",
		name: "Lemonade",
		img: "drink/menu-29-310x260.jpg",
		description: "Lemons, sugar, and water make lemonade a drink that has been around since the 19th century. Enjoy this classic drink!",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 25.00,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "drinks",
		name: "Coke",
		img: "drink/menu-30-310x260.jpg",
		description: "One of the most popular drinks is now available at our restaurant. Enjoy the true taste of this famous non-alcoholic drink!",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 17.97,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "catering",
		name: "Noodle Soup",
		img: "catering/menu-31-310x260.jpg",
		description: "Made-from-scratch noodles are the star of this soup, which is a true classic for all our clients.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 12.50,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "catering",
		name: "Vegetable Soup",
		img: "catering/menu-32-310x260.jpg",
		description: "Based on vegetable broth, barley, and lots of veggies, this soup tastes really hearty and filling, and is perfect during dinner.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 13.90,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "catering",
		name: "Falafel",
		img: "catering/menu-33-310x260.jpg",
		description: "Deep fried, and made with yellow split peas, onion, fresh mint, and spices, these falafel are great when served in pita with salad.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 13.90,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	},

	{
		type: "catering",
		name: "Mashed Potatoes",
		img: "catering/menu-34-310x260.jpg",
		description: "These simple mashed potatoes are made with a touch of garlic for a supersavory flavor everyone will relish in.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 13.90,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	},

	{
		type: "catering",
		name: "Mixed Vegetable Soup",
		img: "catering/menu-35-310x260.jpg",
		description: "In this flavorful vegetable soup, we mix cabbage, sliced pepper, green peas, and add some noodles. It tastes delicious!",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 25,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	}, {
		type: "catering",
		name: "Tomato Soup",
		img: "catering/menu-36-310x260.jpg",
		description: "A simple but tasty soup made with fresh tomatoes is a perfect summertime treat, which is also suitable for vegetarians.",
		big_price: {
			price: 25,
			energy: "300kcal",
			protein: "40g",
			carbohydrat: "50g",

		},
		small_price: {
			price: 17,
			energy: "250kcal",
			protein: "25g",
			carbohydrat: "40g",
		}
	},
];

var bar = document.getElementById("bar");
var nav = document.getElementById("nav");
var sub_menu_content = document.getElementsByClassName("sub_menu_content");
var i = 0;


function show_nav() {
	var nav_icon = bar.getElementsByTagName("i");
	nav_icon[0].style.transition = "all 0.5s";

	if (i == 0) {
		nav.style.left = 0;
		nav_icon[0].setAttribute("class", "fa fa-arrow-left");
		i++;
	} else {
		nav.style.left = "-100%";
		nav_icon[0].setAttribute("class", "fa fa-bars");
		i--;
	}
}

function show_sub_menu(a) {
	if (sub_menu_content[a].style.display == "none") {
		sub_menu_content[a].style.display = "block";

	} else {
		sub_menu_content[a].style.display = "none";

	}
}



function display(type) { // hiển thị sản phẩm lên từng page
	var menu_food = document.getElementById("menu_food");
	var content = "";
	for (var i = 0; i < arr.length; i++) {
		if (type === arr[i].type) {
			content += "<li> <img src = " + arr[i].img + "> <h2> " + arr[i].name + " </h2> <p> " + arr[i].description + " </p>";
			content += "<div class = 'price'> $" + arr[i].big_price.price + " </div> ";
			content += "<button type='button' onclick = 'pushPositionToLocal(" + i + ", " + 1 + ")' >Order online </button></li>";
		}
	}
	menu_food.innerHTML = content;
}

function pushPositionToLocal(code, integer) { // đẩy vị trí sản phẩm và loại big hay small lên localStorage
	window.localStorage.setItem("position", code);
	window.localStorage.setItem("integer", integer);
	location.href = "Cart.html";
}

function choice(integer) { //Thay đổi giá trị integer
	window.localStorage.setItem("integer", integer);
	displayDetails();
}

function displayDetails() { // integer  = 1 là big, 0  là small // hiển thị default là big
	var code = window.localStorage.getItem("position");
	var integer = window.localStorage.getItem("integer");
	var divimg = document.getElementById("img");
	var text = document.getElementById("text");
	var content = "<h1> " + arr[code].name + " </h1> <hr> ";
	content += "<ul> <li onClick = 'choice(" + 1 + ")'> <span> " + arr[code].big_price.price + " </span> <span> BIG </span> </li> ";
	content += "<span> Or </span> <li onClick = 'choice(" + 0 + ")'> <span> " + arr[code].small_price.price + " </span> <span> MINI </span> </li> </ul>";
	if (integer === "1") {
		content += "<div> <h4> ENERGY VALUE </h4> <div> <span>  </span> <span>" + arr[code].big_price.energy + " </span> </div>  ";
		content += "<h4> PROTEINS </h4> <div> <span> </span> <span>" + arr[code].big_price.protein + " </span> </div>  ";
		content += "<h4> CARBOHYDRAT </h4> <div> <span> </span> <span>" + arr[code].big_price.carbohydrat + " </span> </div>  ";
	} else {
		content += "<div> <h4> ENERGY VALUE </h4> <div> <span>  </span> <span>" + arr[code].small_price.energy + " </span> </div>  ";
		content += "<h4> PROTEINS </h4> <div> <span> </span> <span>" + arr[code].small_price.protein + " </span> </div>  ";
		content += "<h4> CARBOHYDRAT </h4> <div> <span> </span> <span>" + arr[code].small_price.carbohydrat + " </span> </div>  ";

	}
	content += "</div>";
	content += " <div> <input type='number' min='1' value='1'> <button onClick='addProduct(" + code + ", " + integer + ")' >Order online</button> </div> ";
	text.innerHTML = content;
	content = "<img src =" + arr[code].img + ">";
	divimg.innerHTML = content;

}

function checkExistence(detail) { // kiểm tra sản phẩm đã tồn tại hay chưa true là cho phép thêm. false là không cho phép thêm
	var productNum = window.localStorage.getItem("productNum");
	for (var i = 0; i < productNum; i++) {
		var list = window.localStorage.getItem(i);
		if (detail.match(list) == detail) {
			return false;
		}
	}
	return true;
}

function addProduct(code, integer) { // thêm 1 sản phẩm váo giỏ hàng
	var productNum = window.localStorage.getItem("productNum");
	var check = window.localStorage.getItem("check");
	var detail = code + "-" + integer + "-1";
	if (checkExistence(detail) === true) { // check xem sản phẩm được click chọn đã tồn tại chưa?
		window.localStorage.setItem(productNum, detail);
		productNum++;
		window.localStorage.setItem("productNum", productNum);
		window.localStorage.setItem("check", ++check);

		alert("Add successfully!");
	} else {
		alert("This item is already on the cart!");
	}
}

function removeProduct(key) { // xóa sản phẩm
	var check = window.localStorage.getItem("check");
	var confirm = window.confirm("Are you sure to remove this item?");
	if (confirm === true) {
		window.localStorage.removeItem(key);
		window.localStorage.setItem("check", --check);
		showCart();

	}
}


function innitCount() { //Khởi tạo số lượng sản phẩm đã mua là 0. Hàm này đặt trong onload trong home
	var productNum = window.localStorage.getItem("productNum");
	var check = window.localStorage.getItem("check");
	if (productNum === null || check === null) {
		window.localStorage.setItem("productNum", 0);
		window.localStorage.setItem("check", 0);
	}
}
//
//function Product_number(){
//	var check = window.localStorage.getItem("check");
//	var x = document.getElementById("cart");
//	var content = "Cart<i class='fa fa-cart-plus' aria-hidden="true"></i><span>("+check+")</span>";
//	x.innerHTML = content;
//}

function openCheckout() {
	window.open("checkout.html");
}

function showCart() { // hiển thị giỏ hàng của khách hàng
	var check = window.localStorage.getItem("check");
	var checkout = document.getElementById("checkout");
	var productNum = window.localStorage.getItem("productNum");
	var sum = 0;
	var content = "<input type='email' id='email' placeholder='Email'> <br> <input type='text' id='phonenumber' placeholder='Phone number'>";
	content += "<h1> " + check + " items in your cart </h1><table>";
	var result = "";
	for (var i = 0; i < productNum; i++) {
		var detail = window.localStorage.getItem(i);
		if (detail !== null) {
			var list = detail.split("-");
			var code = list[0];
			var integer = list[1];
			var quantity = list[2];
			content += " <tr> <td> <input type='number' min='1' value=" + quantity + " onChange= 'updateProduct(" + i + ", this.value)'>  </td>";
			content += "<td> <img src = " + arr[code].img + " > </td>";
			content += "<td> <p> " + arr[code].type + " </p> <span>" + arr[code].name + "  </span>  ";
			if (integer === "1") { //chú ý
				content += " <br> <span>BIG </span> </td>";
				content += " <td> " + arr[code].big_price.price * quantity + " </td> ";
				sum += quantity * arr[code].big_price.price;
			} else {
				content += " <br> <span>SMALL </span> </td>";
				content += " <td> " + arr[code].small_price.price * quantity + " </td> ";
				sum += quantity * arr[code].small_price.price;
			}
			content += " <td><textarea placeholder='Write your message here'></textarea></td><td><button onClick='removeProduct(" + i + ")' >X</button></td></tr>";
		}
	}
	content += "</table>";
	content += "<div><p>Total: <span>" + sum + "</span> </p> </div> <div> <button onClick= 'finish()'>SUBMIT TO FINISH</button> </div> ";
	checkout.innerHTML = content;

}

function updateProduct(key, quantity) {
	var x = window.localStorage.getItem(key);
	var product = x.split("-");
	var code = product[0];
	var sum = 0;
	quantity = parseInt(quantity);
	if (quantity < 1)
		quantity = 1;
	
	if (product[1] === "1") {
		sum = arr[code].big_price.price * quantity;
	} else {
		sum = arr[code].small_price.price * quantity;
	}
	window.localStorage.setItem(key, product[0] + "-" + sum + "-" + quantity);
	showCart();

}


function finish() {
	var check = window.localStorage.getItem("check");
	var emailpattern = /^\w+[@][a-zA-Z]+([.][a-zA-Z]+){1,2}$/ ;
	var email = document.getElementById("email");
	var phone = document.getElementById("phonenumber");
    console.log(email, phone);
	if (check !== "0" && emailpattern.test(email.value)  && (phone.value.length <=12 && phone.value.length >= 10) ) {
		var confirm = window.confirm("Submit successfully. Thank you for your cart. We are going to contact you in 10 minutes!");
		if (confirm === true) {
			location.href = "home.html";
			window.localStorage.clear();
		}
	} else {
		alert("Cannot submit your cart");
	}
}
