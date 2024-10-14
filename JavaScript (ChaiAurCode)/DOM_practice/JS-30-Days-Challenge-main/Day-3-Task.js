// Day 3: Control Structures
// Task/ Activities:
// Activity 1: If-Else Statements

// Task 1:
function checkNum(num){
    if(num > 0){
        console.log(num + " is a positive number.");
    }else if(num < 0){
        console.log(num + " is a negative number.");
    }else{
        console.log(num + " is zero.");
    }
}
let number = 5;
checkNum(number);

// Task 2:
function isEligible(age){
  if(age >= 18){
    console.log(age + " is eligible to vote.");
  }else{
    console.log(age + " is not eligible to vote.");
  }
}
let age = 20;
isEligible(age);

// Activity 2: Nested If-Else Statements
// Task 3:
function findLargest(a, b, c){
    let largest;

    if(a >= b){
        if(a >= c){
            largest = a;
        }
    }else{
        if(b >= c){
            largest = b;
        }else{
            largest = c;
        }
    }
    console.log("The largest number is: " + largest);
}

let num1 = 10;
let num2 = 20;
let num3 = 30;
findLargest(num1, num2, num3);

// Activity 3: Switch Case
// Task 4:
function getDayName(dayNumber){
    let dayName;

    switch(dayNumber){
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
            default:
                dayName = "Invalid day number";
    }
    console.log(dayName);
}
let dayNumber = 5;
getDayName(dayNumber);

// Task 5:
function getGrade(score){
    let grade;

    switch(true){
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80 && score <= 90):
            grade = "B";
            break;
        case (score >= 70 && score <= 80):
            grade = "C";
            break;
        case (score >= 60 && score <= 70):
            grade = "D";
            break;
        case (score >= 90 && score <= 100):
            grade = "E";
            break;
        case (score >= 0 && score < 60):
            grade = "F";
            break;
            default:
                grade = "Invalid score";
    }
    console.log("The grade is: " + grade);

}
let score = 92;
getGrade(score);

// Activity 4: Conditional (Ternary) Operator
// Task 6:
let terNum = 21;
let res = (terNum % 2 === 0) ? "even" : "odd";
console.log(res);

// Activity 5: Combining Conditions
// Task 7:
function isLeapYear(year){
    let isLeap;

    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        isLeap = true;
    }else{
        isLeap = false;
    }
    if(isLeap){
        console.log(year + " is a leap year.");
    }else{
        console.log(year + " is not a leap year.");
    }
}
let year = 2024;
isLeapYear(year);




