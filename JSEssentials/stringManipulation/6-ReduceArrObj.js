// 💡 Reduce an array of objects into total age
const users = [
  { name: "Rafa", age: 30 },
  { name: "Ofy", age: 5 },
  { name: "Ursi", age: 5 },
];

const totalAge = users.reduce((acc, current) => acc + current.age, 0);
console.log(totalAge);
