// You have to return the digits of this number within an array in reverse order.

function digitize(n) {
    //code here
     return n.toString().split("").map(Number).reverse();
  }

  console.log(digitize(348597));