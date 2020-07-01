const PromiserObj = (() => {
  const resolveAfterXms = (time) => new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });

  const resolveAfterTransition = (el, property, value) => new Promise(resolve => {
    el.style[property] = value;
    const transitionEnded = e => {
      if (e.propertyName !== property) return;
      el.removeEventListener('transitionend', transitionEnded);
      resolve();
    };
    el.addEventListener('transitionend', transitionEnded);
  });

  return {
    resolveAfterXms,
    resolveAfterTransition,
  };
})();

export default PromiserObj;