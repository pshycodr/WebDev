// Array.prototype.CustomForEach = function(callBack) {
//     for (let i = 0; i < this.length; i++) {
//         callBack(this[i], i, this);
//     }
// }

// let arr = [2, 23, 45, 6, 4, 3, 24, 5];

// arr.CustomForEach(function(element) {
//     console.log(`Element at index is ${element}`);
// });



/* Make a custom ForEach */


// Array.prototype.ForEvery = function(callback, CurrentContext) {
//     if(typeof callback !== 'function'){
//         throw `${callback} is not a function`
//     }

//     let length = this.length;

//     let i = 0;

//     while(i<length){
//         if(this.hasOwnProperty(i)){
//             callback.call(CurrentContext, this[i], i, this)
//         }
//         i++
//     }
// }


// const myArray = [1,2,3,4,5,4,3,4,8]

// myArray.ForEvery((item) => {
//     console.log(item)
// })



