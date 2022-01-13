/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {

  if (amount > 0 && amount % 1 === 0) {
    this.transactions.push(new Transaction('deposit', amount));

    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && amount % 1 === 0) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  } else {
    return false;
  }
};
Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  }
  var balance = 0;
  for (var i = 0; i <= this.transactions.length - 1; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance = balance + this.transactions[i].amount;
    } else {
      balance = balance - this.transactions[i].amount;
    }
  }
  return balance;
};
