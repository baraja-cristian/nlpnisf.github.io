// Inicializar AOS animation
AOS.init({
    duration: 800,
    once: true
});

// Chat functionality
const responses = {
    "¿qué es nlp?": "El Procesamiento del Lenguaje Natural (NLP) es una rama de la Inteligencia Artificial que se enfoca en la interacción entre computadoras y lenguaje humano. Permite a las máquinas entender, interpretar y generar lenguaje humano de manera útil.",
    "¿cuáles son las fases del nlp?": "Las principales fases son: 1) Tokenización (dividir texto en partes), 2) Lematización (reducir palabras a su forma base), 3) Análisis sintáctico (estructura gramatical), 4) Análisis semántico (significado), y 5) Generación de lenguaje (crear texto coherente).",
    "¿qué es un chatbot?": "Un chatbot es un programa informático que simula conversaciones humanas mediante NLP. Puede responder preguntas, realizar tareas o guiar a usuarios en diversos sistemas como atención al cliente, educación o comercio electrónico.",
    "¿cómo se relaciona con normativas?": "El desarrollo de sistemas NLP debe seguir normativas como: ISO/IEC 25010 (calidad del software), GDPR (protección de datos), IEEE 830 (requisitos), y WCAG (accesibilidad). Esto asegura productos éticos, seguros y de calidad.",
    "ejemplos de uso": "Algunos ejemplos prácticos son: 1) Asistentes virtuales (Siri, Alexa), 2) Traducción automática (Google Translate), 3) Corrección gramatical (Grammarly), 4) Análisis de sentimiento en redes sociales, y 5) Resúmenes automáticos de documentos.",
    "¿qué normativa aplica?": "Las principales normativas son: 1) ISO/IEC 25010 para calidad del producto, 2) GDPR/LOPD para protección de datos, 3) IEEE 830 para documentación de requisitos, 4) WCAG para accesibilidad, y 5) Directrices éticas para IA.",
    "hola": "¡Hola! Soy un asistente sobre Procesamiento de Lenguaje Natural. ¿En qué puedo ayudarte hoy? Puedes preguntar sobre conceptos, aplicaciones o normativas relacionadas con NLP.",
    "gracias": "¡De nada! Estoy aquí para ayudar. Si tienes más preguntas sobre NLP o normativas de software, no dudes en consultarme.",
    "default": "Lo siento, no tengo información sobre eso. Puedo ayudarte con preguntas sobre: qué es NLP, sus fases, aplicaciones, chatbots o normativas relacionadas. ¿En qué más puedo ayudarte?"
};

let chatModal = new bootstrap.Modal(document.getElementById('chatModal'));

function openModal() {
    chatModal.show();
    document.getElementById('userInput').focus();
}

function closeModal() {
    chatModal.hide();
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");
    const userText = input.value.trim().toLowerCase();

    if (userText === "") return;

    addMessage(userText, 'user-message');

    setTimeout(() => {
        let response = responses[userText] || responses["default"];
        addMessage(response, 'bot-message');
    }, 800);

    input.value = "";
    input.focus();
}

function addMessage(text, className) {
    const chat = document.getElementById("chat");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${className} animate__animated animate__fadeIn`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    chat.appendChild(messageDiv);
    chat.scrollTop = chat.scrollHeight;
}

function handleKeyPress(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
}
