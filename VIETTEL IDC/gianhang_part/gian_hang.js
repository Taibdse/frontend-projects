var $frame_for_show_info_services = $('#frame_for_show_info_services');
var $step = $('.step');
var count_step_cho_thue_cho_dat_thiet_bi = 0;

var colo_2 = {
	"Tên dịch vụ": 'COLO 2',
	"Phí khỏi tai dịch vụ": '750.000',
	"Thông số cơ bản": {
		"Không gian máy chủ": '2U',
		"Công suất điện": '500W',
		"Lưu lượng thông tin": 'Khong gioi han',
		"Băng thông internet": '100Mbps',
		"Địa chỉ IP": '1',
		"Điều hòa máy nổ, UPS": 'Co',
		"Hỗ trợ kỹ thuật": '24/7',
		"Phí hàng tháng (VNĐ)": '2,100,100',
	},
	"Dịch vụ bổ sung": {
		"Không gian tăng thêm (1U)": 'x 250,000vnd/thang',
		"Công suất điện tăng thêm (50W)": 'x 100,000 vnd/thang',
		"Địa chỉ IP": 'x 150,000 vnd/thang',
	},
	"Thời hạn đăng ký": ['1 thang', '6 thang', '1 nam', '2 nam'],
	"Tổng chi phí (VNĐ)": ['2,850,000', '11,640,000', '21,780,000', '42,060,000'],
}

var colo_1 = {
	"Tên dịch vụ": 'COLO 1',
	"Phí khỏi tai dịch vụ": 'Miễn phí',
	"Thông số cơ bản": {
		"Không gian máy chủ": '1U',
		"Công suất điện": '300W',
		"Lưu lượng thông tin": 'Khong gioi han',
		"Băng thông internet": '100Mbps',
		"Địa chỉ IP": '01',
		"Điều hòa máy nổ, UPS": 'Khong',
		"Hỗ trợ kỹ thuật": 'Khong',
		"Phí hàng tháng (VNĐ)": '2,440,100',
	},
	"Dịch vụ bổ sung": {
		"Bổ sung không gian Rack thêm 1U đầu tiên": 'x 200,000 vnd/thang',
		"Bổ sung không gian Rack thêm 1U tiếp theo": 'x 300,000 vnd/thang',
		"Thêm 01 địa chỉ IP": 'x 150,000 vnd/thang',
		"Cân bằng tải cho server": 'x 300,000 vnd/thang',
		"Tạo VLAN riêng cho server": 'x 200,000 vnd/thang',
		"Dịch vụ  rewall (1 rule )": 'x 300,000 vnd/thang',
		"Bổ sung thêm cổng kết nối mạng dự phòng 100Mbps (1 cổng)": 'x 200,000 vnd/thang',
		"Nâng cấp cổng cắm mạng lên 1000 Mbps (cho 1 cổng)": 'x 800,000 vnd/thang',
	},
	"Thời hạn đăng ký": ['1 thang', '6 thang', '1 nam', '2 nam'],
	"Tổng chi phí (VNĐ)": ['3,190,000', '11,640,000', '21,780,000', '42,060,000'],
}

var colo_arr = [colo_1, colo_2];


