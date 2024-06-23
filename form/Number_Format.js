document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('phone').addEventListener('input', function (e) {
        let input = e.target.value.replace(/\D/g, '').substring(0, 9);
        let formatted = '';
        for (let i = 0; i < input.length; i++) {
            if (i > 0 && i % 3 === 0) {
                formatted += ' ';
            }
            formatted += input[i];
        }
        e.target.value = formatted;
    });
});