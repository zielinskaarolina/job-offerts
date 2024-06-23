var openBtn = document.getElementById('openPanelBtn');
var panel = document.getElementById('panel');
var closeBtn = document.querySelector('.close-panel');
openBtn.addEventListener('click', function () {
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
    }
});
closeBtn.addEventListener('click', function () {
    panel.style.display = 'none';
});