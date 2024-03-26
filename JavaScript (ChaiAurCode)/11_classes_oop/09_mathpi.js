
// const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(discriptor);

const MyObj = {
    name : "Anish",
    class : "1st Year"
}

const discriptor = Object.getOwnPropertyDescriptor(MyObj, "name")
console.log(discriptor);