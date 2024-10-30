// cycle.js
document.addEventListener('DOMContentLoaded', function() {
    const gifUrls = [
        'https://media.tenor.com/VuEB1oGWCMkAAAAC/lspdfr-gta.gif',
        'https://media.tenor.com/e0Q7DJfa9VgAAAAC/lspdfr-police-car.gif',
        'https://media.tenor.com/tGz_6KBmhEYAAAAC/%C3%B6sterreich-polizei.gif',
        'https://media.tenor.com/dRGzeS_Cx5YAAAAC/lspdfr-snow.gif'
    ];

    let currentGif = 0;
    const background = document.getElementById('background');

    // Function to change the background image
    function changeBackground() {
        const imageUrl = gifUrls[currentGif];
        const img = new Image();

        // Preload the image
        img.src = imageUrl;
        img.onload = () => {
            background.style.backgroundImage = `url('${imageUrl}')`;
        };

        // Move to the next GIF in the array
        currentGif = (currentGif + 1) % gifUrls.length;
    }

    // Initialize the first GIF
    changeBackground();

    // Change GIF every 5 seconds
    setInterval(changeBackground, 5000);  // 5 seconds interval
});
