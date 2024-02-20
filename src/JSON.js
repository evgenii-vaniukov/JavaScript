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
