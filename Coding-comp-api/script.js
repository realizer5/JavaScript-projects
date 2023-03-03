const Cnt = document.getElementById("competitions");
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let ampm = "AM";
const imgHref = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg"];
let imgLength = imgHref.length;
const url = "https://kontests.net/api/v1/all";
let a = fetch(url);

const localTime = (time)=>{
  let d = new Date (time);
  let dh = d.getHours();
  let dm = d.getMinutes();
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
if (dh < 10) {
  dh = "0" + dh;
}
if (dh == 00){
  dh = 12;
}
return `${dh} : ${dm} ${ampm} ${dday} ${ddate} / ${dmonth} / ${dyear}`;
}

const duration = (dur) =>{
  let drr = ``;
  let minutes = Math.floor(dur / 60);
  let hour = Math.floor(minutes / 60);
  let day = Math.floor(hour / 24);
  let year = Math.floor(day/365);

  if (day > 365 || hour>24 || minutes > 60) {
    day = day % 365;
    hour = hour % 24;
    minutes = minutes % 60;
  }

  drr = `${year} Years ${day} Day ${hour} Hours ${minutes} Minutes`;

if(year == 0 || day == 0 || hour == 0){
  day == 0 ? drr =`${hour} Hours ${minutes} Minutes`: drr =`${day} Days ${hour} Hours ${minutes} Minutes`;
  if(day== 0 || hour == 0){
    hour == 0 ? drr =`${minutes} Minutes`:`${hour} Hours ${minutes} Minutes`;
  }
}

  return drr;
}

const img = () =>{
  let i = Math.floor(Math.random()*imgLength);
  let src = imgHref[i];
  return src;
}

a.then((v) => {
    return v.json()
}).then((v) => {
    ihtml = "";
    for (item in v) {
        ihtml += `<div class="card m-5 bg-dark">
    <img src="${img()}" class="card-img-top" alt="error while loading.....">
    <div class="card-body">
      <h5 class="card-title">${v[item].name}</h5>
      <p class="card-text">Start time : ${localTime(v[item].start_time)}</p>
      <p class="card-text">End time : ${localTime(v[item].end_time)}</p>
      <p class="card-text">Duration : ${duration(v[item].duration)}</p>
      <p class="card-text"> Website : ${v[item].site}</p>
      <p class="card-text">In 24 hours: ${v[item].in_24_hours}</p>
      <p class="card-text">Status : ${v[item].status}</p>
      <a href="${v[item].url}" class="btn btn-primary"> Visit site</a>
    </div>
  </div>
</div>`}
    Cnt.innerHTML = ihtml;
})
