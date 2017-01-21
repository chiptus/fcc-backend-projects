const express = require('express');

const port = process.argv[2] || 3000;
const { parseDate } = require('./date-utils');

const app = express();

app.all('/:dateStr', ({ params: { dateStr } }, res) => {
  res.end(JSON.stringify(parseDate(dateStr)));
});

app.listen(port);

