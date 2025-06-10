const phone = new Map();
phone.set("2", "abc");
phone.set("3", "def");
phone.set("4", "ghi");
phone.set("5", "jkl");
phone.set("6", "mno");
phone.set("7", "pqrs");
phone.set("8", "tuv");
phone.set("9", "wxyz");

function letterCombinations(digits) {
  if (digits === "") return "";
  let result = [];
  for (let i = 0; i < digits.length; i++) {
    let str = phone.get(digits[i]);
    for (let j = 0; j < str.length; j++) {
      result.push(str[i] + )
    }
  }
}

letterCombinations("56");