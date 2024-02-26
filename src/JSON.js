function paginateArray(array, pageSize, pageNumber) {
  // Calculate the starting index of the current page

  const startIndex = (pageNumber - 1) * pageSize;

  // Create a chunk of the array based on the page size

  const chunkedArray = array.slice(startIndex, startIndex + pageSize);

  return chunkedArray;
}

// Example usage

const data = [
  "Racoon 1",
  "Racoon 2",
  "Racoon 3",
  "Racoon 4",
  "Racoon 5",

  "Racoon 6",
  "Racoon 7",
  "Racoon 8",
  "Racoon 9",
  "Racoon 10",
];

const pageSize = 3; // Number of items per page

const pageNumber = 2; // Current page number

const result = paginateArray(data, pageSize, pageNumber);

console.log(result);

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((accum, item) => {
    const key = fn(item);
    accum[key] ||= [];
    accum[key].push(item);
    return accum;
  }, {});
};

let products = [
  {name: "Apple", price: 1},
  {name: "Banana", price: 0.5},
  {name: "Cherry", price: 2},
];

products.sort((a, b) => a.name.localeCompare(b.name));
console.log(products); // [{ name: 'Apple', price: 1 }, { name: 'Banana', price: 0.5 }, { name: 'Cherry', price: 2 }]

let tasks = [
  {title: "Task 1", priority: "Low"},
  {title: "Task 2", priority: "High"},
  {title: "Task 3", priority: "Medium"},
];

let priorityOrder = {Low: 1, Medium: 2, High: 3};

tasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
console.log(tasks); // [{ title: 'Task 1', priority: 'Low' }, { title: 'Task 3', priority: 'Medium' }, { title: 'Task 2', priority: 'High' }]
