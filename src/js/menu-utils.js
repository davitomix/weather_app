const MenUtil = (() => {
  const menuBox = document.getElementById('menu-box');
  const weatherBox = document.getElementById('weather-box');
  const weatherContBox = document.getElementById('w-container-box');
  const startBtn = document.getElementById('start-btn');
  const backBox = document.getElementById('back-box');
  const backBtn = document.getElementById('back-btn');

  const displayElement = (ele) => {
    ele.style.display = 'flex';
  };

  const undisplayElement = (ele) => {
    ele.style.display = 'none';
  };

  const resolveAfterXms = (time) => {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve();
      }, time);
    });
  }

  const transitionToPromise = (el, property, value) =>
  new Promise(resolve => {
    el.style[property] = value;
    const transitionEnded = e => {
      if (e.propertyName !== property) return;
      el.removeEventListener('transitionend', transitionEnded);
      resolve();
    }
    el.addEventListener('transitionend', transitionEnded);
  });

  const start = async () => {
    await resolveAfterXms(100);
    await transitionToPromise(menuBox, 'opacity', '1');
    startBtn.addEventListener('click', startSeq, false, { once: true });
  }

  const startSeq = async () => {
    await transitionToPromise(menuBox, 'opacity', '0');
    undisplayElement(menuBox);
    displayElement(weatherBox);
    displayElement(backBox);
    await resolveAfterXms(100);
    weatherBox.classList.add('show');
    backBox.classList.add('show');
    await resolveAfterXms(400);
    displayElement(weatherContBox);
    await resolveAfterXms(100);
    weatherContBox.classList.add('show');
    await resolveAfterXms(100);
    backBtn.addEventListener('click', endSeq, false, { once: true });
  }

  const endSeq = async () => {
    weatherContBox.classList.remove('show');
    backBox.classList.remove('show');
    weatherBox.classList.remove('show');
    await resolveAfterXms(1000);
    undisplayElement(weatherBox);
    undisplayElement(weatherContBox);
    undisplayElement(backBox);
    displayElement(menuBox);
    await resolveAfterXms(100);
    await transitionToPromise(menuBox, 'opacity', '1');
  }

  return {
    start,
  };
})();

export default MenUtil;
