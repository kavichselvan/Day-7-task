//Sum of all numbers in an array


let numbers = [1, 2, 3, 4, 5];

let calculateSum = function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
};

let sum = calculateSum(numbers);
console.log(sum);
