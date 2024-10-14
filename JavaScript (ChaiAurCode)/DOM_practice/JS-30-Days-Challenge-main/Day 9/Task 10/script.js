document.getElementById("myElement").addEventListener("mouseover", function(){

    // Changing the border color on mouseover
    this.style.backgroundColor = "red";
});

document.getElementById("myElement").addEventListener("mouseout", function(){
    
    // Resetting the border color on mouseout
    this.style.backgroundColor = "lightgreen";
});