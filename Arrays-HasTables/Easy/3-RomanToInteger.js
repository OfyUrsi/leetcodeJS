let roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInteger(s) {
  let res = 0;
  let ignoreNext = false;

  for (let i = 0; i < s.length; i++) {
    if (!ignoreNext) {
      if (
        (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) ||
        (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) ||
        (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M"))
      ) {
        res += roman[s[i + 1]] - roman[s[i]];
        ignoreNext = true;
      } else {
        res += roman[s[i]];
        ignoreNext = false;
      }
    } else {
      ignoreNext = false;
    }
  }
  return res;
}

romanToInteger("MCMXCIV");

//Improved version

// function romanToInteger(s) {
//   let total = 0;

//   for (let i = 0; i < s.length; i++) {
//     const current = roman[s[i]];
//     const next = roman[s[i + 1]];

//     if (next > current) {
//       total += next - current;
//       i++; // skip next
//     } else {
//       total += current;
//     }
//   }

//   return total;
// }

// function twoNumbers(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoNumbers([2, 5, 5, 11], 10));
