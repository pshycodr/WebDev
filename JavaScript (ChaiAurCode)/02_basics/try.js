// call backs

function one(){
    console.log("one");
  
}

function two(){
    console.log("two")
    one()
}

function three(){
    console.log("three")
    two()
}


three();


// // Recursion
// let i = 1;

// function one(){
//     console.log(`run = ${i}`);
    
//     i++
//     if (i<=10){
//         one();
//     } 
  
// }

// one();