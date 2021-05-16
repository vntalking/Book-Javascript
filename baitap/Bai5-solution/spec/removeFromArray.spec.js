var ArrayUtils = new ArrayUtils();

describe('removeFromArray', function() {
  it('Xóa một phần tử', function() {
    expect(ArrayUtils.removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Xóa nhiều phần tử', function() {
    expect(ArrayUtils.removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
  });
  it('Bỏ qua nếu phần tử yêu cầu xóa không tồn tại trong mảng', function() {
    expect(ArrayUtils.removeFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
  });
  it('Bỏ qua phần tử nào không tồn tại, còn phần tử tồn tại vẫn xóa bình thường', function() {
    expect(ArrayUtils.removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
  });
  it('Xóa tất cả phần tử', function() {
    expect(ArrayUtils.removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
  });
  it('Làm việc với cả string', function() {
    expect(ArrayUtils.removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
  });
  it('Chỉ xóa phần tử nào cùng kiểu', function() {
    expect(ArrayUtils.removeFromArray([1, 2, 3], "1", 3)).toEqual([1, 2]);
  });
});