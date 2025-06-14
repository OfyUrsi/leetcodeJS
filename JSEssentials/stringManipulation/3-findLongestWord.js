function longestWord(str) {
  return str
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}

console.log(longestWord("Find the longest word here"));
