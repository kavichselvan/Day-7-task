//for

const jsonData = {
  "name": "John Doe",
  "age": 30,
  "city": "New York"
};

for (const key in jsonData) {
  console.log(`${key}: ${jsonData[key]}`);
}
