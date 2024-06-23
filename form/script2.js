document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('openPanelBtn').addEventListener('click', function () {
        document.getElementById('panel').style.right = '0';
        var formContainerHeight = document.getElementById('form-container').offsetHeight;
        document.getElementById('panel').style.height = formContainerHeight + 'px';
    });
    document.querySelector('.close-panel').addEventListener('click', function () {
        document.getElementById('panel').style.right = '-300px'; 
    });
});