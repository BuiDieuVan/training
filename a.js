// call
function vidu(diemThi,callback){
	// kiem tra diem dang so hay chữ
	if( typeof diemThi!== "number" )
		return callback(" điểm nhập ở dạng số");
	//  nếu điểm thi lớn hơn 4 truyền cho callback tham số " bạn đã qua môn"
	if ( diemThi>=4) return callback("bạn đã qua môn");
	else return callback(" chúc mừng bạn đã tạch");
}
vidu(3.9,function(ketQua){
	// hàm callback
	console.log(ketQua);
});