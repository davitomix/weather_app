import DomObj from './dom-utils';
import PromiserObj from './promiser';

const SequencerObj = (() => {
  const domTransductor = DomObj;
  const promiser = PromiserObj;
  const menuBox = document.getElementById('menu-box');
  const weatherBox = document.getElementById('weather-box');
  const weatherContBox = document.getElementById('w-container-box');
  const startBtn = document.getElementById('start-btn');
  const backBox = document.getElementById('back-box');
  const backBtn = document.getElementById('back-btn');

  const startSeq = async () => {
    await promiser.resolveAfterTransition(menuBox, 'opacity', '0');
    domTransductor.undisplayElement(menuBox);
    domTransductor.displayElement(weatherBox);
    domTransductor.displayElement(backBox);
    await promiser.resolveAfterXms(100);
    domTransductor.showElement(weatherBox);
    await promiser.resolveAfterTransition(backBox, 'opacity', '1');
    domTransductor.displayElement(weatherContBox);
    await promiser.resolveAfterXms(100);
    domTransductor.showElement(weatherContBox);
    await promiser.resolveAfterXms(100);
  };

  const endSeq = async () => {
    await promiser.resolveAfterTransition(backBox, 'opacity', '0');
    domTransductor.hideElemnt(weatherContBox);
    domTransductor.hideElemnt(weatherBox);
    await promiser.resolveAfterXms(1000);
    domTransductor.undisplayElement(weatherBox);
    domTransductor.undisplayElement(weatherContBox);
    domTransductor.undisplayElement(backBox);
    domTransductor.displayElement(menuBox);
    await promiser.resolveAfterXms(100);
    await promiser.resolveAfterTransition(menuBox, 'opacity', '1');
    domTransductor.removeDisplayedData();
  };

  const initStartSequence = async () => {
    await promiser.resolveAfterXms(100);
    await promiser.resolveAfterTransition(menuBox, 'opacity', '1');
    startBtn.addEventListener('click', startSeq, false, { once: true });
    backBtn.addEventListener('click', endSeq, false, { once: true });
  };

  return {
    initStartSequence,
  };
})();

export default SequencerObj;
