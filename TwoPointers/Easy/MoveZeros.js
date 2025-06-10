let nums = [0, 0, 0];

function moveZeros(nums) {
  let lastNonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== lastNonZeroIndex) {
        [nums[i], nums[lastNonZeroIndex]] = [nums[lastNonZeroIndex], nums[i]];
      }
      lastNonZeroIndex++;
    }
  }
}

moveZeros(nums);
console.log(nums);
