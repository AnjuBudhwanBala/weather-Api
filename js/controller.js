import Weather from "./model/weatherModel.js";
import * as weatherView from "./view/weatherView.js";
import appid from "./config.js";
import { elements } from "./view/base.js";

const weatherForecast = async () => {
  //get value of input box from view
  const query = weatherView.getInput();

  const weather = new Weather(appid, query);

  const result = await weather.weatherFinder();

  //clear previous result from UI
  weatherView.clearInput();

  weatherView.renderCityName(result);
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  weatherForecast();
});
