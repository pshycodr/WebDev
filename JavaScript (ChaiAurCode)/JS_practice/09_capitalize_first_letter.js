// Write a function to capitalize the first letter of each word in a sentence.


function capFirstLetter(str){
    let words = str.split(" ")
    words.forEach((word, index, array) => {
        array[index] = word.charAt(0).toUpperCase() + word.slice(1)
    });
    return words.join(" ")
}



const str =
  "this is an example sentence to try the function";
console.log(capFirstLetter(str))
