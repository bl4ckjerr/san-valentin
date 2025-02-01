document.addEventListener('DOMContentLoaded', (event) => {
    const generateCardButton = document.getElementById('generateCardButton');
    const shareButton = document.getElementById('shareButton');

    generateCardButton.addEventListener('click', generateCard);
    shareButton.addEventListener('click', shareOnWhatsApp);
});
