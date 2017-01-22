const express = require('express');

const { parseDate } = require('./date-utils');

module.exports = addTimeStampMS;

function addTimeStampMS(app, root) {
  app.all(`${root}/:dateStr`, ({ params: { dateStr } }, res) => {
    res.end(JSON.stringify(parseDate(dateStr)));
  });
}


