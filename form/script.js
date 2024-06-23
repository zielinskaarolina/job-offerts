document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('openPanelBtn').addEventListener('click', function () {
        document.getElementById('panel').style.width = '300px';
    });
    document.querySelector('.close-panel').addEventListener('click', function () {
        document.getElementById('panel').style.width = '0';
    });
});