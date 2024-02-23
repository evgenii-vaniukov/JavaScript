function greet() {
  console.log(this.name);
}

const person1 = {
  name: "Evgenii",
};

const person2 = {
  name: "Vita",
};

greet.apply(person1);
