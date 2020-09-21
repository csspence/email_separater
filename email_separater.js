//Takes a string and adds commas whenever there is a space.

let emails = (string) => {
  let newStr = '';
  for(let i = 0; i < string.length; i++) {
    if(string[i] === ' ') {
      newStr += ', ';
    } else {
      newStr += string[i];
    }
  }

  return newStr;
}