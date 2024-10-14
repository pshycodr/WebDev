function changeBackgroundColor(){
    let elements = document.getElementsByClassName("myDiv");

    // Looping through the elements and changing their background color
    for(let i=0;i<elements.length;i++){
        elements[i].style.backgroundColor = "lightgreen";
    }
}