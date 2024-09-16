let a = 5;
let b = "5";
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
/* 1 / giá trị (a==b)=>true: 
- vì (==) chỉ so sánh giá trị của biến 
chứ không so sánh kiểu biến nên 5=5 => True

2/ Giá trị (a===b) =>False:
- Vì (===) so sánh cả 2 giá trị + kiểu biến 
nên 5(số) sẽ khác với 5(kiểu chuỗi) => False

3/ Giá trị (a!=b) =>True
cũng giống như trường hợp 1.

4/ Giá trị (a!==b) =>False :
cũng giống như trường hợp 2.