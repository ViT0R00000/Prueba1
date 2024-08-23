document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const moreInfo = document.getElementById('more-info');

    toggleButton.addEventListener('click', function() {
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            toggleButton.textContent = 'Mostrar menos';
        } else {
            moreInfo.classList.add('hidden');
            toggleButton.textContent = 'Mostrar más';
        }
    });
});
