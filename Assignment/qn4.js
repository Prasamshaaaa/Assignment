// Write a program to reverse a given string in place(eg: "Hello World" => "olleH dlroW").

function reverseString(inputString){
    let firstreversedString = '';
    let secondreversedString = ' ';

    for(let i = 4; i>=0; i--){

        firstreversedString += inputString[i];

    }

    for(let i = inputString.length -1; i > 4; i--){

        secondreversedString += inputString[i];

    }

return firstreversedString  + secondreversedString;

}

let originalString = "Hello World";
let reversedString = reverseString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);
