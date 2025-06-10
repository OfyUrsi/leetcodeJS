let target = 4;
let nums = [1, 4, 4];

function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    // shrink window from left while valid
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
//ALGORITHMS and data structures in big O
console.log(minSubArrayLen(target, nums));

// function minSubArrayLen(target, nums) {
//   let sum = 0;
//   let len = 0;

//   if (nums.length > 1) {
//     for (let left = 0; left < nums.length; left++) {
//       let right = left + 1;
//       sum = nums[left];
//       if (sum === target) {
//         len = 1;
//         continue;
//       }
//       while (sum <= target && right < nums.length) {
//         sum += nums[right];
//         if (sum > target) break;
//         if (sum === target) {
//           len =
//             nums.slice(left, right).length > len
//               ? nums.slice(left, right).length
//               : len;
//         }
//         right++;
//       }
//       sum = 0;
//     }
//   } else {
//     len = nums[0] === target ? nums.length : 0;
//   }
//   return len;
// }

// console.log(minSubArrayLen(target, nums));
