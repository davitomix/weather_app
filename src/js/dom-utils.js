const DomObj = (() => {
  const temperatureC = document.getElementById('temp-c');
  const weatherDesc = document.getElementById('weather-description');
  const iconContainer = weatherDesc.childNodes[1];
  const weatherPar = weatherDesc.childNodes[3];

  const injectSucessView = (data) => {
    temperatureC.innerHTML = `${Math.round(data.main.temp)} &#8451;`;
    iconContainer.innerHTML = `<img src="./svg/${data.weather[0].icon}.svg" alt="cloud">`;
    weatherPar.innerText = `${data.weather[0].description}`;
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