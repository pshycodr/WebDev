/*
Given an array of integers A, find and return the minimum elements to be removed such that In the resulting array the sum of any two adjacent values in even.
*/


function minElementsToRemoveForEvenSumAdjacent(arr){
    let oddNums = 0, evenNums = 0;
    for (const num of arr) {
        if(num%2 === 0) evenNums ++;
    }
    oddNums = arr.length - evenNums

    return Math.min(oddNums, evenNums)
}


const array = [1, 2, 3, 4, 5, 5, 6, 4, 3, 3, 2, 2]
console.log(minElementsToRemoveForEvenSumAdjacent(array));