const myObj = {
  key: "value",
};

console.log(myObj["unexistingKeys"] ? "exists" : "does not exist");

const obj = {
  a: 1,
  b() {},
};
console.log(obj);
