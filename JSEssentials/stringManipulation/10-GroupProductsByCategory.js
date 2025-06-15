function groupObjects(products) {
  const prodCat = new Map();

  products.forEach((product) => {
    const category = prodCat.get(product.category) || []; // [ 'iPhone', 'MacBook' ] || []
    category.push(product.name); // [ 'iPhone', 'MacBook' ]
    prodCat.set(product.category, category); //'tech' => [ 'iPhone', 'MacBook' ]
  });
  return prodCat;
}

function groupBy(products) {
  const result = Object.groupBy(products, ({ category }) => category);
  console.log(result);
}

function groupByReduce(products) {
  return products.reduce((acc, { category, name }) => {
    const group = acc.get(category) ?? [];
    group.push(name);
    acc.set(category, group);
    return acc;
  }, new Map());
}

const products = [
  { name: "iPhone", category: "tech" },
  { name: "MacBook", category: "tech" },
  { name: "T-shirt", category: "clothing" },
  { name: "Shoes", category: "clothing" },
  { name: "Fridge", category: "appliances" },
];

console.log(groupObjects(products));
groupBy(products);
console.log(groupByReduce(products));
