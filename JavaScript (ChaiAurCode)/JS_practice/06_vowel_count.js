function vowelsCount(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  const totalVowel = {};

  str
    .toLowerCase()
    .split("")
    .forEach((ch) => {
      if (vowel.includes(ch)) {
        if (totalVowel[ch]) {
          totalVowel[ch] += 1;
        } else {
          totalVowel[ch] = 1;
        }
      }
    });

  return totalVowel;
}


function charecterCount(str) {
    const totalCharecter = {};
  
    str
      .toLowerCase()
      .split("")
      .forEach((ch) => {
        if (totalCharecter[ch]) {
          totalCharecter[ch] += 1;
        } else {
          totalCharecter[ch] = 1;
        }
      });
  
    return totalCharecter;
  }
  

const str =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia officiis nesciunt architecto a dolorum sequi possimus quisquam voluptatem exercitationem impedit sapiente sed, est, dolores temporibus nemo magni tenetur aut perspiciatis.";

const strVowels = vowelsCount(str);
const strCharecter = charecterCount(str)
console.log(strVowels);
console.log(strCharecter);
