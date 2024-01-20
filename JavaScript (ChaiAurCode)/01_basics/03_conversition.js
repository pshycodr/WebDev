let score = "34"
console.log(typeof score);

let userScore = Number(score)
console.log(typeof userScore);
console.log(userScore);

// "34" => 33
// "34jdjd" => NaN , but it's type is number
// true => 1 / false => 0

let isloggedin = ""

let booleanisLoggedin = Boolean(isloggedin)

console.log(typeof booleanisLoggedin)
console.log(booleanisLoggedin)


// 1 => true / 0 => false
// "" => false / "anish" => true
// -1 => true


let someNumber = true

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);