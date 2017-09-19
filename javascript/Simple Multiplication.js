// This kata is about multiplying a given number
// by eight if it is an even number and 
// by nine otherwise.



function simpleMultiplication(value){
    if (value % 2 === 0) {
      return value * 8
    }
    else return value * 9;
}

console.log(simpleMultiplication(5));


//Other
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

function simpleMultiplication(n){
    return n%2 ? n*9 : n*8;
}