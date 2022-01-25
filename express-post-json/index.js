const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', function (req, res) {
  // eslint-disable-next-line no-console
  console.log('require:', req.method);
  const results = [];
  for (const property in grades) {
    results.push(grades[property]);
  }
  res.json(results);

});

app.use(express.json());

app.post('/api/grades', function (req, res) {
  const data = req.body;
  // eslint-disable-next-line no-console
  console.log('Name: ', data.name);
  // eslint-disable-next-line no-console
  console.log('Course: ', data.course);
  // eslint-disable-next-line no-console
  console.log('Score: ', data.score);

  data.id = nextId;
  grades[nextId] = req.body;

  nextId++;

  res.status('201');
  res.send(req.body);

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
