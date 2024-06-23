document.addEventListener('DOMContentLoaded', function() {
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    const minPriceInput = document.getElementById('minPriceInput');
    const maxPriceInput = document.getElementById('maxPriceInput');
    minPrice.addEventListener('input', updateMinPrice);
    maxPrice.addEventListener('input', updateMaxPrice);
    minPriceInput.addEventListener('input', updateMinPriceInput);
    maxPriceInput.addEventListener('input', updateMaxPriceInput);
    function updateMinPrice() {
        let minValue = parseInt(minPrice.value);
        let maxValue = parseInt(maxPrice.value);
        if (minValue >= maxValue) {
            minValue = maxValue - 100;
            minPrice.value = minValue;
        }
        minPriceInput.value = minValue;
    }
    function updateMaxPrice() {
        let minValue = parseInt(minPrice.value);
        let maxValue = parseInt(maxPrice.value);
    
        if (maxValue <= minValue) {
            maxValue = minValue + 100;
            maxPrice.value = maxValue;
        }
        maxPriceInput.value = maxValue;
    }
    function updateMinPriceInput() {
        let minValue = parseInt(minPriceInput.value);
        let maxValue = parseInt(maxPriceInput.value);
        if (minValue >= maxValue) {
            minValue = maxValue - 100;
            minPriceInput.value = minValue;
        }
        minPrice.value = minValue;
    }
    function updateMaxPriceInput() {
        let minValue = parseInt(minPriceInput.value);
        let maxValue = parseInt(maxPriceInput.value);
        if (maxValue <= minValue) {
            maxValue = minValue + 100;
            maxPriceInput.value = maxValue;
        }
        maxPrice.value = maxValue;
    }
});