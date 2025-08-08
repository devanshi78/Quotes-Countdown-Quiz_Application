let quotes = document.querySelectorAll('#quotes li');
let quoteDisplay = document.getElementById('quote-display');
let timer = document.getElementById('timer');

let index = 0;
let timeLeft = 4;

// show first quote
quoteDisplay.innerText = quotes[index].innerText;
updateTimer();

setInterval(() => {
    timeLeft--;

    if (timeLeft === 0) {
        // next quote
        index++;
        if (index >= quotes.length) {
            index = 0;
        }

        quoteDisplay.innerText = quotes[index].innerText;
        timeLeft = 4;
    }

    updateTimer();
}, 1000);

function updateTimer() {
    let seconds = timeLeft < 10 ? "0" + timeLeft : timeLeft;
    timer.innerText = `00:${seconds}s`;
}
