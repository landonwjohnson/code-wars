// Remove all exclamation marks from sentence but ensure a 
// exclamation mark at the end of string. For a beginner kata, 
// you can assume that the input data is always a non empty 
// string, no need to verify it.


function remove(s) {
    return s.replace(/!+/g, '') + '!';
  }
  
console.log(remove("!!This senten!!ce o!!nly h!as one ex!cla!mat!ion mar!k"))

//Other

const arrowRemove = s => s.split("!").join("") + "!";

console.log(arrowRemove("Shut up!, and take my money"));

//

function remove2(s){
    //coding and coding....
    return s.split("!").join("") + "!";
    
  }

  console.log(remove2("I a!m s!o !exci!ted!"));