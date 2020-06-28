import SequencerObj from './sequencer';

const Messager = (() => {
  const sequencer = SequencerObj;

  const getSuccess = (query, data) => {
    if (query === data.name) {
      sequencer.searchSequence(data);
      setTimeout(() => {
        sequencer.sucessViewSequence(data);
      }, 1000);
    } else {
      sequencer.errorViewSequence(data.message);
    }
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