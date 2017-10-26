// Write a function called whatday() which returns the day according to the number
// 1 returns 'Sunday'
// 2 returns 'Monday'
// 3 returns 'Tuesday'
// 4 returns 'Wednesday'
// 5 returns 'Thursday'
// 6 returns 'Friday'
// 7 returns 'Saturday'
// if it's not a number between 1-7 return "Wrong, please enter a number between 1 and 7"

function whatday(num) {    
      if(num === 1) {
        return "Sunday"
      }
      else if(num === 2) {
        return "Monday"
      }
      else if(num === 3) {
        return "Tuesday"
      }
      else if(num === 4) {
        return "Wednesday"
      }
      else if(num === 5) {
        return "Thursday"
      }
      else if(num === 6) {
        return "Friday"
      }
      else if (num === 7) {
        return "Saturday"
      }
      else if(typeof num !== 'Number') {
        return "Wrong, please enter a number between 1 and 7"
      }
    
}