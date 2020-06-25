import './styles/styles.scss';
import WeatherData from './js/weather-utils';
import MenUtil from './js/menu-utils';

const menuObj = MenUtil;
const wheater = WeatherData;

const start = (() => {
  // menuObj.start();
  wheater.getApiData('London');
  wheater.getApiData('Lonsdhvfds');
})();
