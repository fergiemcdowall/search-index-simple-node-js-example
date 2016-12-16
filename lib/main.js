exports.addAndSearch = function(callback) {

  var options = {indexPath: 'testindex', logLevel: 'info'}
  var searchIndex = require('search-index')
  var dataset = require('../node_modules/reuters-21578-json/data/justTen/justTen.json')

  searchIndex(options, function(err, si) {
    si.add(dataset, {}, function(err) {
      if (!err) console.log('indexed!')
      else return callback(err, {})
      console.log('doing a test search...')
      si.search({"query": {AND: {"*":["usa", "reuter"]}}}, function(err, results) {
        console.log('total hits: ' + results.totalHits)
        for (var i = 0; i < results.hits.length; i++) {
          console.log()
          console.log('* ' + results.hits[i].document.title + ' *')
          console.log('* ' + results.hits[i].document.date + ' *')
          console.log()
          console.log(results.hits[i].document.body)
          console.log('--------------------')
        }
        return callback(err, results)
      })
    })
  })
}
