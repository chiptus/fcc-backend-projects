const app = require('express')();
const port = process.env.PORT || 3000;

require('./index')(app);

app.listen(port, () => {
  console.log('listening on', port);
})