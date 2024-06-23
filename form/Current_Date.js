document.addEventListener('DOMContentLoaded', function () {
    let currentDate = new Date().toISOString().slice(0, 10);
    document.getElementById('current-date').innerText = currentDate;
});