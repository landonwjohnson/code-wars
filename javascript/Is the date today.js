// This is a simple function that should take in a date object and return a boolean representing weather the date is today or not.
function isToday(date) {
    return new Date().toDateString() === date.toDateString();
}

