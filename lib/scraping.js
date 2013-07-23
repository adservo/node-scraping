var cheerio = require('cheerio');
var util = require('util');
var exec = require('child_process').exec;
var child;
var url = 'http://writebox.co.uk';

child = exec('wget --output-document - ' + url, function (error, stdout, stderr) {
  if (error !== null) {
    console.log('exec error: ' + error);
    return;
  }
  scrape(stdout);
});

function scrape(body) {
  $ = cheerio.load(body);
  $('#main-content .module').slice(0, 3).each(function(index, el) {
    console.log($(this).find('.strong').text());
    console.log($(this).find('p').text());
  });
}
