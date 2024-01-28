//  You are given with an array of n integers, Find the maximum and minimum element from that array.

let numbers = [5, 2, 9, 0, 10, 3]; 

function findMaxAndMin(arr){
    if(arr.length === 0){

        return "Array is empty!";
    
    }

let max = arr[0]; //Assuming that the first element is maximum
let min = arr[0];//....................................minimum

//looping through array to find max and min
for(i = 1; i < arr.length; i++){
    if(arr[i]> max){
        max = arr[i]; //update max if aar[i]> max otherwise max value remain as it is
    }

    if(arr[i] < min){
        min = arr[i];
    }
}

return { max, min};

}

let result = findMaxAndMin(numbers);

console.log("Maximum element:", result.max);
console.log("Minimum element:", result.min);

