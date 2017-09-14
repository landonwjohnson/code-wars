//Very simple, given a number, find its opposite.

function opposite(number) {
    return -number;
}



//other

function opposite(number) {
    if(number<0){
      return Math.abs(number);
      }
    if(number>=0){
      return -Math.abs(number);
      }
   }