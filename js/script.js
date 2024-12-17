document.addEventListener('DOMContentLoaded', () => {
    const timelineEvents = document.querySelectorAll('.timeline-event');
    timelineEvents.forEach((event, index) => {
        if (index % 2 === 0) {
            event.classList.add('odd');
        } else {
            event.classList.add('even');
        }
    });
});

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const contentSection = document.getElementById('content');
const monthsSection = document.getElementById('months');

const content = {
    June: `<p>Our first vacation...</p><img src="images/s6.gif" alt="June GIF">`,
    July: `<p>Our first anniversary...</p><img src="images/s7.gif" alt="July GIF">`,
    August: `<p>Our first movie...</p><img src="images/s8.gif" alt="August GIF">`,
    September: `<p>Our first dance...</p><img src="images/s9.gif" alt="September GIF">`,
    October: `<p>Our first Halloween...</p><img src="images/s10.gif" alt="October GIF">`,
    November: `<p>Our first Thanksgiving...</p><img src="images/s11.gif" alt="November GIF">`,
    December: `<p>Our first Christmas...</p><img src="images/s12.gif" alt="December GIF">`
};

months.forEach(month => {
    month.addEventListener('click', () => {
        const monthName = month.getAttribute('data-month');
        contentSection.innerHTML = `<h2>${monthName}</h2><p>${content[monthName]}</p>`;
    });
});

function startLoading(url) {
    const loadingBarContainer = document.getElementById('loading-bar-container');
    const loadingBar = document.getElementById('loading-bar');
    const loadingHeart = document.getElementById('loading-heart');

    loadingBarContainer.style.display = 'block';
    loadingHeart.style.display = 'block';

    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);

            // Ensure final positions
            loadingBar.style.width = '100%';
            loadingHeart.style.right = '10px'; // Offset right

            setTimeout(() => {
                window.location.href = url;
            }, 200);
        } else {
            // Add variance to the speed
            const increment = Math.random() * 2 + 1; // Random increment between 1 and 3
            width = Math.min(width + increment, 100); // Ensure width does not exceed 100%

            // Update the width of the loading bar
            loadingBar.style.width = width + '%';

            // Move the heart
            loadingHeart.style.right = `calc(${100 - width}% - 10px)`; // Offset right
        }
    }, 80);
}

function revealBouquet() {
    const flowerBouquet = document.getElementById('flower-bouquet');
    flowerBouquet.style.display = 'block';

    // Hide the background-graphics section
    const backgroundGraphics = document.getElementById('background-graphics');
    backgroundGraphics.style.display = 'none';

    // Move the lower two flowers down
    const bottomLeftFlower = document.querySelector('.bottom-left');
    const bottomRightFlower = document.querySelector('.bottom-right');
    bottomLeftFlower.style.bottom = '-180px';
    bottomRightFlower.style.bottom = '-180px';
}



