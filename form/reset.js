document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function() {
        this.reset();
    });
});