// Write function typeValidation that will accept two parameters:
// variable and type and check if type of variable is matching
// type. Return true if types match or false if not.

function typeValidation(variable, type) {
    // Your code should be here ;) 
    if (typeof variable === type) {
      return true
    }
    else return false;
  }

  //Other
  function typeValidation(variable, type) {
    return typeof variable === type; 
  }