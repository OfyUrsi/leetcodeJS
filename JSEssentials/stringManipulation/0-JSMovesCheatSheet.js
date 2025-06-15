// 🚀 JavaScript Moves Cheat Sheet (ES2023+)

// ✅ 1. Count Frequencies (Array -> Object)
const count = (arr) =>
  arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

// ✅ 2. Count Frequencies (Array -> Map)
const countMap = (arr) =>
  arr.reduce((acc, item) => {
    acc.set(item, (acc.get(item) || 0) + 1);
    return acc;
  }, new Map());

// ✅ 3. Group By Key (Object version)
const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = item[key];
    acc[k] ??= [];
    acc[k].push(item);
    return acc;
  }, {});

// ✅ 4. Group By Key (Map version)
const groupByMap = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = item[key];
    const group = acc.get(k) || [];
    group.push(item);
    acc.set(k, group);
    return acc;
  }, new Map());

// ✅ 5. Get Top N Most Frequent
const topN = (arr, N) => {
  const freq = countMap(arr);
  return [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, N);
};

// ✅ 6. Remove Duplicates from Array
const unique = (arr) => [...new Set(arr)];

// ✅ 7. Flatten Array One Level
const flattenOne = (arr) => arr.reduce((acc, item) => acc.concat(item), []);

// ✅ 8. Clone Object / Array
const cloneObj = (obj) => ({ ...obj });
const cloneArr = (arr) => [...arr];

// ✅ 9. Convert Map to Object
const mapToObject = (map) => Object.fromEntries(map);

// ✅ 10. Convert Object to Map
const objectToMap = (obj) => new Map(Object.entries(obj));

// ✅ 11. Sort Array of [key, value] by value descending
const sortByValueDesc = (arr) => [...arr].sort((a, b) => b[1] - a[1]);

// ✅ 12. Safe Get with Optional Chaining
const city = user?.address?.city ?? "Unknown";

// ✅ 13. Filter Falsy Values
const clean = (arr) => arr.filter(Boolean);

// ✅ 14. Async Wait for All
const results = await Promise.all(promises);

// ✅ 15. Debounce (Simple)
const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};
