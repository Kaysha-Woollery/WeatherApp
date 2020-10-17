let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let dateTime = document.querySelector("#date-time");
dateTime.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeather(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function city(event) {
  event.preventDefault();
  let apiKey = "645f60bec86ea3bd372626cd077c604a";
  let city = document.querySelector("#city-form-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  let currentCity = document.querySelector("#city-form-input");
  let h2 = document.querySelector("h2");
  if (currentCity.value) {
    h2.innerHTML = `${currentCity.value}`;
  }
}
let form = document.querySelector("#city-form");
form.addEventListener("submit", city);
