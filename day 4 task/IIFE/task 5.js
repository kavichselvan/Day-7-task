//Return all the palindromes in an array


let strings = ["level", "hello", "madam", "world"];

let palindromeArray = (function(arr) {
    let isPalindrome = function(str) {
        return str === str.split("").reverse().join("");
    };

    return arr.filter(function(str) {
        return isPalindrome(str);
    });
})(strings);

console.log(palindromeArray);
