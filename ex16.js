/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel , consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {

  const changeCase = (cases, inputStr) => {
    const words = inputStr.split(" ")
    const letterList = inputStr.split("")
    let result = ""

    switch (cases) {
      case "camel":
        result = words.map((word, index) => {
          const isFirst = index === 0

          if (isFirst) {
            return word
          } else {
            const [first, ...rest] = word
            return first.toUpperCase() + rest.join("")
          }
        }).join("")
        break

      case "pascal":
        result = words.map(word => {
          const [first, ...rest] = word
          return first.toUpperCase() + rest.join("")
        }).join("")
        break

      case "snake":
        result = words.join("_")
        break

      case "kebab":
        result = words.join("-")
        break

      case "title":
        result = words.map(word => {
          const [first, ...rest] = word
          return first.toUpperCase() + rest.join("")
        }).join(" ")
        break

      case "vowel":
        result = letterList.map(letter => {
          if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            return letter.toUpperCase()
          } else {
            return letter
          }
        }).join("")
        break

      case "consonant":
        result = letterList.map(letter => {
          if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            return letter
          } else {
            return letter.toUpperCase()
          }
        }).join("")
        break

      case "upper":
        result = letterList.map(letter => {
          return letter.toUpperCase()
        }).join("")
        break

      case "lower":
        result = letterList.map(letter => {
          return letter.toLowerCase()
        }).join("")
        break
    }
    return result
  }

  if (Array.isArray(caze)) {
    let initialWords = input
    caze.forEach(eachCase => {

      if (!Array.isArray(initialWords)) {

        initialWords = changeCase(eachCase, initialWords)
      }
    });
    result = initialWords

  } else {
    result = changeCase(caze, input)
  }
  return result
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
