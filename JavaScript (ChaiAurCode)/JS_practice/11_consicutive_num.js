function MissingNum(arr){
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i-1];
        if(arr[i] !== num + 1){
            return `${num + 1} is missing`;
        }
    }
    return `Nothing is missing`;
}

const arr = [1, 2, 3, 4,5,6, 7, 8];
console.log(MissingNum(arr));
