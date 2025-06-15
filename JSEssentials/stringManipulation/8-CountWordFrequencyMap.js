function countWordFrequency(words) {
  const countWords = new Map();

  words.forEach((word) => {
    countWords.set(word, (countWords.get(word) || 0) + 1);
  });
  return countWords;
}
const words = ["cat", "dog", "cat", "ursi", "dog", "ofy", "cat"];
console.log(countWordFrequency(words));
