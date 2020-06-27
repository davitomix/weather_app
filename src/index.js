import './styles/styles.scss';
import WeatherData from './js/weather-utils';
import SysControl from './js/sys-utils';

const sys = SysControl;
const wheater = WeatherData;
const searchInput = document.getElementById('search-input');

const triggerQuery = (evt) => {
  if (evt.key !== 'Enter') return;
  wheater.getApiData(searchInput.value);
  searchInput.value = '';
  searchInput.blur();
};

const start = async () => {
  await sys.init();
  // searchInput.addEventListener('keyup', triggerQuery);
  setTimeout(() => {
    wheater.getApiData('Tlalnepantla');
    console.log('called api');
  }, 1000);
};

start();