document.addEventListener('DOMContentLoaded', () => {
    const cursorSmall = document.querySelector('.small');
    const cursorBig = document.querySelector('.big');

    // Create glow element
    const glow = document.createElement('div');
    glow.classList.add('glow');
    document.body.appendChild(glow);

    const positionElement = (e) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;

        // Position the cursors
        cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

        // Position and size of the glow
        glow.style.left = `${mouseX}px`;
        glow.style.top = `${mouseY}px`;
        glow.style.width = '100px'; // Adjust the size of the glow
        glow.style.height = '100px'; // Adjust the size of the glow
        glow.style.opacity = '1';
    }

    window.addEventListener('mousemove', positionElement);

    // Hide the glow when not moving
    let timeout;
    window.addEventListener('mousemove', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            glow.style.opacity = '0';
        }, 100);
    });
});
