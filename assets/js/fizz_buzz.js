function fizzBuzz() {}

fizzBuzz.prototype.calculate_fizz = function(number) {
  if (number % 15 === 0) {
    this.result = 'Fizz Buzz';
    return this.result;
  }
  else if(number % 5 === 0) {
    this.result = 'Buzz';
    return this.result;
  }
  else if(number % 3 === 0){
    this.result = 'Fizz';
    return this.result;
  }else {
    this.result =  "Number entered doesn't meet any of the criteria";
    return this.result;
  }

};
