exports.addAndSearch = function(callback) {

  var si = require('search-index')({indexPath: 'testindex', logLevel: 'info'});
  var dataset = require('./node_modules/reuters-21578-json/data/justTen/justTen.json');

  si.add(dataset, {}, function(err) {
    if (!err) console.log('indexed!');
    else return callback(err, {})
    console.log('doing a test search...');
    si.search({"query": {"*":["usa", "reuter"]}}, function(err, results) {
      console.log('total hits: ' + results.totalHits);
      for (var i = 0; i < results.hits.length; i++) {
        console.log();
        console.log('* ' + results.hits[i].document.title + ' *');
        console.log('* ' + results.hits[i].document.date + ' *');
        console.log();
        console.log(results.hits[i].document.body);
        console.log('--------------------');
      }
      return callback(err, results);
    });
  });

}
