const deg = 6;
const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");
const dgtime = document.getElementById("time");
let ampm = "AM";

setInterval(() => {
    let d = new Date();
    let hh = d.getHours() * 30;
    let mm = d.getMinutes() * deg;
    let ss = d.getSeconds() * deg;
    let dh = d.getHours();
    let dm = d.getMinutes();
    let ds = d.getSeconds();

    if (dh > 12) {
        dh -= 12;
        ampm = "PM"
    }
    if (dm < 10) {
        dm = "0" + dm;
    }
    if (ds < 10) {
        ds = "0" + ds;
    }
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    dgtime.innerText = `${dh} : ${dm} : ${ds} ${ampm}`;
}, 1000)

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
const alarmAMPM = document.getElementById('alarmAMPM');
if (h > 12) {
    h -= 12;
    alarmAMPM.children[1].setAttribute('selected', 'true');
}
const alarmMinutes = document.getElementById('alarmMinutes');
const alarmHour = document.getElementById('alarmHour');
let i = 0;
while (i <= 60) {
    if (parseInt(alarmMinutes.children[i].innerText) === m) {
        alarmMinutes.children[i].setAttribute("selected", "true");
    }
    i++;
}
let a = 0
while (a < 12) {
    if (parseInt(alarmHour.children[a].innerText) === h) {
        alarmHour.children[a].setAttribute("selected", "true");
    }
    a++;
}
const alarmSound = new Audio("alarm.mp3");
const setAlarm = document.getElementById('setAlarm');
let alarm;
let timeOut;
setAlarm.addEventListener('click', () => {
    const hour = parseInt(alarmHour.value);
    const minute = parseInt(alarmMinutes.value);
    const currentTime = new Date();
    const alarmTime = new Date();
    const selectAMPM = alarmAMPM.value;
    alarmTime.setHours(hour);
    if (selectAMPM != ampm){
        alarmTime.setHours(hour + 12)
    }
        alarmTime.setMinutes(minute);
    alarmTime.setSeconds(0);

    if (alarmTime <= currentTime) {
        alarmTime.setDate(alarmTime.getDate() + 1);
    }

    if (setAlarm.innerText === 'Set Alarm') {
        const timeToAlarm = alarmTime - currentTime;
        timeOut = setTimeout(() => {
            alarm = setInterval(() => {
                alarmSound.play();
            }, 1000);
        }, timeToAlarm);
        setAlarm.innerText = 'Clear Alarm';
    } else {
        setAlarm.innerText = 'Set Alarm'
        clearInterval(alarm);
        clearTimeout(timeOut);
    }
});
