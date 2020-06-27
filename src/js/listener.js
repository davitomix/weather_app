import WeatherObj from './weather-utils';

const ListenerObj = (() => {
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

  return {
    listen,
  };
})();

export default ListenerObj;
