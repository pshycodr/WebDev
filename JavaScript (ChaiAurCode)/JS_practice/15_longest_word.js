// Write a function to find the longest word in a sentence.

function longestWord(str){
    const strArr = str.split(" ");
    let long = strArr[0]
    for(let word of strArr){
        if(word.length > long.length){
            long = word
        }
    }
    return long;
}


const str = "As a text-based AI, I can't directly draw a diagram, but I can certainly describe the components and connections in a Data Flow Diagram (DFD) for a restaurant system."

console.log(longestWord(str))