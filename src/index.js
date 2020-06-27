import './styles/styles.scss';
import SequencerObj from './js/sequencer';
import ListenerObj from './js/listener';

const sequencer = SequencerObj;
const listener = ListenerObj;

const start = async () => {
  await sequencer.initStartSequence();
  listener.listen();
  // setTimeout(() => {
  //   wheater.getApiData('Tlalnepantla');
  //   console.log('called api');
  // }, 1000);
};

start();