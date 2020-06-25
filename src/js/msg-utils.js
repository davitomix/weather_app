const Messager = (() => {

  const postWeather = (query, units, data) => {
    console.log(data);
  };

  const postError = (query, units, error) => {
    console.log(error);
  };

  const publish = () => {
    
  };

  return {
    postWeather,
    postError    
  }
})();

export default Messager;