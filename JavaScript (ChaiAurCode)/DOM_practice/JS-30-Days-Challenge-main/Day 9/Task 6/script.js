function removeLastChild(){
    let list = document.getElementById("myList");

    // Removing the last child element if it exists
    if(list.lastElementChild){
        list.removeChild(list.lastElementChild);
    }
}