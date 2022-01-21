const fs = require('fs');
const jsonData = require('./data.json');

const task = process.argv[2];
const keys = Object.keys(jsonData.notes);

if (task === 'read') {
  for (const key of keys) {
    console.log(key + ':', jsonData.notes[key]);
  }
} else if (task === 'create') {
  jsonData.notes[jsonData.nextId] = process.argv[3];
  jsonData.nextId++;
  writeToFile(jsonData);

} else if (task === 'update') {
  jsonData.notes[process.argv[3]] = process.argv[4];
  writeToFile(jsonData);
} else if (task === 'delete') {
  delete jsonData.notes[process.argv[3]];
  writeToFile(jsonData);
} else {
  console.log('error');
}

function writeToFile(data) {
  const newJSON = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', newJSON, err => {

    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