function set_content_for_step_2(i) {

	var content = '';
	content += '<div class="box"><h4>Thong so dich vu</h4>'

	content += '<ul><li>Ten dich vu</li><li>Phi khoi tao dich vu</li></ul><h4>Thong so co ban</h4>';

	content += '<ul>';
	for (var prop in colo_arr[i]["Thông số cơ bản"]) {
		content += '<li>' + prop + '</li>'
	}
	content += '</ul>';
	content += '</div>';

	content += '<div class="box">';

	if (i == 0) {
		content += '<select id = "select_colo"> <option value = "' + colo_arr[0]["Tên dịch vụ"] + '">COLO 1</option> <option>COLO 2</option> </select>'
	}
	if (i == 1) {
		content += '<select id = "select_colo"> <option value = "' + colo_arr[1]["Tên dịch vụ"] + '">COLO 2</option> <option>COLO 1</option> </select>'
	}

	content += '<span>' + colo_arr[i]["Phí khỏi tai dịch vụ"] + '</span>';
	content += '<ul>';

	for (var prop in colo_arr[i]["Thông số cơ bản"]) {
		content += '<li>' + colo_arr[i]["Thông số cơ bản"][prop] + '</li>'
	}

	content += '</ul>';

	content += '</div>'

	content += '<div class="box"> <h4>Dich vu bo sung</h4>';

	content += '<ul>';
	for (var prop in colo_arr[i]["Dịch vụ bổ sung"]) {
		content += '<li>' + prop + '</li>'
	}
	content += '</ul>';

	content += '<div>Thoi han dang ky</div> <div>Tong chi phi (VND)</div>';

	content += '</div>';

	content += '<div class="box"> <span>(Mua them)</span>';

	content += '<ul>';

	for (var prop in colo_arr[i]["Dịch vụ bổ sung"]) {
		content += '<li><input type="text" value="0"><span>' + colo_arr[i]["Dịch vụ bổ sung"][prop] + '</span></li>'
	}

	content += '</ul>';

	content += '<div> <select id = "select_thoi_han">';

	for (var j = 0; j < colo_arr[i]["Thời hạn đăng ký"].length; j++) {
		if (j == 0) {
			content += '<option value="' + colo_arr[i]["Thời hạn đăng ký"][j] + '" selected = "selected">' + colo_arr[i]["Thời hạn đăng ký"][j] + '</option>'
		} else
			content += '<option value="' + colo_arr[i]["Thời hạn đăng ký"][j] + '">' + colo_arr[i]["Thời hạn đăng ký"][j] + '</option>'
	}

	content += '</select> </div>';
	content += '<div id = "tong_chi_phi">' + colo_arr[i]["Tổng chi phí (VNĐ)"][0] + '</div>';
	content += '</div>';

	content += '<span class="clear"></span>';

	content += '<div id="xac-nhan_don_hang"> <button type="button"> QUAY LAI BUOC TRUOC </button>  <button type="button"> XAC NHAN DON HANG </button> </div>';

	$('#cho_thue_cho_dat_thiet_bi_step_2').html(content);
}

function tinh_tong_chi_phi(index_thang, index_colo) {

	var tong_gia = parseInt(colo_arr[index_colo]["Tổng chi phí (VNĐ)"][index_thang].replace(/,/g, ''));

	var sum = 0,
		i = 0;

	for (var prop in colo_arr[index_colo]["Dịch vụ bổ sung"]) {
		var mua_them = colo_arr[index_colo]["Dịch vụ bổ sung"][prop];
		mua_them = parseInt(mua_them.substring(2, mua_them.indexOf('vnd')).replace(/,/g, ''));

		var input_value = parseInt($('#cho_thue_cho_dat_thiet_bi_step_2').find('.box').eq(3).find('ul li').eq(i).find('input').val());

		sum += mua_them * input_value;
		i++;
	}

	return tong_gia + sum;
}


function hien_thi_tong_chi_phi() {

	var index_colo, index_thang;
	console.log($('#cho_thue_cho_dat_thiet_bi_step_2 select')[0].value);

	for (var i = 0; i < colo_arr.length; i++) {
		if ($('#cho_thue_cho_dat_thiet_bi_step_2 select')[0].value == colo_arr[i]["Tên dịch vụ"]) {
			index_colo = i;
			break;
		}
	} //get index of the colo when users choose what kind of colo

	console.log($('#cho_thue_cho_dat_thiet_bi_step_2 select')[1].value);

	for (var i = 0; i < colo_arr[index_colo]["Thời hạn đăng ký"].length; i++) {
		if ($('#cho_thue_cho_dat_thiet_bi_step_2 select')[1].value == colo_arr[index_colo]["Thời hạn đăng ký"][i]) {
			index_thang = i;
			break;
		}
	} // get index_thang ['1 thang','6 thang','1 nam','2 nam']


	var tong_chi_phi = tinh_tong_chi_phi(index_thang, index_colo);
	tong_chi_phi = change_integer_to_str_format(tong_chi_phi);

	$('#cho_thue_cho_dat_thiet_bi_step_2 #tong_chi_phi').text(tong_chi_phi);
}


