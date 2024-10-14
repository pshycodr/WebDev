// This event listener waits for the entire HTML document to be loaded before running the script.
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the input element with the ID 'myInput' and store it in the variable 'input'.
    const input = document.getElementById('myInput');

    // Add a keydown event listener to the input element. When a key is pressed down, the anonymous function is executed.
    input.addEventListener('keydown', (event) => {
        // Log the key that was pressed to the console.
        console.log(`Key pressed: ${event.key}`);
    });
});
