function passGlobalState(callback, globalState) {
  return function () {
    callback(globalState);
  };
}

export default passGlobalState;
