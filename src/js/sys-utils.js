import DomObj from './dom-utils';

const SysControl = (() => {
  const domTransductor = DomObj;
  const menuBox = document.getElementById('menu-box');
  const weatherBox = document.getElementById('weather-box');
  const weatherContBox = document.getElementById('w-container-box');
  const startBtn = document.getElementById('start-btn');
  const backBox = document.getElementById('back-box');
  const backBtn = document.getElementById('back-btn');

  const resolveAfterXms = (time) => new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });

  const transitionToPromise = (el, property, value) => new Promise(resolve => {
    el.style[property] = value;
    const transitionEnded = e => {
      if (e.propertyName !== property) return;
      el.removeEventListener('transitionend', transitionEnded);
      resolve();
    };
    el.addEventListener('transitionend', transitionEnded);
  });

  const startSeq = async () => {
    await transitionToPromise(menuBox, 'opacity', '0');
    domTransductor.undisplayElement(menuBox);
    domTransductor.displayElement(weatherBox);
    domTransductor.displayElement(backBox);
    await resolveAfterXms(100);
    domTransductor.showElement(weatherBox);
    await transitionToPromise(backBox, 'opacity', '1');
    domTransductor.displayElement(weatherContBox);
    await resolveAfterXms(100);
    domTransductor.showElement(weatherContBox);
    await resolveAfterXms(100);
  };

  const endSeq = async () => {
    await transitionToPromise(backBox, 'opacity', '0');
    domTransductor.hideElemnt(weatherContBox);
    domTransductor.hideElemnt(weatherBox);
    await resolveAfterXms(1000);
    domTransductor.undisplayElement(weatherBox);
    domTransductor.undisplayElement(weatherContBox);
    domTransductor.undisplayElement(backBox);
    domTransductor.displayElement(menuBox);
    await resolveAfterXms(100);
    await transitionToPromise(menuBox, 'opacity', '1');
    domTransductor.removeDisplayedData();
  };

  const init = async () => {
    await resolveAfterXms(100);
    await transitionToPromise(menuBox, 'opacity', '1');
    startBtn.addEventListener('click', startSeq, false, { once: true });
    backBtn.addEventListener('click', endSeq, false, { once: true });
  };

  return {
    init,
  };
})();

export default SysControl;