$('#cho_thue_cho_dat_thiet_bi_step_2').on('keyup', '.box ul li input', hien_thi_tong_chi_phi);

$('#cho_thue_cho_dat_thiet_bi_step_2').on('change', '#select_thoi_han', hien_thi_tong_chi_phi);

$('#cho_thue_cho_dat_thiet_bi_step_2').on('change', '#select_colo', () => {

	for (var i = 0; i < colo_arr.length; i++) {
		if (colo_arr[i]["Tên dịch vụ"] == $('#cho_thue_cho_dat_thiet_bi_step_2 select')[0].value) {
			var index = i;
			break;
		}
	}
	set_content_for_step_2(index);
});


function set_content_for_step_3(index_colo) {

	var content = '';

	content += '<table><thead><tr><th>Thông sô dịch vụ</th><th>Thành tiền</th></tr></thead><tbody><tr><td><h4>Tên gói dich vụ: ' + colo_arr[index_colo]["Tên dịch vụ"] + '</h4>';

	content += '<div > Phí khởi tạo:  ' + colo_arr[index_colo]["Phí khỏi tai dịch vụ"] + '  </div>'

	if (colo_arr[index_colo]["Phí khỏi tai dịch vụ"] != "Miễn phí") {
		var x = parseInt($('#cho_thue_cho_dat_thiet_bi_step_2 #tong_chi_phi').text().replace(/,/g, '')) - parseInt(colo_arr[index_colo]["Phí khỏi tai dịch vụ"].replace(/,/g, ''));
	} else {
		var x = parseInt($('#cho_thue_cho_dat_thiet_bi_step_2 #tong_chi_phi').text().replace(/,/g, ''));
	}

	content += '<div >Thời hạn: ' + $('#cho_thue_cho_dat_thiet_bi_step_2 select')[1].value + '( ' + change_integer_to_str_format(x) + ' VND)</td>';


	content += '<td>' + $('#cho_thue_cho_dat_thiet_bi_step_2 #tong_chi_phi').text() + ' VNĐ</td>';

	content += '</tr>';

	content += '<tr>'

	content += '<td><div>Thành tiền</div><div>Thuế giá trị gia tăng VAT 10%:</div><div>Tổng</div></td>'

	content += '<td><div>' + $('#cho_thue_cho_dat_thiet_bi_step_2 #tong_chi_phi').text() + ' VNĐ</div>'

	var y = parseInt($('#cho_thue_cho_dat_thiet_bi_step_2 #tong_chi_phi').text().replace(/,/g, '')) / 10;

	content += '<div>' + change_integer_to_str_format(y) + ' VNĐ</div>'

	var z = parseInt($('#cho_thue_cho_dat_thiet_bi_step_2 #tong_chi_phi').text().replace(/,/g, '')) + y;

	content += '<div>' + change_integer_to_str_format(z) + ' VNĐ</div></td>'

	content += '</tr>'
	content += '</tbody></table>';

	content += '<div id="hoan_thanh_don_hang"><button type="button">QUAY LAI BUOC TRUOC</button><button type="button">HOAN THANH</button></div>'

	$('#cho_thue_cho_dat_thiet_bi_step_3').html(content);
}



