var toLinuxDirStyle = function toLinuxDir(inputDir, callback) {
  var input = inputDir;
  var output = input.replace(/\\/g, '/');

  return callback(output);
};

module.exports = {
  toLinuxDir: toLinuxDirStyle
};
