import DomObj from "./dom-utils";

const Messager = (() => {
  const domTransductor = DomObj;

  const getSuccess = (query, units, data) => {
    if (query === data.name) {
      console.log(data.name);
    } else {
      console.log(data.message);
    }
  };

  const getError = (query, units, error) => {
    console.log(error);
  };

  return {
    getSuccess,
    getError,  
  }
})();

export default Messager;