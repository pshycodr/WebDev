// This event listener waits for the entire HTML document to be loaded before running the script.
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the unordered list element with the ID 'myList' and store it in the variable 'list'.
    const list = document.getElementById('myList');

    // Add a click event listener to the list element. When a list item is clicked, the anonymous function is executed.
    list.addEventListener('click', (event) => {
        // Check if the clicked element is a list item.(Basically checks  if the clicked element is a list item (<li>).)
        if (event.target && event.target.nodeName === 'LI') {
            // Log the text content of the clicked list item to the console.
            console.log(`Clicked item: ${event.target.textContent}`);
        }
    });
});
