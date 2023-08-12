//Rotate an array by k times

let numbers = [1, 2, 3, 4, 5];
let k = 2;

let rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
};

let rotatedArray = rotateArray(numbers, k);
console.log(rotatedArray);
