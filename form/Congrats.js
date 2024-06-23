document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const successMessage = document.getElementById('myModal');
    const closeButton = document.querySelector('.close');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        successMessage.style.display = 'block';
    });
    closeButton.addEventListener('click', function() {
        successMessage.style.display = 'none'; 
    });
});