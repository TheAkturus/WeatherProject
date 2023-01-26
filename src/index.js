// Setting date

let currentTime = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
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

let currentDay = days[currentTime.getDay()];
let currentMonth = months[currentTime.getMonth()];
let currentDate = currentTime.getDate();

let date = `${currentDay} ${currentMonth} ${currentDate}th `;

// City challenge

let heading = document.querySelector("h1");
heading.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i> ${date} `;

function displayWeatherConditions(response) {
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "d29a311e4fa2469dedda34ff71941ac1";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherConditions);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

// Time challenge

let dateElement = document.querySelector("#date");
let currentHour = new Date();
let hours = currentHour.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = currentHour.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let dayIndex = currentHour.getDay();
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(weekDays[dayIndex]);

console.log(hours, minutes);

let subheading = document.querySelector("h1");
subheading.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i> ${date} at ${hours}:${minutes}  `;

// Current location challenge
function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherConditions);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#location");
currentLocationButton.addEventListener("click", getCurrentLocation);
