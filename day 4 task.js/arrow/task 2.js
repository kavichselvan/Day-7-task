//Convert all the strings to title caps in a string array

const convertToTitleCaps = (arr) => {
  return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

const strings = ["hello", "world", "javascript", "programming"];
const titleCapsStrings = convertToTitleCaps(strings);
console.log(titleCapsStrings);
