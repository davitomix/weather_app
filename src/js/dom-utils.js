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
  const spanTitles = document.querySelectorAll('.title');
  const spanUnits = document.querySelectorAll('.unit');
  const errorTxt = document.getElementById('error-txt');

  const displayElement = (ele) => {
    ele.style.display = 'flex';
  };

  const undisplayElement = (ele) => {
    ele.style.display = 'none';
  };

  const showElement = (ele) => {
    ele.classList.add('show');
  };

  const hideElemnt = (ele) => {
    ele.classList.remove('show');
  };

  const showSpanTitles = (selector) => {
    Array.prototype.forEach.call(spanTitles, child => {
      if (selector) {
        child.classList.remove('title');
      } else {
        child.classList.add('title');
      }
    });
  };

  const showSpanUnits = (selector) => {
    Array.prototype.forEach.call(spanUnits, child => {
      if (selector) {
        child.classList.remove('unit');
      } else {
        child.classList.add('unit');
      }
    });
  };

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
    showSpanTitles(true);
    showSpanUnits(true);
  };

  const removeWeatherView = () => {
    temperatureC.innerHTML = null;
    iconContainer.innerHTML = null;
    weatherPar.innerText = null;
    dateTime.innerHTML = null;
    city.innerText = null;
    country.innerText = null;
    wind.innerText = null;
    cloud.innerText = null;
    humidity.innerText = null;
    showSpanTitles(false);
    showSpanUnits(false);
  };

  const injectErrorView = (data) => {
    errorTxt.innerText = data;
  };

  return {
    injectSucessView,
    removeWeatherView,
    injectErrorView,
    displayElement,
    undisplayElement,
    showElement,
    hideElemnt,
  };
})();

export default DomObj;