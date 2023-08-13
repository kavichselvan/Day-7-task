//for of

const jsonData = {
  "name": "John Doe",
  "age": 30,
  "city": "New York"
};

for (const value of Object.values(jsonData)) {
  console.log(value);
}