function change_style_steps(e) {
	for (var i = 0; i < 4; i++) {
		$('#gian_hang_content > div > div > div').eq(i).find('.box').css({
			'background-color': '#DDDDDD',
		});

		$('#gian_hang_content > div > div > div').eq(i).find('.box span').css({
			'color': '#3C3C3C',
		})
	}

	$('#gian_hang_content > div > div > div').eq(count_step_cho_thue_cho_dat_thiet_bi).find('.box').css({
		'background-color': '#FF9900',
	})

	$('#gian_hang_content > div > div > div').eq(count_step_cho_thue_cho_dat_thiet_bi).find('.box span').css({
		'color': 'white',
	})
}

$('#right_content > div:nth-of-type(2)> div > a').first().click(function (e) {
	e.preventDefault();

	for (var i = 0; i < $step.length; i++) {
		$step.eq(i).hide();
	}
	$frame_for_show_info_services.show();

	count_step_cho_thue_cho_dat_thiet_bi = 0;
	change_style_steps();
})

$('#top_content_gianhang > div > button').click(function () {
	for (var i = 0; i < $step.length; i++) {
		$step.eq(i).hide();
	}
	$frame_for_show_info_services.show();

	count_step_cho_thue_cho_dat_thiet_bi = 0;
	change_style_steps();
});

$('#frame_for_show_info_services > div:nth-of-type(1)').find('a').click(function (e) {
	e.preventDefault();
	$frame_for_show_info_services.hide();
	$('#cho_thue_cho_dat_thiet_bi_step_1').show();
	count_step_cho_thue_cho_dat_thiet_bi = 0;
	change_style_steps();
})

$('#right_content > div:nth-of-type(2) > ul > li').click(function (e) {
	e.preventDefault();
	for (var i = 0; i < $('#right_content > div:nth-of-type(2) > ul > li').length; i++) {
		if (i == 0) {
			$frame_for_show_info_services.hide();
			for (var j = 0; j < $step.length; j++) {
				$step.eq(j).hide();
			}
			$('#cho_thue_cho_dat_thiet_bi_step_1').show();
			count_step_cho_thue_cho_dat_thiet_bi = 0;
			change_style_steps();
		}
	}
})

$('#cho_thue_cho_dat_thiet_bi_step_1 .dang_ki_ngay').click(function () {
	var index = $('#cho_thue_cho_dat_thiet_bi_step_1 .dang_ki_ngay').index(this);
	set_content_for_step_2(index);

	$('#cho_thue_cho_dat_thiet_bi_step_1').hide();

	$('#cho_thue_cho_dat_thiet_bi_step_2').show();

	count_step_cho_thue_cho_dat_thiet_bi = 1;

	change_style_steps();
});

$('#cho_thue_cho_dat_thiet_bi_step_2').on('click', '#xac-nhan_don_hang button:nth-of-type(1)', function () {

	console.log("2 hide 1 show");
	$('#cho_thue_cho_dat_thiet_bi_step_2').hide();

	$('#cho_thue_cho_dat_thiet_bi_step_1').show();

	count_step_cho_thue_cho_dat_thiet_bi = 0;
	change_style_steps();
})

$('#cho_thue_cho_dat_thiet_bi_step_2').on('click', '#xac-nhan_don_hang button:nth-of-type(2)', function () {

	console.log("2 hide 3 show");
	$('#cho_thue_cho_dat_thiet_bi_step_2').hide();

	var name = $('#cho_thue_cho_dat_thiet_bi_step_2 select')[0].value;

	for (var i = 0; i < colo_arr.length; i++) {
		if (name == colo_arr[i]["Tên dịch vụ"]) {
			var index = i;
			break;
		}
	}

	set_content_for_step_3(index);

	$('#cho_thue_cho_dat_thiet_bi_step_3').show();

	count_step_cho_thue_cho_dat_thiet_bi = 2;
	change_style_steps();
})

