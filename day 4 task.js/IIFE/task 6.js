//Return median of two sorted arrays of the same size.

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort(function(a, b) {
        return a - b;
    });
    let length = mergedArray.length;
    let middle = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    } else {
        return mergedArray[middle];
    }
})(arr1, arr2);

console.log(median);
