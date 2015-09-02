var should = require('should');

describe('simple search', function() {
  it('can index and search', function(done) {
    var prog = require('../main.js');
    prog.addAndSearch(function(err, results){
      (err === null).should.be.exactly(true);
      results.hits.length.should.be.exactly(9);
      results.totalHits.should.be.exactly(9);
      done();
    })
  });
});
