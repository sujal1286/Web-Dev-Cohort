let digital = document.querySelector(".digital-clock");
let dayLocal = document.querySelector(".date");
let number = document.querySelector(".clock");

function updateTime() {
  let get = new Date();
  let time = get.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  digital.innerHTML = time;

  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekDay[d.getDay()];
  dayLocal.innerHTML = day;
  let date = d.getDate();
  dayLocal.innerHTML += ` ${date}`;

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = month[d.getMonth()];
  dayLocal.innerHTML += ` ${monthName}`;

  dayLocal.innerHTML += ` ${d.getFullYear()}`;
}

updateTime();

for (let i = 1; i <= 12; i++) {
    let li = document.createElement("li");
    li.innerHTML = i;
    number.appendChild(li);
    li.classList.add("number");

    // Adjust the rotation and position of the numbers
    li.style.position = "absolute";
    li.style.transform = `rotate(${i * 30}deg) translate(0, -130px) rotate(-${i * 30}deg)`;
    li.style.transformOrigin = "center center"; // Ensure proper alignment
}

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");


function updateAnalogClock() {
  const now = new Date();

  
  const hours = now.getHours() % 12; 
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourRotation = (hours * 30) + (minutes / 2); 
  const minuteRotation = (minutes * 6) + (seconds / 10);
  const secondRotation = seconds * 6; 

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}


setInterval(updateAnalogClock, 1000);
updateAnalogClock();
