//Remove duplicates from an array

let numbers = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})(numbers);

console.log(uniqueArray);
