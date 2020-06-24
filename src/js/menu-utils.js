const menuUtil = (() => {
  const menuBox = document.getElementById('menu-box');
  const weatherBox = document.getElementById('weather-box');
  const startBtn = document.getElementById('start-btn');
  const backBox = document.getElementById('back-box');
  const backBtn = document.getElementById('back-btn');

  const start = () => {
    weatherBox.style.display = 'none';
    backBox.style.display = 'none';
    setTimeout(() => {
      menuBox.classList.remove('hide');
    }, 250);
    startBtn.addEventListener('click', (e) => {
      menuBox.classList.add('hide');
      setTimeout(() => {
        menuBox.style.display = 'none';
        weatherBox.style.display = 'flex';
        backBox.style.display = 'flex';
        setTimeout(() => {
          weatherBox.classList.add('show');
          backBox.classList.add('show');
          backBtn.addEventListener('click', (e) => {
            console.log('djdfkb');
          }, false, { once: true });
        }, 250);
      }, 1500);
    }, false, { once: true });
  }
  return {
    start
  };
})();

export default menuUtil;