import DomObj from './dom-utils';
import PromiserObj from './promiser';

const SequencerObj = (() => {
  const dommer = DomObj;
  const promiser = PromiserObj;
  const menuBox = document.getElementById('menu-box');
  const weatherBox = document.getElementById('weather-box');
  const weatherContBox = document.getElementById('w-container-box');
  const startBtn = document.getElementById('start-btn');
  const backBox = document.getElementById('back-box');
  const backBtn = document.getElementById('back-btn');
  const weatherBase = document.querySelector('.weather-base');

  const startSeq = async () => {
    await promiser.resolveAfterTransition(menuBox, 'opacity', '0');
    dommer.undisplayElement(menuBox);
    dommer.displayElement(weatherBox);
    dommer.displayElement(backBox);
    await promiser.resolveAfterXms(100);
    dommer.showElement(weatherBox);
    await promiser.resolveAfterTransition(backBox, 'opacity', '1');
    dommer.displayElement(weatherContBox);
    await promiser.resolveAfterXms(100);
    dommer.showElement(weatherContBox);
    await promiser.resolveAfterXms(100);
  };

  const endSeq = async () => {
    await promiser.resolveAfterTransition(backBox, 'opacity', '0');
    dommer.hideElemnt(weatherContBox);
    dommer.hideElemnt(weatherBox);
    await promiser.resolveAfterXms(1000);
    dommer.undisplayElement(weatherBox);
    dommer.undisplayElement(weatherContBox);
    dommer.undisplayElement(backBox);
    dommer.displayElement(menuBox);
    await promiser.resolveAfterXms(100);
    await promiser.resolveAfterTransition(menuBox, 'opacity', '1');
    dommer.removeDisplayedData();
  };

  const initStartSequence = async () => {
    await promiser.resolveAfterXms(100);
    await promiser.resolveAfterTransition(menuBox, 'opacity', '1');
    startBtn.addEventListener('click', startSeq, false, { once: true });
    backBtn.addEventListener('click', endSeq, false, { once: true });
  };

  const sucessViewSequence = async (data) => {
    dommer.injectSucessView(data);
    await promiser.resolveAfterTransition(weatherBase, 'opacity', '1');
  };

  const errorViewSequence = (msg) => {
    dommer.injectErrorView(msg);
  };

  return {
    initStartSequence,
    sucessViewSequence,
    errorViewSequence,
  };
})();

export default SequencerObj;
