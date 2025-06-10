let x = 121;

function isPalindrome() {
  let xReversed = x.toString().split("").reverse().join("");
  console.log(xReversed);
  return x.toString() === xReversed;
}

console.log(isPalindrome(x));
