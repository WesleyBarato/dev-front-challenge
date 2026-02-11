function loadWeather() {
  let currentTemperature = document.getElementById("currentTemperature");
  let humidity = document.getElementById("humidity");
  let weather = document.getElementById("weather");
  let apiKey = "a16790722bd7ca0f549fbe88f4e2c159";
  let city = document.getElementById("city").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      currentTemperature.textContent = data.main.temp;
      humidity.textContent = data.main.humidity;
    })
    .catch((error) => {
      console.log(error + "este é o erro");
    });
}
