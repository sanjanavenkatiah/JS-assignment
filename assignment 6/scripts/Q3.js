
const name = prompt("Enter your name","Anonymous");

 title.innerText += `Welcome to the webpage ${name}`;
 const ctime = document.getElementById('time');
 function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

clock();

setInterval(clock,1000);


