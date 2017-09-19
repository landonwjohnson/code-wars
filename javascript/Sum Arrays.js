// Write a method sum that takes an array of numbers and returns 
// the sum of the numbers. These may be integers or decimals for 
// Ruby and any instance of Num for Haskell. The numbers can also
// be negative. If the array does not contain any numbers 
// then you should return 0. 

var numbers = [1, 2, 35, 3.4, 5, 2];

sum = function (numbers) {
    "use strict";
    return numbers.reduce(function(t, n){
      return t + n;
    }, 0);
  };

console.log(sum(numbers));