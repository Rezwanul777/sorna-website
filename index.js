//Create a function that takes voltage and current and returns the calculated power.  Ex- circuitPower(110, 3)

function circuitPower(voltage, current){
    let power = current*voltage
    return power
}

let calculatedPowerResult=circuitPower(110,3)
console.log(calculatedPowerResult);



//Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null

function findMaxNumber(numbers){
    if(numbers.length==0){
        return null
    }

    let maxNumbers=numbers[0]

    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>maxNumbers){
            maxNumbers=numbers[i]
        }
    }

    return maxNumbers

}

console.log(findMaxNumber([3, 19, 1, 5]));
console.log(findMaxNumber([]));

//3) Write a JavaScript function named ‘mergeArrays’ that takes two arrays as arguments and returns a new array.

function mergeArrays(arr1, arr2){
    let mergedArray=arr1.concat(arr2)
    return mergedArray
}

let arr1=[5,6,7,8]
let arr2=[3,2,1,0]

let mergeArraysResult=mergeArrays(arr1,arr2)

console.log(mergeArraysResult);


//Create a function ‘arrayValuesTypes’ that takes an array and returns the types of values (data types) in a new array. Ex- arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]

function arrayValuesTypes(arr) {
   let result = [];

    for (var i = 0; i < arr.length; i++) {
        result.push(typeof arr[i]);
    }

    return result;
}


console.log(arrayValuesTypes([1, 2, "null", []]));