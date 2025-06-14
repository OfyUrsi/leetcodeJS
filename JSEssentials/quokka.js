const nums = [11, 30, 22, 9, 14];

console.log(nums.pop());
const sum = nums.reduce((acc, cur) => acc + cur); //?
const over = nums.filter((num) => num > 20);
