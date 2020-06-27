import DomObj from './dom-utils';

const domInjector = DomObj;

const Messager = (() => {
  const getSuccess = (query, units, data) => {
    if (query === data.name) {
      domInjector.injectSucessView(data);
    } else {
      domInjector.injectFailView(data.message);
    }
  };

  const getError = (query, units, error) => {
    domInjector.injectErrorView(error);
  };

  return {
    getSuccess,
    getError,
  };
})();

export default Messager;