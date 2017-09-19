// Write a function, shortenToDate, that takes the Website date/time in its original string
// format, and returns the shortened format. Assume shortenToDate's input will always be
// a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the 
// shortened string, e.g., "Friday May 2".

var longDate = "Friday May 2, 7pm";

function shortenToDate(longDate) {
    return longDate.split(",")[0];
  }

console.log(shortenToDate(longDate));