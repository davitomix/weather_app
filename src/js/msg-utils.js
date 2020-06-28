import SequencerObj from './sequencer';

const Messager = (() => {
  const sequencer = SequencerObj;
  let counter = 0;

  const getSuccess = (query, data) => {
    if (query === data.name) {
      if (counter > 0) {
        sequencer.searchSequence();
        setTimeout(() => {
          sequencer.sucessViewSequence(data);
        }, 800);
      } else {
        sequencer.sucessViewSequence(data);
      }
    } else {
      sequencer.errorViewSequence(data.message);
    }
    counter += 1;
  };

  const getError = (error) => {
    sequencer.errorViewSequence(error);
  };

  return {
    getSuccess,
    getError,
  };
})();

export default Messager;