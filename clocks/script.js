const deg = 6;
const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");
const dgtime = document.getElementById("dgTime");
const date = document.getElementById("date");
let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let ampm = "AM";

setInterval(() => {
    let d = new Date();
    let hh = d.getHours() * 30;
    let mm = d.getMinutes() * deg;
    let ss = d.getSeconds() * deg;
    let dh = d.getHours();
    let dm = d.getMinutes();
    let ds = d.getSeconds();
    let dday = day[d.getDay()]
    let ddate = d.getDate();
    let dmonth = month[d.getMonth()];
    let dyear = d.getFullYear();

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
    date.innerText = `${dday} ${ddate} / ${dmonth} / ${dyear}`;
})