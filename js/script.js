document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.modal-close-button');
    const modalContainer = document.querySelector('.modal-container');
    
    if (closeButton && modalContainer) {
        closeButton.addEventListener('click', function() {
            modalContainer.style.display = 'none'; // Закрыть окно
        });
    } else {
        console.error('е');
    }
});