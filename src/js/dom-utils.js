/* eslint-disable */
const DomObj = (() => {
  const injectView = (data) => {
    console.log('Injecting view!');
    console.log(data);
  };
  return {
    injectView,
  };
})();

export default DomObj;
/* eslint-enable */