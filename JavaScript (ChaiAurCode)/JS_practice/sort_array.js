// Sorting Array unsing Bubble sort

const arr = []

for(let i = 0; i<=20; i++){
    arr.push(Math.floor(Math.random()*1000+1))
}

console.log(`Unsorted array : \n ${arr}`);

for(let i=0; i<=arr.length; i++){
    for(let j=0; j<= (arr.length)-i-1; j++){
        if(arr[j] > arr[j+1]){
           [ arr[j], arr[j+1] ]= [ arr[j+1], arr[j] ]
        }
    }
}

console.log(`Sorted array : \n ${arr}`);