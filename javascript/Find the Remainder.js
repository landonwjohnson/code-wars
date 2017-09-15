// Write a function that accepts two arguments and returns
// the remainder after dividing the larger number by the
// smaller number. Division by zero should return NaN
// (in C#, throw a new DivideByZeroException instead).
// Arguments will both be integers.



function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    if (a > b) {
      return a % b;
    } 
    else return b % a;
  }



  //Other

  function remainder(a, b){
    return a > b ? a % b : b % a;
  }