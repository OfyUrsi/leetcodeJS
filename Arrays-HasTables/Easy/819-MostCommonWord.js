function mostCommonWord(paragraph, banned) {
  let counts = new Map();
  let bannedSet = new Set(banned);
  let maxWord = "",
    maxCount = 0;

  for (let word of paragraph
    .replace(/[^\w]/g, " ")
    .toLowerCase()
    .split(/\s+/)) {
    if (!bannedSet.has(word) && word) {
      let freq = (counts.get(word) || 0) + 1;
      counts.set(word, freq);
      if (freq > maxCount) {
        maxCount = freq;
        maxWord = word;
      }
    }
  }
  console.log(counts);
  return maxWord;
}

let paragraph = "Bob. hIt, baLl";
let banned = ["bob", "hit"];
console.log(mostCommonWord(paragraph, banned));
