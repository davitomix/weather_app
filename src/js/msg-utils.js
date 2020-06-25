import DomObj from "./dom-utils";

const Messager = (() => {
  const domTransductor = DomObj;

  const postWeather = (query, units, data) => {
    console.log(data);
    console.log(query);
  };

  const postError = (query, units, error) => {
    console.log(error.message);
    console.log(query);
  };

  return {
    postWeather,
    postError    
  }
})();

export default Messager;