import Messager from './msg-utils';

const WeatherObj = (() => {
  const OW_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const APPID = '983197df0bcd0f30394e4bdf565daf58';
  const TEMP_UNITS = ['metric', 'imperial'];
  const msgTransductor = Messager;

  const getApiData = async (query, units = TEMP_UNITS[0]) => {
    try {
      const resp = await fetch(`${OW_URL}?q=${query}&appid=${APPID}&units=${units}`);
      const weatherData = await resp.json();
      msgTransductor.getSuccess(query, weatherData);
    } catch (error) {
      msgTransductor.getError(error);
    }
  };

  return {
    getApiData,
  };
})();

export default WeatherObj;
