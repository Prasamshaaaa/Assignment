// Write a program to reverse a given string without using inbuilt methods (eg: "Hello World" => "dlroW olleH").

function reverseString(inputString) {
    let reversedString = '';

    //Loop through the input string in reverse order
    for(let i = inputString.length-1; i>=0; i-- ){

        reversedString += inputString[i]; 

    }

 return reversedString;

}

let originalString = "Hello World";
let result = reverseString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", result);