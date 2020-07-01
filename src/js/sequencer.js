import DomObj from './dom-utils';
import PromiserObj from './promiser';

const SequencerObj = (() => {
  const dommer = DomObj;
  const promiser = PromiserObj;
  const menuBox = document.getElementById('menu-box');
  const weatherBox = document.getElementById('weather-box');
  const weatherContBox = document.getElementById('w-container-box');
  const startBtn = document.getElementById('start-btn');
  const backBox = document.getElementById('back-box');
  const backBtn = document.getElementById('back-btn');
  const weatherBase = document.querySelector('.weather-base');
  const errorBase = document.querySelector('.not-found-base');
  const errorBox = document.querySelector('.not-found-box');
  const temperatureC = document.getElementById('temp-c');
  const temperatureF = document.getElementById('temp-f');
  const tempToggler = document.getElementById('temp-toggler');
  tempToggler.checked = false;

  let successCounter = 0;
  let errorCounter = 0;

  const showFTemp = async () => {
    await promiser.resolveAfterTransition(temperatureC, 'opacity', '0');
    temperatureC.style.display = 'none';
    temperatureF.style.display = 'block';
    await promiser.resolveAfterXms(100);
    await promiser.resolveAfterTransition(temperatureF, 'opacity', '1');
  };

  const showCTemp = async () => {
    await promiser.resolveAfterTransition(temperatureF, 'opacity', '0');
    temperatureC.style.display = 'block';
    temperatureF.style.display = 'none';
    await promiser.resolveAfterXms(100);
    await promiser.resolveAfterTransition(temperatureC, 'opacity', '1');
  };

  tempToggler.addEventListener('change', (e) => {
    if (e.target.checked) {
      showFTemp();
    } else {
      showCTemp();
    }
  });

  const startSeq = async () => {
    await promiser.resolveAfterTransition(menuBox, 'opacity', '0');
    dommer.undisplayElement(menuBox);
    dommer.displayElement(weatherBox);
    dommer.displayElement(backBox);
    await promiser.resolveAfterXms(100);
    dommer.showElement(weatherBox);
    await promiser.resolveAfterTransition(backBox, 'opacity', '1');
    dommer.displayElement(weatherContBox);
    await promiser.resolveAfterXms(100);
    dommer.showElement(weatherContBox);
    await promiser.resolveAfterXms(100);
  };

  const endSeq = async () => {
    await promiser.resolveAfterTransition(backBox, 'opacity', '0');
    dommer.hideElemnt(weatherContBox);
    dommer.hideElemnt(weatherBox);
    await promiser.resolveAfterXms(1000);
    dommer.undisplayElement(weatherBox);
    dommer.undisplayElement(weatherContBox);
    dommer.undisplayElement(backBox);
    dommer.displayElement(menuBox);
    await promiser.resolveAfterXms(100);
    await promiser.resolveAfterTransition(menuBox, 'opacity', '1');
    dommer.removeWeatherView();
    weatherBase.style.opacity = '0';
    errorBase.style.opacity = '0';
    errorCounter = 0;
    successCounter = 0;
  };

  const initStartSequence = async () => {
    await promiser.resolveAfterXms(100);
    await promiser.resolveAfterTransition(menuBox, 'opacity', '1');
    startBtn.addEventListener('click', startSeq, false, { once: true });
    backBtn.addEventListener('click', endSeq, false, { once: true });
  };

  const sucessViewSequence = async (data) => {
    if (successCounter > 0) {
      await promiser.resolveAfterTransition(weatherBase, 'opacity', '0');
    }
    if (errorCounter > 0) {
      await promiser.resolveAfterTransition(errorBase, 'opacity', '0');
    }
    dommer.removeWeatherView();
    dommer.undisplayElement(errorBase);
    dommer.displayElement(weatherBase);
    await promiser.resolveAfterXms(100);
    dommer.injectSucessView(data);
    await promiser.resolveAfterTransition(weatherBase, 'opacity', '1');
    successCounter += 1;
    errorCounter = 0;
  };

  const errorViewSequence = async (msg) => {
    if (successCounter > 0) {
      await promiser.resolveAfterTransition(weatherBase, 'opacity', '0');
      dommer.hideElemnt(errorBox);
    }
    if (errorCounter > 0) {
      dommer.hideElemnt(errorBox);
      await promiser.resolveAfterXms(500);
      await promiser.resolveAfterTransition(errorBase, 'opacity', '0');
    }
    dommer.displayElement(errorBase);
    dommer.undisplayElement(weatherBase);
    await promiser.resolveAfterXms(100);
    dommer.injectErrorView(msg);
    await promiser.resolveAfterTransition(errorBase, 'opacity', '1');
    dommer.showElement(errorBox);
    errorCounter += 1;
    successCounter = 0;
  };

  return {
    initStartSequence,
    sucessViewSequence,
    errorViewSequence,
    showFTemp,
    showCTemp,
  };
})();

export default SequencerObj;
