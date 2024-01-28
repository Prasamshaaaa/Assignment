// Q.N.1. You are given with an array of n integers, Find the sum of those integer numbers.


let numbers = [1, 2, 3, 4, 5] // a variable named 'numbers' is declared and array of integers is assigned to it

// function to find the sum of integers in an array
function findSumofIntegers(arr){ 
    let sum = 0; 

//looping through the array to add each element to the sum
for(let i = 0; i < arr.length; i++ ){
    sum+= arr[i];
}

return sum;
}
 
// call the function with the array
let result = findSumofIntegers(numbers);

//Displaying the result
console.log("Sum of integers:",result);