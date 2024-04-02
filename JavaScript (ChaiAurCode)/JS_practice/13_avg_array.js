// Implement a function to calculate the average of elements in an array.

function avgArray(arr){
    const len = arr.length
    let sum = 0;
    arr.forEach(element => {
        if(typeof element === "number"){
            sum += element;
        }
    });
    return sum/len;
}


const arr = [1,2,3,4,5,6]
console.log(avgArray(arr));
