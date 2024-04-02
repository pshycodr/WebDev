// Write a program to check if a given number is a palindrome.


// function palindromeCheck(value){
//     if(typeof value === "number"){
//         value = String(value)
//     }
//     const len = value.length
//     let reverseValue = "";

//     for (let i = len ; i > 0; i--) {
//         reverseValue += value[i - 1]
//     }
//     if(value === reverseValue){
//         return true
//     }else{
//         return false
//     }

// }

function palindromeCheck(value) {
    value = String(value);
    return value === value.split("").reverse().join("");
}

const num = 12321
console.log(palindromeCheck(num));
