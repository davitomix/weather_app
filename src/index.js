import './styles/styles.scss';
import WeatherData from './js/weather-utils';
import SequencerObj from './js/sequencer';

const sequencer = SequencerObj;
const wheater = WeatherData;
const searchInput = document.getElementById('search-input');

const triggerQuery = (evt) => {
  if (evt.key !== 'Enter') return;
  let query = searchInput.value.toLowerCase();
  query = query.charAt(0).toUpperCase() + query.slice(1);
  wheater.getApiData(query);
  searchInput.value = '';
  searchInput.blur();
};

const start = async () => {
  await sequencer.initStartSequence();
  searchInput.addEventListener('keyup', triggerQuery);
  // setTimeout(() => {
  //   wheater.getApiData('Tlalnepantla');
  //   console.log('called api');
  // }, 1000);
};

start();