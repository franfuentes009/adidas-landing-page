// 🌞🌙 Alternar modo claro/oscuro
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Cambiar Tema";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px";
    toggleButton.style.background = "#4CAF50";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";

    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});

// Agregar clase para el modo oscuro
const darkModeStyle = document.createElement("style");
darkModeStyle.textContent = `
    .dark-mode {
        background-color: #222;
        color: white;
    }
`;
document.head.appendChild(darkModeStyle);

// 🌅 Mensaje de bienvenida dinámico
document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.createElement("h2");
    welcomeMessage.style.textAlign = "center";
    welcomeMessage.style.padding = "20px";

    const hour = new Date().getHours();
    let message = "¡Bienvenido!";
    
    if (hour >= 6 && hour < 12) {
        message = "🌞 ¡Buenos días!";
    } else if (hour >= 12 && hour < 18) {
        message = "🌤️ ¡Buenas tardes!";
    } else {
        message = "🌙 ¡Buenas noches!";
    }

    welcomeMessage.textContent = message;
    document.body.insertBefore(welcomeMessage, document.body.firstChild);
});