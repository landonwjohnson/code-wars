// We need a function that can transform a string into a 
// number. What ways of achieving this do you know?

var stringToNumber = function(str){
    // put your code here
    return Number(str);
  }

  //Other

  var stringToNumber = function(str){
    return parseInt(str);
  }

  //

  var stringToNumber = function(str){
    return +str;
  }