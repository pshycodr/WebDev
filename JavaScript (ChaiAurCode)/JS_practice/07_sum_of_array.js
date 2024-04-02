// Write a function to find the sum of all elements in an array.

function sumOfArray(array){
    let sum = 0;
    array.forEach(element => {
        if(typeof element === "number"){
            sum += element;
        }
    });
    return sum;
}


const array = [5, 12, 8, 35, 20, 7, 42, 19, 3, 28];
console.log(sumOfArray(array));
