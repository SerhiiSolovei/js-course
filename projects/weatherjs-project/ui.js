class UI  {
  constructor() {
    this.location = document.getElementById('w-location');
    this.time = document.getElementById('time');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temperature');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  };

  paint (weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.time.textContent = formatDate(getDateFromTimezoneOffset(weather.timezone));
    this.desc.textContent = capitalizeWords(getWeatherInfo(weather).description);
    this.temp.textContent = `${convertCalvinToCelsius(weather.main.temp)} ℃`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${convertCalvinToCelsius(weather.main.feels_like)} ℃`;
    this.wind.textContent = `Wind: ${weather.wind.speed} meter/sec`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${getWeatherIcon(weather)}@2x.png`);
  }
}

const capitalizeWords = string => {
 const words = string.split(' ');
 return words.map(word => (word.charAt(0).toUpperCase() + word.substring(1))).join(' ');
};


const getWeatherInfo = weather => weather.weather[0];

const getWeatherIcon = weather => getWeatherInfo(weather).icon;

const convertCalvinToCelsius = num => (num - 273.15).toFixed(1);


const timezoneDifference = (obj) => {
  return (new Date().getTimezoneOffset() / 60) + obj.timezone / 3600
};

const getDateFromTimezoneOffset = (timezoneOffset) => {
  const result = new Date()
  const offset = (new Date().getTimezoneOffset() * 60 + timezoneOffset)* 1000
  result.setTime(result.getTime() + offset)
  return result
}

const formattingTo24HoursClock = time => {
  return time < 10 ? '0' + time : time;
}

const formatDate = date => {
  const hours = formattingTo24HoursClock(date.getHours());
  const minutes = formattingTo24HoursClock(date.getMinutes());
  return `Local Time: ${hours}:${minutes}`
}
