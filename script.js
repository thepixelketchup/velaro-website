/**
 * Velaro - Coming Soon Page Script
 * Combines dynamic background generation, countdown logic, and form handling
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Set Current Year in Footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. Dynamic "Floating Tile" Background Animation ---
    const bgContainer = document.getElementById('background-tiles');
    const numberOfTiles = 30; // Number of floating squares to generate

    function createTile() {
        const tile = document.createElement('div');
        tile.classList.add('floating-tile');

        // Randomized properties for organic feel
        const size = Math.random() * 80 + 20; // 20px to 100px square
        const leftPosition = Math.random() * 100; // 0% to 100vw
        const animationDuration = Math.random() * 20 + 20; // 20s to 40s duration
        const animationDelay = Math.random() * 10; // 0s to 10s delay
        const opacity = Math.random() * 0.3 + 0.1; // subtle opacity 0.1 to 0.4

        tile.style.width = `${size}px`;
        tile.style.height = `${size}px`;
        tile.style.left = `${leftPosition}vw`;
        tile.style.animationDuration = `${animationDuration}s`;
        tile.style.animationDelay = `${animationDelay}s`;
        tile.style.opacity = opacity.toString();

        bgContainer.appendChild(tile);

        // Optional: Remove tile after animation ends to clean up DOM, 
        // though infinite animation doesn't strictly need it if just CSS looping.
        // Doing this ensures fresh random positions if they reset.
        setTimeout(() => {
            tile.remove();
            createTile(); // Generate a new one to replace it
        }, (animationDuration + animationDelay) * 1000);
    }

    // Initialize tiles
    for (let i = 0; i < numberOfTiles; i++) {
        // Stagger initial creation slightly so they don't all appear at once
        setTimeout(() => {
            createTile();
        }, Math.random() * 3000);
    }


    // --- 3. Countdown Timer Logic ---
    // Set launch date to 30 days from now for demo purposes
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    launchDate.setHours(10, 0, 0, 0); // 10:00 AM

    const countDownDate = launchDate.getTime();

    // DOM Elements
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM with zero-padding
        if (daysEl && hoursEl && minutesEl && secondsEl) {
            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        }

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(countdownTimer);
            if (daysEl) daysEl.textContent = "00";
            if (hoursEl) hoursEl.textContent = "00";
            if (minutesEl) minutesEl.textContent = "00";
            if (secondsEl) secondsEl.textContent = "00";

            // Optional: change subtitle text when launched
            const subtitle = document.querySelector('.hero-subtitle');
            if (subtitle) {
                subtitle.textContent = "We have launched! Welcome to Velaro Tiles.";
            }
        }
    }

    // Initial call
    updateCountdown();
    // Update the count down every 1 second
    const countdownTimer = setInterval(updateCountdown, 1000);



});
