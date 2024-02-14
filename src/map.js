/// A Map object is a simple key/value map and can iterate its elements in insertion order.
const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
console.log(sayings);

// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

sayings.set(this, "Hi");
console.log(sayings.get(this));
