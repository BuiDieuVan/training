/* setTimeout */
let vidu=(x,y,callback)=>{
	setTimeout(()=> {
		if(x+y>5){
			return callback (' tổng lớn hơn 5');
		}else return callback("tổng nhỏ hơn 5");
	},2000	);
};
vidu(1,3, result => {
	console.log(result);
});