const takeAChance = require('./take-a-chance');

const promiseName = takeAChance('Lisa');

promiseName.catch(error => {
  console.error(error.message);
});

promiseName.then(result => {
  console.log(result);

});
