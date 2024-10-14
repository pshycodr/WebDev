// This event listener waits for the entire HTML document to be loaded before running the script.
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the input element with the ID 'myInput' and store it in the variable 'input'.
    const input = document.getElementById('myInput');
    // Select the paragraph element with the ID 'displayParagraph' and store it in the variable 'paragraph'.
    const paragraph = document.getElementById('displayParagraph');

    // Add a keyup event listener to the input element. When a key is released, the anonymous function is executed.
    input.addEventListener('keyup', () => {
        // Update the text content of the paragraph to display the current value of the input field.
        paragraph.textContent = `Current value: ${input.value}`;
    });
});
