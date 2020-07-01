import SequencerObj from './sequencer';

const Messager = (() => {
  const sequencer = SequencerObj;

  const getSuccess = (query, data) => {
    if (query === data.name) {
      sequencer.sucessViewSequence(data);
    } else {
      sequencer.errorViewSequence(data.message);
    }
  };

  const getError = (error) => {
    sequencer.errorViewSequence(error.message);
  };

  return {
    getSuccess,
    getError,
  };
})();

export default Messager;