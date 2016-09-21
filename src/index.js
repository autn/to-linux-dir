module.exports = {
  toLinuxDir: function(inputDir, callback) {
    var input = inputDir;
    var output = inputDir.replace(/\\/g, '\/');

    return callback(output);
  }
};
