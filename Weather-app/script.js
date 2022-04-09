function fetchData() {
  var apiKey = "dccc8834f7c70d172515285bfb42e3ac";
  var lat = 43.7862903;
  var lon = 18.120131;
  var lang = "en";

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=${lang}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var container = document.getElementById("container");
      for (item of data.list) {
        container.innerHTML += `<div class="widget">
  <div class="weatherIcon">
    <img class='w-icon'
      src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png"
    />
  </div>
  <div class="weatherInfo">
    <div class="temperature">
      <span>${Math.round(item.main.temp - 273)}°C </span>
    </div>
    <div class="description">
      <div class="weatherCondition">${item.weather[0].description}</div>
      <div class="place">${data.city.name}, ${data.city.country}</div>
    </div>
  </div>
  <div class="date">${item.dt_txt}</div>
</div>`;
      }
    });
}

fetchData();
