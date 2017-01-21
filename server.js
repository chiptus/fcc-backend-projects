const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

require('./timestamp-microservice/')(app,'/timestamp-microservice');

app.listen(port, function () {
  console.log('listening on port', port)
});
