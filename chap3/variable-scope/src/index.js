var x = 10; //Đây là global variable bởi vì nó không khái báo trong hàm
var turnToZero = function (number) {
  number = 0;
  console.log("Giá trị của biến x là: " + x);
};

turnToZero(x);
console.log("Bên ngoài hàm, giá trị của biến x là: " + x);
