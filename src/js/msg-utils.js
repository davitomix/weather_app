import DomObj from './dom-utils';

const Messager = (() => {
  const domTransductor = DomObj;
  const getSuccess = (query, units, data) => {
    if (query === data.name) {
      domTransductor.injectSucessView(data);
    } else {
      domTransductor.injectFailView(data.message);
    }
  };

  const getError = (query, units, error) => {
    domTransductor.injectErrorView(error);
  };

  return {
    getSuccess,
    getError,
  };
})();

export default Messager;