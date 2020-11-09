class Weather {
  constructor(city, country) {
    this.apiKey = '658d5fb75d29b587f9072fbbfe1f4a47';
    this.city = city;
    this.country = country;
  };

  // Fetch weather from API
  async getWeather () {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  };

  // Change weather location
  changeLocation (city, country) {
    this.city = city;
    this.country = country;
  };
};
