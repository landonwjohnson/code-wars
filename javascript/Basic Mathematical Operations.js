// The function should take three arguments - operation(string/char), value1(number), value2(number). 
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2)
{
  // Code
  if ((typeof value1 === "number") && (typeof value2 === "number")) {
    switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    }
  }
  return "please use numbers";
}