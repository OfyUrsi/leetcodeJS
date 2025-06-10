const roman = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

function intToToman(num) {
  let result = [];
  while (num > 0) {
    if (num >= 1000) {
      num = num - 1000;
      result.push("M");
    } else if (num >= 900) {
      num = num - 900;
      result.push("CM");
    } else if (num >= 500) {
      num = num - 500;
      result.push("D");
    } else if (num >= 400) {
      num = num - 400;
      result.push("CD");
    } else if (num >= 100) {
      num = num - 100;
      result.push("C");
    } else if (num >= 90) {
      num = num - 90;
      result.push("XC");
    } else if (num >= 50) {
      num = num - 50;
      result.push("L");
    } else if (num >= 40) {
      num = num - 40;
      result.push("XL");
    } else if (num >= 10) {
      num = num - 10;
      result.push("X");
    } else if (num >= 9) {
      num = num - 9;
      result.push("IX");
    } else if (num >= 5) {
      num = num - 5;
      result.push("V");
    } else if (num >= 4) {
      num = num - 4;
      result.push("IV");
    } else if (num >= 1) {
      num = num - 1;
      result.push("I");
    }
  }
  return result.join("");
}

console.log(intToToman(58));

// const intToRoman = (num) => {
//   const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   const symbols = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I",
//   ];

//   let result = "";
//   for (let i = 0; i < values.length; i++) {
//     while (num >= values[i]) {
//       num -= values[i];
//       result += symbols[i];
//     }
//   }
//   return result;
// };
