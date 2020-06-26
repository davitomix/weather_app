import './styles/styles.scss';
import WeatherData from './js/weather-utils';
import SysControl from './js/sys-utils';

const sys = SysControl;
const wheater = WeatherData;
/* eslint-disable */
const start = (() => {
/* eslint-enable */
  sys.init();
  wheater.getApiData('London');
  wheater.getApiData('Lonsdhvfds');
})();
