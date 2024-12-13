// DOM Loaded Event
document.addEventListener("DOMContentLoaded", () => {
    // Countdown Timer
    const countdown = document.getElementById('countdown');
    const newYear = new Date('January 1, 2025 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = newYear - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdown.textContent = `${days}D : ${hours}H : ${minutes}M : ${seconds}S`;

        if (timeLeft < 0) {
            countdown.textContent = "Happy New Year!";
        }
    }

    setInterval(updateCountdown, 1000);

    // Change Background Color
    const colorChangeButton = document.getElementById('colorChange');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    colorChangeButton.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });

    // Popup Window
    const previewButton = document.getElementById('preview');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    previewButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
