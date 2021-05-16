var fibonacci = new Fibonacci();

describe("fibonacci", () => {
  it("works", () => {
    expect(fibonacci.get(4)).toEqual(3);
  });
  it("works", () => {
    expect(fibonacci.get(6)).toEqual(8);
  });
  it("works", () => {
    expect(fibonacci.get(10)).toEqual(55);
  });
  it("works", () => {
    expect(fibonacci.get(15)).toEqual(610);
  });
  it("works", () => {
    expect(fibonacci.get(25)).toEqual(75025);
  });
  it("Không chấp nhận đầu vào là số âm", () => {
    expect(fibonacci.get(-25)).toEqual("OOPS");
  });
  it("Chấp nhận truyền vào là một số dưới dạng string", () => {
    expect(fibonacci.get("8")).toEqual(21);
  });
});