function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  
  BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
  };
  
  function SavingsAccount(accountNumber, balance, minimumBalance) {
    BankAccount.call(this, accountNumber, balance);
    this.minimumBalance = minimumBalance;
  }
  
  SavingsAccount.prototype = Object.create(BankAccount.prototype);
  SavingsAccount.prototype.constructor = SavingsAccount;
  
  SavingsAccount.prototype.withdraw = function(amount) {
    if (this.balance - amount >= this.minimumBalance) {
      this.balance -= amount;
      console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
    } else {
      console.log("Withdrawal denied. Insufficient funds to maintain minimum balance.");
    }
  };
  
  const savings = new SavingsAccount("123456", 1000, 500);
  
  savings.deposit(200);    
  savings.withdraw(300);     
  savings.withdraw(800);    
  