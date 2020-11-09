class UI  {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temperature');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  };

  paint (weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = getWeatherInfo(weather.weather).description;
    this.temp.textContent = `${convertCalvinToCelsius(weather.main.temp)} ℃`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${convertCalvinToCelsius(weather.main.feels_like)} ℃`;
    this.wind.textContent = `Wind: ${weather.wind.speed} meter/sec`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${getWeatherInfo(weather.weather).icon}@2x.png`);
  }
}

const getWeatherInfo = arr => arr[0];
const convertCalvinToCelsius = num => (num - 273.15).toFixed(1);
