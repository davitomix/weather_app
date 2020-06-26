/* eslint-disable */
const Messager = (() => {
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
  };
})();

export default Messager;
/* eslint-enable */