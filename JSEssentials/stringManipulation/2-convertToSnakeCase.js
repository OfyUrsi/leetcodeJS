function toSnakeCase(str) {
  let strCase = "";
  strCase = str.toLowerCase().split(" ").join("_");
  return strCase;
}

toSnakeCase("Hello World");
