function longestSubstring(s) {
  let result = new Set();
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (result.has(s[right]) && vowels.has(s[right])) {
      result.delete(s[left]);
      left++;
    }
    result.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(longestSubstring("eaeiouxxaeiou"));
