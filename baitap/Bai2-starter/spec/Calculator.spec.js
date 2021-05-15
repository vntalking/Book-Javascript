var calculator = new Calculator();

describe('Kiểm tra hàm thực hiện phép tính cộng', function() {
	it('Thực hiện Cộng 0 + 0', function() {
		expect(calculator.add(0,0)).toEqual(0);
	});

	it('Thực hiện cộng 2 + 2', function() {
		expect(calculator.add(2,2)).toEqual(4);
	});

	it('Thực hiện cộng hai số dương', function() {
		expect(calculator.add(2,6)).toEqual(8);
	});
});

describe('Kiểm tra hàm thực hiện phép tính tổng nhiều số', function() {
	it('Tính tổng của một mảng rỗng (không có phần tử)', function() {
		expect(calculator.sum([])).toEqual(0);
	});

	it('Tính tổng của mảng chỉ có một phần tử', function() {
		expect(calculator.sum([7])).toEqual(7);
	});

	it('Tính tổng của mảng có 2 phần tử', function() {
		expect(calculator.sum([7,11])).toEqual(18);
	});

	it('Tính tổng của mảng có nhiều phần tử', function() {
		expect(calculator.sum([1,3,5,7,9])).toEqual(25);
	});
});

describe('Kiểm tra hàm thực hiện phép tính trừ', function() {
	it('Thực hiện trừ hai số', function() {
		expect(calculator.subtract(10,4)).toEqual(6);
	});
});



describe('Kiểm tra hàm thực hiện phép tính nhân nhiều số', function() {
	it('Thực hiện nhân hai số', function() {
		expect(calculator.multiply([2,4])).toEqual(8);
	});

	it('Thực hiện nhân nhiều số', function() {
		expect(calculator.multiply([2,4,6,8,10,12,14])).toEqual(645120);
	});
});

describe('Kiểm tra hàm thực hiện phép lũy thừa', function() {
	it('Thực hiện tính lũy thừa', function() {
		expect(calculator.power(4,3)).toEqual(64); // 4 to third power is 64
	});
});

describe('Kiểm tra hàm thực hiện phép tính giai thừa', function() {
	it('Thực hiện tính giai thừa của số 0', function() {
		expect(calculator.factorial(0)).toEqual(1); // 0! = 1
	});

	it('Thực hiện tính giai thừa của số 1', function() {
		expect(calculator.factorial(1)).toEqual(1);
	});

	it('Thực hiện tính giai thừa của số 2', function() {
		expect(calculator.factorial(2)).toEqual(2);
	});

	it('Thực hiện tính giai thừa của số 5', function() {
		expect(calculator.factorial(5)).toEqual(120);
	});

	it('Thực hiện tính giai thừa của số 10', function() {
		expect(calculator.factorial(10)).toEqual(3628800);
	});
});