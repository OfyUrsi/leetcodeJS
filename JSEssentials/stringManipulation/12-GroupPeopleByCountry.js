const people = [
  { name: "Rafa", country: "Spain" },
  { name: "Ursi", country: "Spain" },
  { name: "Ofy", country: "Portugal" },
  { name: "Alex", country: "Spain" },
  { name: "Joana", country: "Portugal" },
];

const groupByCountry = (people) => {
  return people.reduce((acc, { country, name }) => {
    const arrName = acc.get(country) || [];
    arrName.push(name);
    acc.set(country, arrName);
    return acc;
  }, new Map());
};

console.log(groupByCountry(people));
