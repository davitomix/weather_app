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
      menuBox.addEventListener('transitionend', (e) => {
        e.preventDefault();
        startBtn.addEventListener('click', (e) => {
          e.preventDefault();
          menuBox.classList.add('hide');
          setTimeout(() => {
            menuBox.style.display = 'none';
            weatherBox.style.display = 'flex';
            backBox.style.display = 'flex';
            setTimeout(() => {
              weatherBox.classList.add('show');
              backBox.classList.add('show');
              backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                weatherBox.classList.remove('show');
                backBox.classList.remove('show');
                setTimeout(() => {
                  weatherBox.style.display = 'none';
                  backBox.style.display = 'none';
                  menuBox.style.display = 'flex';
                  menuBox.classList.remove('hide');
                }, 1000);
              }, false, { once: true });
            }, 250);
          }, 1000);
        }, false, { once: true });
      });
    }, 250);
  };
  return {
    start,
  };
})();

export default menuUtil;
