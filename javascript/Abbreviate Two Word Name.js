// Write a function to convert a name into initials. This kata strictly 
// takes two words with one space in between them. The output should be
// two capital letters with a dot seperating them.


function abbrevName(name){
    var nameArray = name.split(" ");                        //splits string into an array
    var firstNameLetter = nameArray[0][0];                  //grabs the first letter of first name
    var lastNameLetter = nameArray[1][0];                   //grabs the first letter of last name
    var initials = firstNameLetter + "." + lastNameLetter;  // builds the initial with the .
    return initials.toUpperCase();                          // returns the initials then makes uppercase
   }
   
   console.log(abbrevName("landon johnson"));