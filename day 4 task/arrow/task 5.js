// Return all the palindromes in an array


const isPalindrome = (str) => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

const getPalindromes = (arr) => arr.filter(str => isPalindrome(str));

const words = ["level", "hello", "radar", "world"];
const palindromes = getPalindromes(words);
console.log(palindromes);
