const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const reducerSum = (previousValue, currentValue) => previousValue + currentValue;
console.log('sum:', numbers.reduce(reducerSum));

const reducerMultiplied = (previousValue, currentValue) => previousValue * currentValue;
console.log('product:', numbers.reduce(reducerMultiplied));

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const groupedType = groupBy(account, 'type');

function withdrawalsFunction() {
  const withdrawals = [];
  for (var i = 0; i <= groupedType.withdrawal.length - 1; i++) {
    withdrawals.push(groupedType.withdrawal[i].amount);
  }
  return withdrawals;
}

function depositFunction(deposit) {
  const deposits = [];
  for (var i = 0; i <= groupedType.deposit.length - 1; i++) {
    deposits.push(groupedType.deposit[i].amount);
  }
  return deposits;
}

const reducerWithdrawal = (previousValue, currentValue) => previousValue + currentValue;
const totalWithdrawal = withdrawalsFunction().reduce(reducerWithdrawal);
const reducerDeposit = (previousValue, currentValue) => previousValue + currentValue;
const totalDeposit = depositFunction().reduce(reducerDeposit);
console.log('balance:', totalDeposit - totalWithdrawal);

const composite = traits.reduce((composite, traits) => {
  return Object.assign(composite, traits);
}, {});

console.log(composite);
