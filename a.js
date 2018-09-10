/*Default Parameter Values
gán luôn giá trị mặc định của tham số khi truyền vào hàm*/
function tinhTong(a=2,b=3){
	return a+b;
}
console.log(tinhTong());
console.log(tinhTong(3,7));
// Rest Parameter.: truyền tham số vào hàm bằng cách thêm ...
 // trước tham sốtham số đó sẽ được coi như là một mảng tuần tự chứa các tham số truyền vào hàm
function getParam(a, b, ...c) {
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
}
getParam(1, "học code khó lòi mắt ", 1,2,3,5 );
/*
khai báo Template Literals khai báo biến dễ dàng và nhiều dòng
 Nhưng chỉ có một điều duy nhất là khai thay vì khai báo bằng dấu ' hoặc " thì bạn đổi bằng dấu `:*/
 var content = `<div>
        Học lập trình phải cố gắng
        <font color="red">vmodev.org</font>
    </div> `;
console.log(content);
/*
 Method Properties.*/
//  var student = {
//     name: "Bùi Vân",
//     age: 18,
//     getName: function (Name) {
//         return Name;
//     },
//     getAge: function (age) {
//         return age;
//     }
// };
// console.log(student.getName("Loan"));
// console.log(student.getAge(19));
var student = {
    name: "Bùi Vân",
    age: 24,
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    }
};
console.log(student.getName());
console.log(student.getAge());


/*Object Matching, Shorthand Notation.*/
var leader = () => {
    return {
        name : "anh Thanh khó tính",
        age : 29,
        nationality: "Việt Nam"
    };
}
var {name, age, nationality} = leader();
console.log("name: " + name,
             "age: " + age,
             "nationality: " + nationality);


