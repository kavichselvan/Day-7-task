//Return all the palindromes in an array

let strings = ["level", "hello", "madam", "world"];

let isPalindrome = function(str) {
    return str === str.split("").reverse().join("");
};

let palindromeArray = strings.filter(function(str) {
    return isPalindrome(str);
});

console.log(palindromeArray);
