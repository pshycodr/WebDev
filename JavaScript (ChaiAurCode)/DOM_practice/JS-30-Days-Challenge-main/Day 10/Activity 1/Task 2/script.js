// This event listener waits for the entire HTML document to be loaded before running the script.
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the image element with the ID 'myImage' and store it in the variable 'image'.
    const image = document.getElementById('myImage');

    // Add a double-click event listener to the image. When the image is double-clicked, the anonymous function is executed.
    image.addEventListener('dblclick', () => {
        // Toggle the visibility of the image.
        if (image.style.display === 'none') {
            // If the image is currently not visible, make it visible.
            image.style.display = 'block';
        } else {
            // If the image is currently visible, hide it.
            image.style.display = 'none';
        }
    });
});
