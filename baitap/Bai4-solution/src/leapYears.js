const leapYear = function () {};

/**
 * Viết hàm để xác định một năm bất kỳ có phải là năm nhuận hay không? Trả về giá trị boolean.
 * Ví dụ: isLeapYears(2000) = true
 * isLeapYears(2000) = false
 */
 leapYear.prototype.isLeapYears  = function(year) {
	return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0)
}