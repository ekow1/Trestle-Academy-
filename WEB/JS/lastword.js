// Q2. Given a string ‘s’ consisting of words and spaces, return the length of the last word in the string.


const lengthOfLastWord = (s) => {
  const words = s.trim().split(' ');
  const lastWord = words[words.length - 1];
  console.log(lastWord);
  return lastWord.length;
};

// Example usage:
const inputString = "Hello, World";
const lastWordLength = lengthOfLastWord(inputString);
console.log(lastWordLength); // Output: 5
 