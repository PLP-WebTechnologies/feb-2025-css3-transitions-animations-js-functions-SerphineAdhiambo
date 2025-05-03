// Check if a preference is already stored
if(localStorage.getItem('buttonColor')) {
    document.querySelector('button').style.backgroundColor = localStorage.getItem('buttonColor');
}

// Save the color preference when the user clicks the button
document.querySelector('button').addEventListener('click', function() {
    const newColor = '#3498db'; // New color for the button
    document.querySelector('button').style.backgroundColor = newColor;
    localStorage.setItem('buttonColor', newColor); // Store it in localStorage
    
    // Trigger an animation
    this.classList.add('clicked');
});

// Animation when button is clicked
document.querySelector('button').addEventListener('animationend', function() {
    this.classList.remove('clicked'); // Remove the animation class after it ends
});
