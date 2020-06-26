const MenUtil = (() => {
  const menuBox = document.getElementById('menu-box');
  const weatherBox = document.getElementById('weather-box');
  const weatherContBox = document.getElementById('w-container-box');
  const startBtn = document.getElementById('start-btn');
  const backBox = document.getElementById('back-box');
  const backBtn = document.getElementById('back-btn');

  const start = () => {
    weatherBox.style.display = 'none';
    weatherContBox.style.display = 'none';
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
              setTimeout(() => {
                weatherContBox.style.display = 'flex';
                setTimeout(() => {
                  weatherContBox.classList.add('show');
                  setTimeout(() => {
                    backBtn.addEventListener('click', (e) => {
                      e.preventDefault();
                      weatherContBox.classList.remove('show');
                      backBox.classList.remove('show');
                      weatherBox.classList.remove('show');
                      setTimeout(() => {
                        weatherBox.style.display = 'none';
                        weatherContBox.style.display = 'none';
                        backBox.style.display = 'none';
                        menuBox.style.display = 'flex';
                        setTimeout(() => {
                          menuBox.classList.remove('hide');
                        }, 100);
                      }, 1000);
                    }, false, { once: true });
                  }, 100);
                }, 100);
              }, 400);
            }, 100);
          }, 100);
        }, false, { once: true });
      });
    }, 100);
  };
  return {
    start,
  };
})();

export default MenUtil;
