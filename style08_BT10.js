let a = 6;
let result = ++a + a + a++ + ++a + a;
console.log(result);

/* Kết quả là 39.
++a và a++ :
Giống nhau : về giá trị đều bằng a+1;
Khác nhau : về thứ tự ưu tiên ( a++ =>++a(được tính cuối cùng)).
*/
