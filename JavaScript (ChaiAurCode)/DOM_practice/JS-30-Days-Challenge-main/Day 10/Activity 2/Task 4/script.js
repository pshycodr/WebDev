document.addEventListener('DOMContentLoaded', (event) => {

    let element = document.getElementById('myElement');
    
    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = 'lightblue';
    })
})