$('#cho_thue_cho_dat_thiet_bi_step_3').on('click', '#hoan_thanh_don_hang button:nth-of-type(1)', function () {
	$('#cho_thue_cho_dat_thiet_bi_step_3').hide();

	$('#cho_thue_cho_dat_thiet_bi_step_2').show();

	count_step_cho_thue_cho_dat_thiet_bi = 1;
	change_style_steps();
});

$('#cho_thue_cho_dat_thiet_bi_step_3').on('click', '#hoan_thanh_don_hang button:nth-of-type(2)', function () {
	$('#cho_thue_cho_dat_thiet_bi_step_3').hide();

	$('#cho_thue_cho_dat_thiet_bi_step_4').show();

	count_step_cho_thue_cho_dat_thiet_bi = 3;
	change_style_steps();
});

$('#cho_thue_cho_dat_thiet_bi_step_4 .box_info button').click(function () {
	check_validate_form();
})


function get_content_from_step1_to_step2() {
	for (var i = 0; i < $('#cho_thue_cho_dat_thiet_bi_step_1 > div').length; i++) {

		var content = $('#cho_thue_cho_dat_thiet_bi_step_1 > div').eq(i).find('.box ul').html();

		$('#cho_thue_cho_dat_thiet_bi_step_2 > .box').eq(i).find('ul').last().html(content);
	}
}


function check_validate_form() {

	$('#cho_thue_cho_dat_thiet_bi_step_4 .box_info').last().find('li span').remove();

	var $name = $('#cho_thue_cho_dat_thiet_bi_step_4 #name');
	var $phone = $('#cho_thue_cho_dat_thiet_bi_step_4 #phone');
	var $email = $('#cho_thue_cho_dat_thiet_bi_step_4 #email');


	var invalid_name = $('<span>Vui long nhap ho ten</span>');
	var invalid_phone = $('<span>So dien thoai khong dung</span>');
	var invalid_email = $('<span>Email khong dung</span>');

	name_reg = /^([a-zA-Z]{1,})([ ][a-zA-Z]{1,})*$/;
	phone_reg1 = /^[0-9]{9}$/;
	phone_reg2 = /^[0-9]{12}$/;
	email_reg = /^[0-9a-zA-Z]{1,}[@][a-zA-Z]{1,}([.][a-zA-Z]{1,}){1,2}$/;

	if (name_reg.test($name.val()) == false) {
		$('#cho_thue_cho_dat_thiet_bi_step_4 .box_info').last().find('li').first().append(invalid_name);
	}

	if (phone_reg1.test($phone.val()) == false && phone_reg2.test($phone.val()) == false) {
		$('#cho_thue_cho_dat_thiet_bi_step_4 .box_info').last().find('li').eq(1).append(invalid_phone);
	}

	if (email_reg.test($email.val()) == false) {
		$('#cho_thue_cho_dat_thiet_bi_step_4 .box_info').last().find('li').eq(2).append(invalid_email);
	}
}

$('#bars').click(function () {
	console.log($('body').width())
	if ($('#gian_hang_content > #right_content').css("right") == "0px")
		$('#gian_hang_content > #right_content').css({
			"right": "-220px",
		})

	else $('#gian_hang_content > #right_content').css({
		"right": "0px",
	})
})

$(window).resize(function () {
	console.log("running");
	if ($('body').width() >= 750) {
		$('#gian_hang_content > #right_content').css({
			"right": "0px",
		})
	}
})

function change_integer_to_str_format(num) {

	if (!isNaN(num)) {
		num = num.toString();
		var content = ""
		for (var i = num.length - 1; i >= 0; i--) {
			if ((num.length - i - 1) % 3 == 2 && i != 0)
				content = content + num.charAt(i) + ",";
			else content = content + num.charAt(i) + "";
		}

		var content2 = "";
		for (var i = content.length - 1; i >= 0; i--) {
			content2 += content.charAt(i);
		}
		return content2;
	} else {
		return "NaN";
	}
}

function change_str_to_integer_format(str) {
	return str.replace(/,/g, '');
}
