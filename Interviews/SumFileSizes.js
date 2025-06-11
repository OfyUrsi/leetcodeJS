function sumFilesSize(files) {
  let total = 0;
  for (let file in files) {
    const value = files[file];
    if (
      typeof value === "object" &&
      value !== null &&
      value !== Array.isArray(value)
    ) {
      total += sumFilesSize(value);
    } else if (typeof value === "number") {
      total += value;
    }
  }
  return total;
}

let files = {
  "file1.txt": 100,
  "folderA": {
    "file2.txt": 200,
    "folderB": {
      "file3.txt": 300,
    },
  },
};

console.log(sumFilesSize(files));
