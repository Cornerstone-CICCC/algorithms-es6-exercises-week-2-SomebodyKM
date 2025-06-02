/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  let splitText = input.split("")
  let newText = ""
  splitText.forEach((letter, index) => {
    const isFirst = index === 0

    if (isFirst) {
      return
    } else if (splitText[index] === " ") {
      splitText[index + 1] = splitText[index + 1].toUpperCase()
      splitText.splice(index, 1)
    }
  });
  return newText = splitText.join("")

};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
