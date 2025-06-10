let strs = ["flower", "flow", "flight"];
let longest = [
  {
    prefix: "",
  },
];
let temp = "";
let count = function longestCommonPrefix(strs) {
  for (let i = 0; i < strs.length; i++) {
    temp = strs[i].slice(0, 2);
    for (let j = i + 1; j < strs.length; j++) {
      if (i !== j) {
        if (temp === strs[j].slice(0, 2)) count++;
      }
    }
  }
};

longestCommonPrefix(strs);
