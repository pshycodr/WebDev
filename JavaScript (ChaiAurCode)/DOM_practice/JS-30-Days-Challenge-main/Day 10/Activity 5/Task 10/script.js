document.addEventListener('DOMContentLoaded', () => {
    // Select the parent container element and the button used to add new buttons.
    const parentContainer = document.getElementById('parentContainer');
    const addButton = document.getElementById('addButton');

    // Add a click event listener to the parent container.
    parentContainer.addEventListener('click', (event) => {
        // Check if the clicked element is a button.
        if (event.target && event.target.nodeName === 'BUTTON') {
            // Log the text content of the clicked button to the console.
            console.log(`Clicked button: ${event.target.textContent}`);
        }
    });

    // Add a click event listener to the 'Add Button' button.
    addButton.addEventListener('click', () => {
        // Create a new button element.
        const newButton = document.createElement('button');
        newButton.textContent = `Button ${parentContainer.children.length + 1}`;

        // Append the new button to the parent container.
        parentContainer.appendChild(newButton);
    });
});
