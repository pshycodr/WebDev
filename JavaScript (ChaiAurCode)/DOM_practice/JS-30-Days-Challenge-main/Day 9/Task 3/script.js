function appendDiv(){
    // Creating a new div element
    let newDiv = document.createElement("div");

    // Setting its text content
    newDiv.textContent = "This is a new div element.";

    // Appending the new div to the body
    document.body.appendChild(newDiv);

}