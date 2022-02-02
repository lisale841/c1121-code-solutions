const express = require('express');
const app = express();
const fs = require('fs');
const jsonData = require('./data.json');
// console.log(jsonData);
const list = jsonData;

app.get('/api/notes', function (req, res) {
  // eslint-disable-next-line no-console
  console.log('require:', req.method);
  const results = [];
  for (const property in list.notes) {
    results.push(list.notes[property]);

  }
  res.status('200').json(results);

});

app.get('/api/notes/:id', function (req, res) {
  if (req.params.id < 0) {

    res.status('400').json({ error: 'id must be a positive integer' });
  } else if (jsonData.notes[req.params.id]) {
    res.status('200').json(list.notes[req.params.id]);
  } else {
    res.status('404').json({ error: 'cannot find note with id' + ' ' + req.params.id });
  }

});

app.use(express.json());

app.post('/api/notes', function (req, res) {
  const data = req.body;

  if (data.content) {
    list.notes[list.nextId] = {
      content: data.content,
      id: list.nextId
    };
    list.nextId++;

    const newJSON = JSON.stringify(jsonData, null, 2);
    fs.writeFile('./data.json', newJSON, err => {
      if (err) {
        console.error(err);
        res.status('500').json({ error: 'An unexpected error has occured.' });
      } else {
        res.status('201');
        res.send(list.notes[list.nextId]);
      }
    });

  } else if (!data.content) {
    res.status('400').json({ error: 'content is required' });
  }

});

app.delete('/api/notes/:id', function (req, res) {
  // eslint-disable-next-line no-console
  const notesId = req.params.id;
  if (notesId < 0) {
    res.status('400').json({ error: 'id must be a positive integer' });
  } else if (jsonData.notes[req.params.id]) {
    delete list.notes[req.params.id];
    const newJSON = JSON.stringify(jsonData, null, 2);
    fs.writeFile('./data.json', newJSON, err => {
      if (err) {
        console.error(err);
        res.status('500').json({ error: 'An unexpected error has occured.' });

      } else {
        res.status('204');
        res.send();
      }
    });
  } else {
    res.status('404').json({ error: 'cannot find note with id' + ' ' + req.params.id });
  }
});

app.put('/api/notes/:id', function (req, res) {
  // eslint-disable-next-line no-console
  const data = req.body;
  const notesId = req.params.id;
  if (notesId < 0) {
    res.status('400').json({ error: 'id must be a positive integer' });
  } else if (!data.content) {
    res.status('400').json({ error: 'content is required' });
  } else if (jsonData.notes[req.params.id]) {

    list.notes[req.params.id].content = data.content;

    const newJSON = JSON.stringify(jsonData, null, 2);
    fs.writeFile('./data.json', newJSON, err => {
      if (err) {
        console.error(err);
        res.status('500').json({ error: 'An unexpected error has occured.' });

      } else {
        res.status('200');
        res.send(list.notes[list.nextId]);
      }
    });
  } else {
    res.status('404').json({ error: 'cannot find note with id' + ' ' + req.params.id });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
