// Write a function that takes an array of integers as input and returns a new array with only the unique elements.

function getUniqueElements(inputArray) {

    let uniqueArray = [];

    for (let i = 0; i < inputArray.length; i++) {

        if (!uniqueArray.includes(inputArray[i])) {  // include method to check if the current element is not already in uniqueArray
            uniqueArray.push(inputArray[i]); //adding current element to a unique array//
        }
    }

    return uniqueArray;
}

let input = [1, 2, 3, 4, 2, 3, 5];
let result = getUniqueElements(input);

console.log("Input Array:", input);
console.log("Unique Elements:", result);
