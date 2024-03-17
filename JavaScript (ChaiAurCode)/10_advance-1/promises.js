// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(() => {
//     console.log("promise consumed");
// })


// new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve()
//         console.log("Async task 2 completed");
//     }, 1000)
// }).then(() => {
//     console.log("promise two consumed");
// })


// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({"js" : "Chai aur code"})
//     }, 1000);
// })

// promiseThree.then((data) => {
//     console.log(data);
// })



// const promiseFour = new Promise((resolve, reject) => {
//   const error = true;
//   setTimeout(() => {
//     if (error) {
//       resolve({ username: "hitesh", password: "123" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });


// promiseFour
//     .then((userData) => console.log(userData.username))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("everything done"))

// promiseFour.then((userData) => {
//     console.log(userData)
//     return userData.username
// })
// .then((username) => {
//     console.log(username);
//     return username
// })
// .catch((err) => {
//     console.log();
// })






// const promiseFive = new Promise((resolve, reject) => {
//   const error = true;
//   setTimeout(() => {
//     if (error) {
//       resolve({ username: "JavaScript", password: "1234" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });





// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((response) => {
//       return response.json()
//   })
//   .then((data) => {
//       console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })



async function fetch_data()  {
  try{
    const requestURL = "https://api.github.com/users/hiteshchoudhary"
    const response = await fetch(requestURL)
    const data = await response.json()
    console.log(data);
  }

  catch(error){
    console.log(error);
  }
}

fetch_data()