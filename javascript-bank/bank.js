/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];

}

Bank.prototype.openAccount = function (holder, balance) {
  for (var i = 0; i <= balance.length - 1; i++) {
    // console.log(balance.length);
    // console.log(balance);
    if (balance[i] > 0 && balance[i] % 1 === 0) {
      this.accounts.push(balance[i]);
      return true;
    }
  }
  return null;
};

Bank.prototype.getAccount = function () {
  return null;
};
Bank.prototype.getTotalAssets = function () {
  return 0;
};
