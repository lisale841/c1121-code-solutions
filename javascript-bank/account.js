/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  var typeOf = typeof amount;

  if (typeOf === 'number' && amount > 0 && !!amount === true) {
    return true;

  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && amount === true) {

    return true;
  } else {
    return false;
  }
};
Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  }

};
