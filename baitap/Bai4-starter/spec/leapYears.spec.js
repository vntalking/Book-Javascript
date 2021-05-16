var leapYears = new leapYear();

describe('leapYears', function() {
  it('Kiểm tra với một năm bình thường gần đây bất kỳ - 1996', function() {
    expect(leapYears.isLeapYears(1996)).toEqual(true);
  });
  it('Kiểm tra với một năm bình thường - 1997', function() {
    expect(leapYears.isLeapYears(1997)).toEqual(false);
  });
  it('Kiểm tra với một năm ở tương lai rất xa', function() {
    expect(leapYears.isLeapYears(34992)).toEqual(true);
  });
  it('Kiểm tra với năm đầu một thế kỷ', function() {
    expect(leapYears.isLeapYears(1900)).toEqual(false);
  });
  it('Kiểm tra với năm đầu một thế kỷ', function() {
    expect(leapYears.isLeapYears(1600)).toEqual(true);
  });
  it('Kiểm tra với năm đầu một thế kỷ', function() {
    expect(leapYears.isLeapYears(700)).toEqual(false);
  });
});