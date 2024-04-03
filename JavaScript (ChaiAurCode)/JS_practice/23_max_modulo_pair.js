/*
Given an array A of size N, Groot wants you to pick 2 indices i and j such that
    1. 1<=i, j<=N
    2. A[i]%A[j] is maximum among all possible pairs of (i,j) .
help groot in finding the maximum value of A[i]%A[j] for some i, j.
 */


function findMaxRemainder(arr){
    const len = arr.length
    let maxRemainder = 0;

    for (let i = 0; i <len; i++) {
        
        for (let j = 0; j < len; j++) {

            let remainder = arr[i] % arr[j]
            if(remainder > maxRemainder) maxRemainder = remainder
        }
        
    }

    return maxRemainder;
}

const Array = [5, 12, 8, 35, 20, 7, 42, 19, 3, 28]
console.log(findMaxRemainder(Array));