import { elements } from "./base.js";

export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
  elements.searchInput.value = "";
  elements.cityName.innerHTML = "";
  elements.temperature.innerHTML = "";
  elements.humidity.innerHTML = "";
  elements.icon.src = "";
};

// render Api Data
export const renderCityName = result => {
  //temperarture kelvin to farhenhite or celcius

  let temperature;
  temperature = Math.round(result.main.temp - 273) + "°C";
  elements.temperature.insertAdjacentHTML("afterbegin", temperature);

  //humidity
  const humidity = result.main.humidity + "%";
  elements.humidity.insertAdjacentHTML("afterbegin", humidity);

  //name of city
  elements.cityName.insertAdjacentHTML("afterbegin", result.name);

  //weather icon
  elements.icon.src =
    "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png";
};
