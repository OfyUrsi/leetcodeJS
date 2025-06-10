let s = "aaaabbdtt";
let longest = "";
let left = 0;
let right = 0;

function longestPalindrome(s) {
  function getPal(left, right) {
    while ((left >= 0, right < s.length && s[left] === s[right])) {
      left--;
      right++;
    }
    let pal = s.slice(left + 1, right);
    if (pal.length > longest.length) {
      longest = pal;
    }
  }

  for (let i = 0; i < s.length; i++) {
    getPal(i, i); //odd positions
    getPal(i, i + 1); //even positions
  }
}
