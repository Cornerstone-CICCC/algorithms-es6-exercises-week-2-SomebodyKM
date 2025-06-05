/*One classic method for composing secret messages is called a square code. In this activity, we will be creating our own Square Code algorithm.

Square Code
In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

    ifmanwas
    meanttos
    tayonthe
    groundgo
    dwouldha
    vegivenu
    sroots
The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right. For example, the message above is coded as:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message.

Instruction
Create a function named squareCode that will receive a message, and return the secret square code version of the message.
*/

const squareCode = function (message) {
  let letterArr = []
  const lineArrs = []
  const newMsgArr = message.split(" ").join("").split("")
  const numOfArr = Math.ceil(Math.sqrt(newMsgArr.length))
  const rowCount = Math.ceil(newMsgArr.length / numOfArr)

  newMsgArr.forEach((letter, index) => {

    letterArr.push(letter)
    if (letterArr.length === numOfArr) {
      lineArrs.push(letterArr)
      letterArr = []
    }
    if (index === newMsgArr.length - 1 && letterArr.length > 0) {
      lineArrs.push(letterArr);
    }
  })
  let newLineArrs = []
  for (let i = 0; i < lineArrs.length; i++) {
    for (let j = 0; j < lineArrs[i].length; j++) {
      if (!newLineArrs[j]) {
        newLineArrs[j] = []
      }
      newLineArrs[j][i] = lineArrs[i][j]
    };

  }

  const results = newLineArrs.map(line => {
    return line.join("")
  })

  return results.join(" ")
};

console.log(squareCode("chill out")); // clu hlt io
console.log(squareCode("feed the dog")); // fto ehg ee dd
console.log(squareCode("have a nice day")); // hae and via ecy
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
); // imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

module.exports = squareCode;
