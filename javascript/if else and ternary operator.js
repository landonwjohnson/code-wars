// Complete function saleHotdogs/SaleHotDogs, function 
// accept 1 parameters:n, n is the number of customers
// to buy hotdogs, different numbers have different 
// prices (refer to the following table), return
// a number that the customer need to pay 
// how much money.

function saleHotdogs(n){
    return n*(n < 5 ? 100 : n < 10 ? 95 : 90);
  }