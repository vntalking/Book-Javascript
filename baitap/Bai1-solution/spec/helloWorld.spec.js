describe('Hello World', function() {
	var talking = new HelloWorld();
	
  it('says hello world', function() {
    expect(talking.sayHello()).toEqual('Hello');
  });
});