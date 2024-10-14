// This event listener waits for the entire HTML document to be loaded before running the script.
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button element with the ID 'myButton' and store it in the variable 'button'.
    const button = document.getElementById('myButton');

    // Select the paragraph element with the ID 'myParagraph' and store it in the variable 'paragraph'.
    const paragraph = document.getElementById('myParagraph');

    // Add a click event listener to the button. When the button is clicked, the anonymous function is executed.
    button.addEventListener('click', () => {
        // Change the text content of the paragraph to "The text has been changed!"
        paragraph.textContent = 'The text has been changed!';
    });

})