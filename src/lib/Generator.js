module.exports = function (Model, length = 5) {
  const schemes = [];
  for (let i = 0; i < length; i++) {
    schemes.push(Model.create());
  }
  return schemes;
};
