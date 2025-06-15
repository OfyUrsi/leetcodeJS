const words = ["cat", "dog", "cat", "ursi", "ofy", "cat", "dog"];
const wordFrequency = (words) => {
  return words.reduce((acc, word) => {
    const totalWord = (acc.get(word) || 0) + 1;
    acc.set(word, totalWord);
    return acc;
  }, new Map());
};

console.log(wordFrequency(words));
