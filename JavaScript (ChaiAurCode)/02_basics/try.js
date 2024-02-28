function one(){
    console.log("one");
    two()
}

function two(){
    console.log("two")
    three()
}

function three(){
    console.log("three")
}


one();
two();
three();