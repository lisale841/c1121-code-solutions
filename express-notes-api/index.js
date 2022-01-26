const express = require('express');
const app = express();
// const fs = require('fs');
const jsonData = require('./data.json');
// console.log(jsonData);
const list = jsonData;

app.get('/api/notes', function (req, res) {
  // eslint-disable-next-line no-console
  console.log('require:', req.method);
  const results = [];
  for (const property in list) {
    results.push(list.notes[property]);
    // console.log(list.notes[property]);
    // console.log(results);
  }
  res.status('200').json(results);

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
