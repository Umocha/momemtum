const API_KEY = "fc255a85708e9e2fb2e933b38d85a24a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:nth-child(1)");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temper = document.querySelector("#weather span:nth-child(3)");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temper.innerText = `${data.main.temp}˚`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
