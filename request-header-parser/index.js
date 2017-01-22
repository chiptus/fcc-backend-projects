const p = require('useragent');

module.exports = addRequestHeaderParser;

function addRequestHeaderParser(app, root = '') {
  app.get(`${root}/`, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(parseReq(req)));
  })
}

function getLanguage(languagesStr = '') {
  return languagesStr.split(',')[0];
}

function parseReq({ip, headers: {'accept-language': languages, 'user-agent': ua}}) {
  return {
    ip: ip,
    language: getLanguage(languages),
    os: p.parse(ua).os.toString(),
  };
}