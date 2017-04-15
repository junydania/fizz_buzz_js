function fizzBuzz() {}

fizzBuzz.prototype.calculate_fizz = function(number) {
  if (number % 15 === 0) {
    return 'Fizz Buzz';
  }
  else if(number % 5 === 0) {
    return 'Buzz';
  }
  else if(number % 3 === 0){
    return 'Fizz';
  }else {
    return 'You have entered a weird number';
  }

};
