//for Each


const jsonData = {
  "name": "John Doe",
  "age": 30,
  "city": "New York"
};

Object.values(jsonData).forEach(value => {
  console.log(value);
});
