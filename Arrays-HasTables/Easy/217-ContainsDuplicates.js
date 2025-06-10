let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
function containsDuplicate(nums) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
}
