const Fibonacci = function () { };

/**
 * Viết một hàm mà truyền vào thứ tự và trả về giá trị của số đó trong dãy số fibonacci.
 * Ví dụ: Fibonacci.get(4) // Trả về giá trị của số thứ 4 trong dãy fibonacci (1, 1, 2, 3). Trong ví dụ này trả về số 3.
 * 
 */
Fibonacci.prototype.get = function (count) {
    if (count < 0) return "OOPS";
    if (count == 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < count; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}