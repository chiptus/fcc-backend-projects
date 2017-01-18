var express = require('express')
const port = process.argv[2] || 3000;
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Example app listening on port', port)
});
