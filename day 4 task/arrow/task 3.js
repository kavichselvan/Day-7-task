//Sum of all numbers in an array

const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum);
