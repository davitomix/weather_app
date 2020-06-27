import { format } from 'date-fns';

const DomObj = (() => {
  const temperatureC = document.getElementById('temp-c');
  const weatherDesc = document.getElementById('weather-description');
  const iconContainer = weatherDesc.childNodes[1];
  const weatherPar = weatherDesc.childNodes[3];
  const city = document.getElementById('city-name');
  const country = document.getElementById('country-name');
  const dateTime = document.getElementById('date-time');
  const wind = document.getElementById('wind');
  const cloud = document.getElementById('cloud');
  const humidity = document.getElementById('humidity');

  const injectSucessView = (data) => {
    temperatureC.innerHTML = `${Math.round(data.main.temp)} &#8451;`;
    iconContainer.innerHTML = `<img src="./svg/${data.weather[0].icon}.svg" alt="cloud">`;
    weatherPar.innerText = `${data.weather[0].description}`;
    dateTime.innerHTML = format(new Date(), 'h:m a — iiii, dd MMM `yy');
    city.innerText = `${data.name},`;
    country.innerText = ` ${data.sys.country}`;
    wind.innerText = `${Math.round(data.wind.speed)}`;
    cloud.innerText = `${data.clouds.all}`;
    humidity.innerText = `${data.main.humidity}`;
  };

  const injectFailView = (message) => {
    console.log(message);
  };

  const injectErrorView = (data) => {
    console.log(data);
  };

  return {
    injectSucessView,
    injectFailView,
    injectErrorView,
  };
})();

export default DomObj;