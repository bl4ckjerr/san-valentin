async function generateCard() {
    const imageInput = document.getElementById("imageInput");
    const messageInput = document.getElementById("messageInput").value;
    const previewImage = document.getElementById("previewImage");
    const previewMessage = document.getElementById("previewMessage");
    const cardPreview = document.getElementById("cardPreview");

    if (!imageInput.files[0]) {
        alert("📸 ¡Sube una imagen primero!");
        return;
    }

    const file = imageInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
        // Enviar la imagen al backend
        const response = await fetch("http://127.0.0.1:5000/upload", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.error) {
            alert("Error subiendo la imagen");
            return;
        }

        previewImage.src = data.image_url;
        previewMessage.innerText = messageInput;
        cardPreview.classList.remove("hidden");
    } catch (error) {
        alert("Error de conexión con el servidor");
    }
}

function shareOnWhatsApp() {
    const message = document.getElementById("previewMessage").innerText;
    const imageUrl = document.getElementById("previewImage").src;

    // Crear el mensaje para WhatsApp
    const whatsappMessage = `💖 ¡Feliz San Valentín! 💖\n${message}\nMira mi tarjeta aquí: ${imageUrl}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, "_blank"); // Abrir en una nueva pestaña
}
