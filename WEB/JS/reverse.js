


// Q1 . Create a function that takes in a string as an argument and returns its reversed form.

// old ES5 and below


function reverse_string(words) {
  return words.split('').reverse().join('');
}


let name = 'Kelvin Awuku Boateng'

const input_string = name;
const data = reverse_string(input_string);
console.log(data); 








// Es6 syntax
let description = 'lorem ipsum format';
const stringReversed = (string) => [...string].reverse().join('');
const input= description;
const reversedString = stringReversed(input);
console.log(reversedString)