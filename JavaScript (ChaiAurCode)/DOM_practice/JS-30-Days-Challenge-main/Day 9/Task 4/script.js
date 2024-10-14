function appendListItem(){
    // Creating a new li element
    let newListItem = document.createElement("li");

    // Setting its text content
    newListItem.textContent = "This is a new list item.";

    // Appending the new li to the existing ul list
    let list = document.getElementById("myList");
    list.appendChild(newListItem);
}