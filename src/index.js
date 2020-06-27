import './styles/styles.scss';
import WeatherData from './js/weather-utils';
import SysControl from './js/sys-utils';

const sys = SysControl;
const wheater = WeatherData;
/* eslint-disable */
const start = async () => {
/* eslint-enable */
  await sys.init();
  setTimeout(() => {
    wheater.getApiData('Tlalnepantla');
    console.log('called api');
  }, 1000);
  // wheater.getApiData('Lonsdhvfds');
};

start();