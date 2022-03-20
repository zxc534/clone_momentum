const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "75d89ede765e6568eca8a99239cb1426";

function geoSuccess(location) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/ ${data.main.temp}℃`;
    });
}

function geoFail() {
  alert("Failed to load your location");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
