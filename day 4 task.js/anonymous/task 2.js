//Convert all the strings to title caps in a string array:

let strings = ["hello", "world", "javascript"];

let convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
};

let titleCapsArray = convertToTitleCaps(strings);
console.log(titleCapsArray);
