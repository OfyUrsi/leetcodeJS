function sanitize(str) {
  return str
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

console.log(sanitize("  Hello! How's it going?  "));
