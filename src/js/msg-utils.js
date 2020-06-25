import DomObj from "./dom-utils";

const Messager = (() => {
  const domTransductor = DomObj;

  const postWeather = (query, units, data) => {
    console.log(data);
  };

  const postError = (query, units, error) => {
    console.log(error);
  };
  
  return {
    postWeather,
    postError    
  }
})();

export default Messager;