//  Given a string, write a function to count the occurrences of each character in the string.

function countCharacterOccurrences(inputString) {

let charCount = {};

for(let char of inputString){ //starts a loop that iterates over each character in inputString  //
charCount[char] = (charCount[char] || 0) + 1;
}
return charCount;
}

let input = "Prasamsha Dotel";
let result = countCharacterOccurrences(input);

console.log(" Given String = ", input);
console.log("Character Occurrences = ", result);




