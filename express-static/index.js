var express = require('express');
var app = express();

const path = require('path');
app.use('', express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
