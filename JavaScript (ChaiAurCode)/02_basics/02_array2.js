const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman", "Joker"]

// marvel_heros.push(dc_heros) // this will add another array inside an Array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // concat => this will add two or more array togather and return a new array
console.log(allHeros);

// (...) this is spread oprator
const all_new_heros = [...marvel_heros, ...dc_heros] // ... => this will spread every element in an array and combined them in a new array

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat => this will return all the elements from a nested array in one Array
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))  // Array.isArray("Hitesh") => this will check if this is array or not
console.log(Array.from("Hitesh")) // Array.from("Hitesh") => this will convert it into an Array
console.log(Array.from({name: "hitesh"})) // interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Array.of(score1, score2, score3)  => this will convert all the set of elements into an Array