module.exports = function check(str, bracketsConfig) {
  let bracketsCollection = {};
  bracketsConfig.forEach(element => {
    bracketsCollection[element[0]] = element[1];
  });

  let givenBrackets = str.split('');

  let arrayOfBrackets = [];
  //let bracketToCompare;
  for (let i = 0; i < givenBrackets.length; i++) {
    let bracketToCompare = arrayOfBrackets[arrayOfBrackets.length - 1];
    if (bracketsCollection[bracketToCompare] == givenBrackets[i]) {
      arrayOfBrackets.pop();
    } else {
      arrayOfBrackets.push(givenBrackets[i]);
    };
  };

  if (arrayOfBrackets.length === 0) {
    return true;
  } else {
    return false;
  };
};
