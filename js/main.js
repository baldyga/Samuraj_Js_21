const btnStart = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const div = document.querySelector('.time div')

let time = 0;
let active = false;

const timer = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = "Pauza";
        idI = setInterval(start, 10);
    } else {
        active = !active;
        btnStart.textContent = "Start";
        clearInterval(idI);
    }
}
const start = () => {
     time++;
     div.textContent = (time/100).toFixed(2);
}
const reset = () => {
    time = 0;
    div.textContent = "---";
    btnStart.textContent = "Start";
    clearInterval(idI);
}

btnStart.addEventListener('click', timer);
btnReset.addEventListener('click', reset);



