const express = require('express');
const app = express();
const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());
app.get('/api/grades', function (req, res) {
  // eslint-disable-next-line no-console
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.post('/api/grades', function (req, res) {
  const data = req.body;
  if (!data.score || (data.score < 0 || data.score > 100)) {
    res.status(400).json({
      error: 'Invalid score'
    });
    return;
  } else if (!data.course || !data.name) {
    res.status(400).json({
      error: 'Invalid course or name'
    });
    return;
  }

  // eslint-disable-next-line no-console
  const sql = `
   insert into "grades" ("name", "course", "score")
   values ($1, $2, $3)
   returning *;
  `;
  const params = [data.name, data.course, data.score];
  db.query(sql, params)
    .then(result => {

      res.status(201).json(result.rows[0]);
      // }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.put('/api/grades/:gradeId', function (req, res) {
  // eslint-disable-next-line no-console
  const data = req.body;
  if (!data.score || (data.score < 0 || data.score > 100)) {
    res.status(400).json({
      error: 'Invalid score'
    });
    return;
  } else if (!req.params.gradeId) {
    res.status(400).json({
      error: 'Invalid gradeId'
    });
    return;
  } else if (!data.course || !data.name) {
    res.status(400).json({
      error: 'Invalid course or name'
    });
    return;
  }

  // eslint-disable-next-line no-console
  const sql = `
    update "grades"
    set "name" = $2,
    "course" = $3,
    "score"  = $4
    where "gradeId" = $1
    returning *;
  `;
  const params = [req.params.gradeId, data.name, data.course, data.score];
  db.query(sql, params)
    .then(result => {
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${req.params.gradeId}`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.delete('/api/grades/:gradeId', function (req, res) {
  // eslint-disable-next-line no-console
  const gradeId = req.params.gradeId;
  if (isNaN(gradeId)) {
    res.status(400).json({
      error: 'Invalid grade'
    });
    return;
  }

  // eslint-disable-next-line no-console
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      if (result.rows.length > 0) {
        res.status(204).json(result.rows[0]);
      } else {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${req.params.gradeId}`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
