const s = `She always said she always would come, but she didn't. I always waited and waited, thinking she might call. 
  But she never did. She always does this, and I always fall for it. 
  She always said it again and again. I always believe what she always says, always. She said she never lies, 
  but she always lies. She always repeats herself. Always.`;

function mostRepatedWord(s) {
  let paragrapsh = s
    .replace(/[^\w\s]/g, "")
    .toLowerCase()
    .split(/\s+/);
  let objRepeatedWords = paragrapsh.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {});

  // let maxWord = "";
  // let maxSize = 0;
  // for (let word in objRepeatedWords) {
  //   if (objRepeatedWords[word] > maxSize) {
  //     maxSize = objRepeatedWords[word];
  //     maxWord = word;
  //   }
  // }

  let mostRepeated = [];
  let max = Math.max(...Object.values(objRepeatedWords));
  for (let word in objRepeatedWords) {
    if (objRepeatedWords[word] === max) mostRepeated.push(word);
  }

  return `The word(s) '${mostRepeated}' repeats ${max} times`;
}

console.log(mostRepatedWord(s));

//Same with mostRepatedWord
// function mostRepeatedWord(s) {
//   const words = s
//     .replace(/[^\w\s]/g, "")
//     .toLowerCase()
//     .split(/\s+/);

//   const countMap = new Map();

//   for (let word of words) {
//     countMap.set(word, (countMap.get(word) || 0) + 1);
//   }

//   let maxCount = 0;
//   let mostRepeated = [];

//   for (let [word, count] of countMap.entries()) {
//     if (count > maxCount) {
//       maxCount = count;
//       mostRepeated = [word];
//     } else if (count === maxCount) {
//       mostRepeated.push(word);
//     }
//   }

//   return `The most repeated word(s): ${mostRepeated.join(
//     ", "
//   )} (${maxCount} times)`;
// }
