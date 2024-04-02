
const arr = []

for(let i = 0; i<=20; i++){
    arr.push(Math.floor(Math.random()*1000+1))
}

console.log(arr);

// Max num
let MAX_num = arr[0]
arr.forEach((item) => {
    if(MAX_num < item){ // '>' this for min num
        MAX_num = item
    }
});

console.log(MAX_num);

