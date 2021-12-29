/* exported Bank */
function Bank() {

}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && balance === true) {
    return true;

  }
  return false;

};
Bank.prototype.getAccount = function () {};
Bank.prototype.getTotalAssets = function () {};
