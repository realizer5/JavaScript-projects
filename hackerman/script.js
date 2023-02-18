const form = document.getElementById("form");
const main = document.querySelector(".main");
const side = document.querySelectorAll(".side");
const btn = document.getElementById("btn");
let b = 0;

const genBinary = () => {
  let binary = "";
  while (binary.length < 2000) {
    binary = binary.concat(Math.floor(Math.random() * 2));
  }
  return binary;
}

form.onsubmit = async (event) => {
  event.preventDefault();
  const name = document.getElementById("targetName").value;
  let interval1 = setInterval(() => {
    side[0].innerHTML = `<p>${genBinary()}</p>`;
  }, 250);
  let interval2 = setInterval(() => {
    side[1].innerHTML = `<p>${genBinary()}</p>`;
  }, 300);
  let arr= [`initiating hack on ${name} ....`,
  `conneting to server ....`,
  `server  connected`,
  `trying passwords ....`,
  `password hacked succesfully`,
  `fetching data of ${name}`,
  `data fetching complete`,
  `${name} hacked succesfully`];
  const arrLoop = (i) =>{
    const para = document.getElementsByTagName("p")[4];
    para.innerHTML = `${i} passwords tried ....`;
  }   
  for (let a = 0; a < arr.length; a++) {
    await showHack(arr[a]);
    if (a==3) {
      for (let i = 0; i < 4000; i++) {
        await wait();
        arrLoop(i);
      }
    }
  }
  clearInterval(interval1);
  clearInterval(interval2);
  side[0].innerHTML = "<p>Hacker man</p>"
  side[1].innerHTML = "<p>Hacker man</p>"
}

const wait = (sec)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(true);
    }, sec * 1000)
  })
}

const showHack = async (msg) =>{
  await wait(2)
  main.innerHTML = main.innerHTML + `<p>${msg}</p>`;
}