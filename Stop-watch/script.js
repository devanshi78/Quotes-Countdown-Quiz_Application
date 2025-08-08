let displaytimer = document.getElementById('displaytimer');
let start = document.getElementById('startbtn');
let pause = document.getElementById('pausebtn');
let reset = document.getElementById('resetbtn');

let Interval = null;
let seconds = 0;
let minutes = 0;
let hours = 0;

function showtime(){
    let h = hours;
    let m = minutes;
    let s = seconds;

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    displaytimer.textContent = h + ":" + m + ":" + s;
}

start.addEventListener('click',() => {
    Interval = setInterval(() => {
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
        showtime();
    },100)
});

pause.addEventListener('click',() => {
    clearInterval(Interval);
});

reset.addEventListener('click',() => {
    clearInterval(Interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    showtime();
});

showtime();