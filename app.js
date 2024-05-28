function updateClock() {
    const now = new Date();
    let hour = now.getHours();
    const meridiem = hour >= 12 ? "PM" : "AM";
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let timeString = `${hour} : ${minutes} : ${seconds} ${meridiem}`;
    document.getElementById("clock").textContent=timeString;
}
updateClock();
setInterval(updateClock,1000);


