
const timerClock = document.getElementById("timer");

function timer() {
    setInterval(() => {
        let now = new Date();
        let hour = now.getHours().toString().padStart(2, "0");
        let minuts = now.getMinutes().toString().padStart(2, "0");
        let seconds = now.getSeconds().toString().padStart(2, "0");

        let currentTime = ` ${hour}:${minuts}:${seconds} `;
        timerClock.textContent = currentTime;
    }, 1000);
}

timer();