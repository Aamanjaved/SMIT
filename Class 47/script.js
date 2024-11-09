        // BankAccount Constructor
        function BankAccount(accountNumber, accountHolderName, balance) {
            this.accountNumber = accountNumber;
            this.accountHolderName = accountHolderName;
            this.balance = balance;

            // Method to deposit amount
            this.deposit = function(amount) {
                if (amount > 0) {
                    this.balance += amount;
                    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
                } else {
                    return "Please enter a valid amount.";
                }
            };

            // Method to withdraw amount
            this.withdraw = function(amount) {
                if (amount > this.balance) {
                    return "Insufficient funds!";
                } else if (amount > 0) {
                    this.balance -= amount;
                    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
                } else {
                    return "Please enter a valid amount.";
                }
            };

            // Method to get balance
            this.getBalance = function() {
                return `Current balance: $${this.balance}`;
            };
        }

        // Create a BankAccount instance
        const myAccount = new BankAccount("123456789", "John Doe", 1000);

        // Functions to handle button actions
        function deposit() {
            const amount = parseFloat(document.getElementById("amount").value);
            document.getElementById("output").textContent = myAccount.deposit(amount);
        }

        function withdraw() {
            const amount = parseFloat(document.getElementById("amount").value);
            document.getElementById("output").textContent = myAccount.withdraw(amount);
        }

        function checkBalance() {
            document.getElementById("output").textContent = myAccount.getBalance();
        }