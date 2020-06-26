import './styles/styles.scss';
import WeatherData from './js/weather-utils';
import SysControl from './js/sys-utils';

const sys = SysControl;
const wheater = WeatherData;

const start = (() => {
  sys.init();
  wheater.getApiData('London');
  wheater.getApiData('Lonsdhvfds');
})();
