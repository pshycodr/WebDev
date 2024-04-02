

function reverseArray(arr){
    
    // const newArray = []
    // for (let i = (arr.length -1 ); i >= 0 ; i--) {
    //     newArray.push(arr[i])
    // }
    // return newArray  

    let leftIndex = 0;
    let rightIndex = arr.length-1

    while(leftIndex < rightIndex){
        let temp = arr[leftIndex]
        arr[leftIndex] = arr[rightIndex]
        arr[rightIndex] = temp

        leftIndex ++;
        rightIndex --;
    }
    return arr;
}

const arr = [1,2,3,4,5,6,7,8,9]
console.log(reverseArray(arr));

console.log(arr);
