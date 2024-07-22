document.addEventListener('DOMContentLoaded', function() {
    const numberOfBars = 20;
    const musicBarsContainer = document.getElementById('music-bars');

    for (let i = 0; i < numberOfBars; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.animationDelay = `${i * 0.1}s`;
        musicBarsContainer.appendChild(bar);
    }
});