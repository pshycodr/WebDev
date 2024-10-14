// This event listener waits for the entire HTML document to be loaded before running the script.
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the form element with the ID 'myForm' and store it in the variable 'form'.
    const form = document.getElementById('myForm');

    // Add a submit event listener to the form. When the form is submitted, the anonymous function is executed.
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior.
        event.preventDefault();

        // Create a FormData object from the form element.
        const formData = new FormData(form);

        // Log the form data to the console.
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    });
});
