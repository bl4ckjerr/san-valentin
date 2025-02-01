function generateCard() {
    const imageInput = document.getElementById("imageInput");
    const messageInput = document.getElementById("messageInput").value;
    const previewImage = document.getElementById("previewImage");
    const previewMessage = document.getElementById("previewMessage");
    const cardPreview = document.getElementById("cardPreview");

    if (!imageInput.files[0]) {
        alert("📸 ¡Sube una imagen primero!");
        return;
    }

    // Mostrar la imagen subida
    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        previewImage.src = e.target.result;
        previewMessage.innerText = messageInput;
        cardPreview.classList.remove("hidden"); // Mostrar la carta animada
    };
    reader.readAsDataURL(file);
}

function shareOnWhatsApp() {
    const message = document.getElementById("previewMessage").innerText;
    const imageUrl = document.getElementById("previewImage").src;

    // Crear el mensaje para WhatsApp
    const whatsappMessage = `💖 ¡Feliz San Valentín! 💖\n${message}\nMira mi tarjeta: ${imageUrl}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, "_blank"); // Abrir en una nueva pestaña
}

document.addEventListener('DOMContentLoaded', (event) => {
    const generateCardButton = document.getElementById('generateCardButton');
    const shareButton = document.getElementById('shareButton');

    generateCardButton.addEventListener('click', generateCard);
    shareButton.addEventListener('click', shareOnWhatsApp);
});
