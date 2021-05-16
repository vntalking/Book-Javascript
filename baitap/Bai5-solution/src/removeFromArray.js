var ArrayUtils = function () {};

/**
 * Viết một hàm nhận vào 1 mảng và một số. Bạn cần phải tìm và xóa đối số đó khỏi mảng.
 * Ví dụ: ArrayUtils.removeFromArray([1, 2, 3, 4], 3) = [1, 2, 4]
 */
 ArrayUtils.prototype.removeFromArray  = function(...args) {
	const array = args[0];
	const newArray = [];
	array.forEach((item) => {
	  if (!args.includes(item)) {
		newArray.push(item);
	  }
	});
	return newArray;
}


