// Day 19: Regular Expressions
//Tasks/Activities:
//Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern(eg., match all occurrences of the word "JavaScript" in a string). Log the matches.

const text = "JavaScript is a versatile language. Learning JavaScript can be fun!";

// Regular expression to match all occurrences of "JavaScript"
const regex = /JavaScript/g;

// Find all matches
const matches = text.match(regex);

// Log the matches
console.log(matches);

// Task 2: Write a regular expression to match all digits in a string. Log the matches.

const text2 = "The year 2024 hae 365 days and 12 months.";

// Regular expression to  match all digits
const regex2 = /\d+/g;

//FInd all matches
const matches2 = text2.match(regex2);

console.log(matches2);


// Activity 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const text3 = "Alice went to Wonderland with Bob and Charlie.";

// Regular expression to match all words starting with a capital letter
const regex3 = /\b[A-Z][a-zA-Z]*\b/g;

// Find all matches
const matches3 = text3.match(regex3);

console.log(matches3);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const text4 = "The numbers are 123, 4567, and 89.";

//Regular expression to match all sequences of one or more digits
const regex4 = /\d+/g;

// Find all matches
const matches4 = text4.match(regex4);
console.log(matches4);

// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (eg., (123) 456-7890). Log the captures.

const text5 = "(123) 456-7890";

// Regular expression to capture area code, central office code, and line number
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;

// Execute the regular expression on the string
const matches5 = text5.match(regex5);

if(matches5){
    const [fullMatch, areaCode, centralOfficeCode, lineNumber] = matches5;
    console.log("Full match:", fullMatch);
    console.log("Area code:", areaCode);
    console.log("Central office code:", centralOfficeCode);
    console.log("Line number:", lineNumber);
}else{
    console.log("No match found.");
}


// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const email = "aman@gmail.com";

// Regular expression to capture the username and domain
const regex6 = /^(\w+)@([\w\.]+)/;

// Execute the regular expression on the email address
const matches6 = email.match(regex6);

if(matches6){
    const [fullMatch, username, domain] = matches6;
    console.log("Full match:", fullMatch);
    console.log("Username:", username);
    console.log("Domain:", domain);
}else{
    console.log("No match found");
}

// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it at the beginning of a string. Log the matches.

const text6 = "Hello world, this is a test";

// Regular expression to match a word at the beginning of a string

const regex7 =  /^\w+/;

// Find the match
const matches7 = text6.match(regex7);

if(matches7){
    console.log("Match:", matches7[0]);
}else{
    console.log("No match found.");
}

// Task 8: Write a regular expression to match a word only if it at the end of a string. Log the matches.

const text7 = "Hello world, this is a test";

// Regular expression to match a word at the end of a string
const regex8 =  /\b\w+\b$/;

// Find the match
const matches8 = text7.match(regex8);

if(matches8){
    console.log("Match:", matches8[0]);
}else{
    console.log("No match found.");
}

// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

const password = "Password1!";

// Regular expression to validate the password
const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?])(?!.*\s).{8,}$/;

// Validate the password
const isValid = regex9.test(password);

if(isValid){
    console.log("Password is valid.");
}else{
    console.log("Password is invalid");
}


// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

const url = "https://www.example.com/path/to/resource?query=string#fragment";

// Regular expression to validate a URL
const regex10 = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\/[\w-]*)*(\?[;&a-z=\d%_]*)?(\#[\w-]*)?$/i;

// Validate the URL
const isValid2 = regex10.test(url);

if(isValid2){
    console.log("URL is valid");
}else{
    console.log("URL is invalid");
}