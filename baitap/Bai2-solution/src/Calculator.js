let Calculator = function () { }

/**
 * Hàm thực hiện phép tính cộng. 
 * Ví dụ nhập (15, 10). Tính 15 + 10 = 25. (return 25)
 */
Calculator.prototype.add = function (a, b) {
    return a + b;
}

/**
 * Hàm thực hiện phép tính tổng của nhiều số. 
 * Đầu vào là một mảng các chữ số. 
 * Ví dụ: [1, 3, 6, 10]. Kết quả mong muốn là 1 + 3 + 6 + 10 = 20. (return 20)
 */
Calculator.prototype.sum = function (array) {
    return array.reduce((total, current) => total + current, 0);
}

/**
 * Hàm thực hiện phép tính trừ. 
 * ví dụ: nhập (15, 10), tính 15 - 10 = 5.
 */
Calculator.prototype.subtract = function (a, b) {
    return a - b;
}


/**
 * Hàm thực hiện phép tính nhân của nhiều số. Đầu vào là một mảng
 * Ví dụ: đâu vào là [2, 3, 4]. Tính: 2 * 3 * 4 = 24.
 */
Calculator.prototype.multiply = function (array) {
    return array.length
        ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
}

/**
 * Hàm thực hiện phép tính lũy thừa. 
 * Ví dụ: nhập vào (2,3), tính 2^3 = 2*2*2 = 8
 */
Calculator.prototype.power = function (a, b) {
    return Math.pow(a, b);
}

/**
 * Hàm thực hiện phép tính giai thừa.
 * Ví dụ: nhập vào n =  3, tính 3! = 1 * 2 * 3 = 6
 */
Calculator.prototype.factorial = function (n) {
    if (n == 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--) {
        product *= i;
    }
    return product;
}
