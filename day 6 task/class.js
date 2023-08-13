class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greet() {
    let pronoun = "they";
    if (this.gender === "male") {
      pronoun = "he";
    } else if (this.gender === "female") {
      pronoun = "she";
    }

    return `Hello, my name is ${this.getFullName()} and ${pronoun} is ${this.age} years old.`;
  }
}

// Creating instances of the Person class
const person1 = new Person("John", "Doe", 30, "male");
const person2 = new Person("Jane", "Smith", 25, "female");

console.log(person1.greet()); // Output: Hello, my name is John Doe and he is 30 years old.
console.log(person2.greet()); // Output: Hello, my name is Jane Smith and she is 25 years old.
