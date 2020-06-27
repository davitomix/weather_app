import SequencerObj from './sequencer';

const Messager = (() => {
  const sequencer = SequencerObj;

  const getSuccess = (query, data) => {
    if (query === data.name) {
      sequencer.hideAndShowSequence();
      sequencer.sucessViewSequence(data);
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