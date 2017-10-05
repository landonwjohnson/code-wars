// Your task is to create userlinks for the url, you will be given a username and must return a valid link.
// Example generate_link('matt c') http://www.codewars.com/users/matt%20c


function generateLink(user) {
    return `http://www.codewars.com/users/${encodeURIComponent(user)}`
}

console.log(generateLink('matt c'))


//Other
function generateLink2(user) {
    var baseURL = "http://www.codewars.com/users/"
    var convertSpace = user.replace(/\s/g, '%20');
    var user = convertSpace;
    var makeLink = baseURL + user;
    return makeLink;
  }

  console.log(generateLink2('matt c'))