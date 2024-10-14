// This event listener waits for the entire HTML document to be loaded before running the script.
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the dropdown element with the ID 'mySelect' and store it in the variable 'select'.
    const select = document.getElementById('mySelect');
    // Select the paragraph element with the ID 'displayParagraph' and store it in the variable 'paragraph'.
    const paragraph = document.getElementById('displayParagraph');

    // Add a change event listener to the select element. When an option is selected, the anonymous function is executed.
    select.addEventListener('change', () => {
        // Update the text content of the paragraph to display the selected value.
        paragraph.textContent = `Selected value: ${select.value}`;
    });
});
