describe("Fizz_buzz", function() {
  var subject;

  beforeEach(function() {
    subject = new fizzBuzz();
  });

  it("Tests numbers divisible by ", function() {
    var message = 'Fizz Buzz';
    expect(subject.calculate_fizz(45)).toEqual('Fizz Buzz');
  });

});
