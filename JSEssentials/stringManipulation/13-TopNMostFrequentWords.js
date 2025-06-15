const letters = ["a", "b", "a", "c", "b", "a", "d", "c", "b", "c", "e"];
const N = 2;

function topNWords(letters, N) {
  const lettersMap = letters.reduce((acc, letter) => {
    const countLetter = (acc.get(letter) || 0) + 1;
    acc.set(letter, countLetter);
    return acc;
  }, new Map());

  return [...lettersMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, N);
}

console.log(topNWords(letters, N));
