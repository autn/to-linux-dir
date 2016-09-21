var expect = require('chai').expect;
var convert = require('../src/index');
describe('#Convert to Linux directory', function() {
  it('Convert `dir\\to\\path`', function(done) {

    convert.toLinuxDir('dir\\to\\path', function(dLinux) {

      expect(dLinux).to.equal('dir/to/path');
      done();
    });
  });

  it('Convert `dir\\to/path`', function(done) {

    convert.toLinuxDir('dir\\to/path', function(dLinux) {

      expect(dLinux).to.equal('dir/to/path');
      done();
    });
  });

  it('Convert `dir\\to\\path\\index.js`', function(done) {

    convert.toLinuxDir('dir\\to\\path\\index.js', function(dLinux) {

      expect(dLinux).to.equal('dir/to/path/index.js');
      done();
    });
  });

  it('Convert `dir/to/path\\index.js', function(done) {

    convert.toLinuxDir('dir/to/path\\index.js', function(dLinux) {

      expect(dLinux).to.equal('dir/to/path/index.js');
      done();
    });
  });
});
