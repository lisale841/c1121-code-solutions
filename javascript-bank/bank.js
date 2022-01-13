/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];

}

Bank.prototype.openAccount = function (holder, balance) {

  if (balance > 0 && balance % 1 === 0) {

    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;

  }
  return null;

};

Bank.prototype.getAccount = function (number) {
  // look thru the this.accounts one by one to get the number
  // check if the account number matches the parameter number.
  // return that account.
  for (var i = 0; i <= this.accounts.length - 1; i++) {
    if (this.accounts[i].number === number) {

      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {

  var totalBalance = 0;
  if (this.accounts.length === 0) {
    return 0;
  }
  for (var i = 0; i <= this.accounts.length - 1; i++) {
    totalBalance = totalBalance + this.accounts[i].getBalance();

  }

  return totalBalance;
};
