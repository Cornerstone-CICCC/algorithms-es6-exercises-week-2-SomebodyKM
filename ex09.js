/*
In this exercise, we will be converting a normal string into Case text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into  cased strings.

Instruction
Create a function named Case that will convert a string to  case, and return the result.
*/

const Case = function (input) {
  let wordList = input.split(" ")
  let newText = ""
  wordList.forEach((word, index) => {
    const isFirst = index === 0

    if (isFirst) {
      newText += word
    } else {
      const [first, ...rest] = word
      newText += first.toUpperCase() + rest.join("")
    }
  });
  return newText

};

console.log(Case("this is a string")); // thisIsAString
console.log(Case("loopy cornerstone")); //loopyCornerstone
console.log(Case("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = Case;
