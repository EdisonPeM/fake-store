module.exports = (modelGenerator, length = 5) =>
  Array.apply(null, { length }).map(modelGenerator);
