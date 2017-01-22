const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

require('./request-header-parser')(app, '/req-head-parser');

require('./timestamp-microservice/')(app,'/timestamp-microservice');

app.listen(port, function () {
  console.log('listening on port', port)
});
