module.exports = function (modelGenerator, length = 5) {
  const schemes = [];
  for (let i = 0; i < length; i++) {
    schemes.push(modelGenerator());
  }
  return schemes;
};
