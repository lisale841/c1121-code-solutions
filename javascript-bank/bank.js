/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];

}

Bank.prototype.openAccount = function (holder, balance) {

  if (balance > 0 && balance % 1 === 0) {
    this.accounts.push(balance);
    return true;
  }
  return null;

};

Bank.prototype.getAccount = function () {
  return null;
};
Bank.prototype.getTotalAssets = function () {
  return 0;
};
