/// Apply Transform Over Each Element in Array

function randomArray(len) {
  return Array(len)
    .fill(0)
    .map(() => Math.floor(Math.random() * 2e9) - 1e9);
}

const array = randomArray(10e6);

function checkPerformance(fn, array, callback) {
  const startTime = performance.now();
  // Place your function
  fn(array, callback);
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  return "Execution Time: " + executionTime.toFixed(2) + " ms";
}

/// Approach 1
function main1() {
  function map(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; ++i) {
      newArray.push(callback(array[i], i));
    }
    return newArray;
  }
  const result = checkPerformance(map, array, (x) => x + 1);
  return result;
}

/// Approach 2
function main2() {
  function map(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; ++i) {
      newArray[i] = callback(array[i], i);
    }
    return newArray;
  }

  const result = checkPerformance(map, array, (x) => x + 1);
  return result;
}

/// Approach 3
function main3() {
  function map(array, callback) {
    const n = array.length;
    const newArray = new Array(n);
    for (let i = 0; i < array.length; ++i) {
      newArray[i] = callback(array[i], i);
    }
    return newArray;
  }

  const result = checkPerformance(map, array, (x) => x + 1);
  return result;
}

/// Approach 4
function main4() {
  function map(array, callback) {
    const n = array.length;
    const newArray = new Int32Array(n);
    for (let i = 0; i < array.length; ++i) {
      newArray[i] = callback(array[i], i);
    }
    return newArray;
  }

  const result = checkPerformance(map, array, (x) => x + 1);
  return result;
}

console.log("Push Values Into the Initially Empty Array. " + main1());
console.log("Write Values Into the Initially Empty Array. " + main2());
console.log("Write Values Into the Preallocated Array. " + main3());
console.log("Write Values Into the Preallocated Typed Array. " + main4());
