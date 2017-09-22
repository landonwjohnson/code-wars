// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly.

// var replaceDots = function(str) {
//     return str.replace(/./, '-');
//   }

var replaceDots = function(str) {
    return str.replace(/[.]/ig, '-');
  }

//Other

var replaceDots = function(str) {
    return str.replace(/\./g, '-');
}

//
const replaceDots = s => s.replace(/\./g, '-');