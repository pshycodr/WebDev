// Create a program to check if a given string is an anagram of another string.



function anagramCheck(str1,str2){
    this.str1 = str1.split("")
    this.str2 = str2.split("")
    for (const ch of this.str1) {
        console.log(ch);
        if(this.str2.includes(ch)){
            anagram = 0
        }else{
            anagram = 1
        }
    }

    return anagram === 0 ? true : false
}


// function anagramCheck(str1,str2){
//     this.str1 = str1.replace(/ /g, '').toLowerCase().split("").sort().join("")
//     this.str2 = str2.replace(/ /g, '').toLowerCase().split("").sort().join("")

//     return this.str1 == this.str2
// }

const str1 = "silent"
const str2 = "listen"

console.log(anagramCheck(str1, str2));
