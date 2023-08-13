//Remove duplicates from an array

let numbers = [1, 2, 2, 3, 4, 4, 5];

let removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
};

let uniqueArray = removeDuplicates(numbers);
console.log(uniqueArray);
