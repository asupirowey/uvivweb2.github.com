/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    let secretNumber = generateSecretNumber();
    let attempts = 0;
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const messageElement = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');
    const newGameButton = document.getElementById('newGameButton');

    function generateSecretNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    function updateAttempts() {
        attemptsElement.textContent = `Intentos: ${attempts}`;
    }

    guessButton.addEventListener('click', () => {
        const guess = parseInt(guessInput.value);

        if (isNaN(guess) || guessInput.value.trim() === '') {
            alert('Por favor, ingresa un número.');
            return;
        }

        attempts++;
        updateAttempts();
        guessInput.value = ''; // Limpiar el campo de entrada

        if (guess === secretNumber) {
            messageElement.textContent = `¡Felicidades! Adivinaste el número secreto (${secretNumber}) en ${attempts} intento${attempts === 1 ? '' : 's'}.`;
            guessInput.disabled = true;
            guessButton.disabled = true;
        } else if (guess < secretNumber) {
            messageElement.textContent = 'El número secreto es mayor.';
        } else {
            messageElement.textContent = 'El número secreto es menor.';
        }
    });

    newGameButton.addEventListener('click', () => {
        secretNumber = generateSecretNumber();
        attempts = 0;
        updateAttempts();
        messageElement.textContent = '';
        guessInput.value = '';
        guessInput.disabled = false;
        guessButton.disabled = false;
    });

    // Inicializar el contador de intentos
    updateAttempts();
});