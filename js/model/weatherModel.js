export default class Weather {
  constructor(appid, query) {
    this.appid = appid;
    this.query = query;
  }

  formSearchURL(params) {
    const baseURL = "https://api.openweathermap.org/data/2.5/weather";
    let parameter = "?";
    Object.keys(params).forEach(
      el => (parameter = `${parameter}${el}=${params[el]}&`)
    );

    return baseURL + parameter;
  }

  async weatherFinder() {
    const fetchRes = await fetch(
      this.formSearchURL({
        appid: `${this.appid}`,
        q: `${this.query}`
      })
    );

    const result = await fetchRes.json();
    this.name = name;
    this.icon = icon;
    return result;
  }
}
