import './styles/styles.scss';
import SequencerObj from './js/sequencer';
import WeatherObj from './js/weather-utils';

const sequencer = SequencerObj;
const searchInput = document.getElementById('search-input');
const wheater = WeatherObj;

const triggerQuery = (evt) => {
  if (evt.key !== 'Enter') return;
  let query = searchInput.value.toLowerCase();
  query = query.charAt(0).toUpperCase() + query.slice(1);
  wheater.getApiData(query);
  searchInput.value = '';
  searchInput.blur();
};

const listen = () => {
  searchInput.addEventListener('keyup', triggerQuery);
};

const start = async () => {
  await sequencer.initStartSequence();
  listen();
  // setTimeout(() => {
  //   wheater.getApiData('Tlalnepantla');
  //   console.log('called api');
  // }, 1000);
};



start();