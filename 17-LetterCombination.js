function letterCombinations(digits) {
  if (!digits) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  return digits.split("").reduce(
    (acc, digit) => {
      let letters = map[digit];
      let result = [];
      for (let a of acc) {
        for (let b of letters) {
          result.push(a + b);
        }
      }
      return result;
    },
    [""]
  );
}
