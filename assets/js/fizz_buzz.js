function fizzBuzz() {}

fizzBuzz.prototype.calculate_fizz = function(number) {
  if (number % 15 === 0) {
    var result1 = 'Fizz Buzz';
    return result1;
  }
  else if(number % 5 === 0) {
    var result2 = 'Buzz';
    return result2;
  }
  else if(number % 3 === 0){
    var result3 = 'Fizz';
    return result3;
  }else {
    var errorMessage =  "Number entered doesn't meet any of the criteria";
    return errorMessage;
  }

};
