describe("Fizz_buzz", function() {
  var subject;

  beforeEach(function() {
    subject = new fizzBuzz();
  });

  it("Tests numbers divisible by 15", function() {
    expect(subject.calculate_fizz(45)).toEqual('Fizz Buzz');
  });

  it("Tests numbers divisible by 5", function() {
    expect(subject.calculate_fizz(5)).toEqual('Buzz');
  });

  it("Tests numbers divisible by 3", function() {
    expect(subject.calculate_fizz(6)).toEqual('Fizz');
  });

});
