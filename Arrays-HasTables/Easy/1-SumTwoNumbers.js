let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const result = target - nums[i];

    if (map.has(result)) {
      return [map.get(result), i];
    }
    map.set(nums[i], i);
  }
}
