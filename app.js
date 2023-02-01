const searchBtn = document.querySelector('#searchBtn');
const cityInput = document.querySelector('#city');
const temperatureEl = document.querySelector('#temperature');
const descriptionEl = document.querySelector('#description');
// https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric
const API_KEY='23802932136126b3080ef24429557342';
searchBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const city = cityInput.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      temperatureEl.textContent = `Temperature: ${temp}°C`;
      descriptionEl.textContent = `Description: ${description}`;
    });
});