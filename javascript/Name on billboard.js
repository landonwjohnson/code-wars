// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
// You can not use multiplier "*" operator. If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).



//Works

  function billboard(name, price = 30) {
      var totalCost = 0;
      for (var i = 0; i < name.length; i++) {
          totalCost += price;
      }
      return totalCost;
  }


  //Other
    const billboard = (name, price = 30) => +(name.length / (1 / price))


  //Draft
function billboard(name){
    var letterPrice = 30;
    var nameWithoutSpaces = name.replace(/\s/g, '');
    name = name.split("")
    var howManyLetters = Number(nameWithoutSpaces.length)
    return howManyLetters
  } 